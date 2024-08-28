import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private endDate: Date | undefined
  private eventName: string | undefined
  private timer$ = new BehaviorSubject<string>('')
  private eventName$ = new BehaviorSubject<string>('')

  private readonly EXPIRY_DURATION_MS = 15 * 60 * 1000
  private readonly STORAGE_KEY_PREFIX = 'nccountdown_'

  constructor() {
    this.loadFromSessionStorage()
    this.startCountdown()
  }

  setEvent(name: string, date: Date) {
    this.eventName = name
    this.endDate = date
    this.saveToSessionStorage()
    this.startCountdown()
  }

  getTimer() {
    return this.timer$.asObservable()
  }

  getEventName() {
    return this.eventName$.asObservable()
  }

  private calculateTimeLeft() {
    const now = new Date().getTime()
    if (!this.endDate) {
      return ''
    }
    const end = new Date(this.endDate).getTime()
    const timeLeft = end - now

    if (timeLeft <= 0) {
      this.timer$.next("It's time")
      return "It's time"
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    return `${days} days, ${hours} h, ${minutes}m, ${seconds}s`
  }

  private startCountdown() {
    if (this.endDate) {
      setInterval(() => {
        this.timer$.next(this.calculateTimeLeft())
      }, 1000)
    }
  }

  private saveToSessionStorage() {
    if (this.eventName && this.endDate) {
      sessionStorage.setItem(
        `${this.STORAGE_KEY_PREFIX}eventName`,
        this.eventName,
      )
      sessionStorage.setItem(
        `${this.STORAGE_KEY_PREFIX}endDate`,
        this.endDate.toString(),
      )
      sessionStorage.setItem(
        `${this.STORAGE_KEY_PREFIX}timestamp`,
        new Date().getTime().toString(),
      )
    }
  }

  private loadFromSessionStorage() {
    const storedName = sessionStorage.getItem(
      `${this.STORAGE_KEY_PREFIX}eventName`,
    )
    const storedDate = sessionStorage.getItem(
      `${this.STORAGE_KEY_PREFIX}endDate`,
    )
    const storedTimestamp = sessionStorage.getItem(
      `${this.STORAGE_KEY_PREFIX}timestamp`,
    )

    if (storedTimestamp) {
      const currentTime = new Date().getTime()
      const timestamp = parseInt(storedTimestamp, 10)

      if (currentTime - timestamp > this.EXPIRY_DURATION_MS) {
        sessionStorage.clear()
      } else {
        if (storedName && storedDate) {
          this.eventName = storedName
          this.endDate = new Date(storedDate)
          this.eventName$.next(storedName)
        }
      }
    }
  }
}

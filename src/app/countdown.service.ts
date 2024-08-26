import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private endDate: Date | undefined;
  private eventName: string | undefined;
  private timer$ = new BehaviorSubject<string>('');

  constructor() {
    this.loadFromStorage();
    this.startCountdown();
  }

  setEvent(name: string, date: Date) {
    this.eventName = name;
    this.endDate = date;
    this.saveToStorage();
    this.startCountdown();
  }

  getTimer() {
    return this.timer$.asObservable();
  }

  private calculateTimeLeft() {
    const now = new Date().getTime();
    if (!this.endDate) {
      return '';
    }
    const end = new Date(this.endDate).getTime();
    const timeLeft = end - now;

    if (timeLeft <= 0) {
      this.timer$.next("It's time");
      return "It's time";
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${days} days, ${hours} h, ${minutes}m, ${seconds}s`;
  }

  private startCountdown() {
    if (this.endDate) {
      setInterval(() => {
        this.timer$.next(this.calculateTimeLeft());
      }, 1000);
    }
  }

  private saveToStorage() {
    if (this.eventName) {
      localStorage.setItem('eventName', this.eventName);
    }
    if (this.endDate) {
      localStorage.setItem('endDate', this.endDate.toString());
    }
  }

  private loadFromStorage() {
    const storedName = localStorage.getItem('eventName');
    const storedDate = localStorage.getItem('endDate');

    if (storedName && storedDate) {
      this.eventName = storedName;
      this.endDate = new Date(storedDate);
    }
  }
}

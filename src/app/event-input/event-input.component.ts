import { Component, HostListener } from '@angular/core'
import { CountdownService } from '../countdown.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-event-input',
  templateUrl: './event-input.component.html',
  styleUrls: ['./event-input.component.scss'],
})
export class EventInputComponent {
  eventName: string = ''
  endDate: string = ''
  minDate: string = ''
  eventNamePlaceholder: string = 'Your event here'
  maxLength: number = 35

  constructor(private countdownService: CountdownService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMaxLength()
  }

  ngOnInit() {
    this.setMinDate()
    this.updateMaxLength()
  }

  setMinDate() {
    const now = new Date()
    this.minDate = now.toISOString().slice(0, 16)
  }

  updateMaxLength() {
    const screenWidth = window.innerWidth

    if (screenWidth <= 599) {
      this.maxLength = 15
    } else if (screenWidth <= 899) {
      this.maxLength = 25
    } else if (screenWidth <= 1199) {
      this.maxLength = 30
    } else if (screenWidth <= 1399) {
      this.maxLength = 40
    } else {
      this.maxLength = 50
    }
  }

  submit() {
    if (!this.eventName || !this.endDate) {
      alert('Please fill in both fields.')
      return
    }

    const date = new Date(this.endDate)

    if (isNaN(date.getTime())) {
      alert('Invalid date format.')
      return
    }

    const now = new Date()
    if (date <= now) {
      alert('The end time must be in the future.')
      return
    }

    this.countdownService.setEvent(this.eventName, date)
  }

  handleEnter(form: NgForm) {
    if (form.valid) {
      this.submit()
    }
  }

  alertForMaxLength(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.value.length === input.maxLength) {
      alert('Maximum character limit reached.')
    }
  }
}

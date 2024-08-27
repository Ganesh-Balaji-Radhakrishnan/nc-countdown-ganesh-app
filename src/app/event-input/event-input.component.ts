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

  constructor(private countdownService: CountdownService) {}

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
      alert('The end date must be in the future.')
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

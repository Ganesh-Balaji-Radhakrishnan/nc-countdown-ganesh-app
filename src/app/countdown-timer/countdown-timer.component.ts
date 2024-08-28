import { Component, Input, OnInit } from '@angular/core'
import { CountdownService } from '../countdown.service'

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
})
export class CountdownTimerComponent implements OnInit {
  @Input() placeholder: string = ''
  countdown: string = ''
  countdownPlaceHolder: string = `0 days,  0 h, 0m, 0s`

  constructor(private countdownService: CountdownService) {}

  ngOnInit() {
    this.countdownService.getTimer().subscribe((timer) => {
      this.countdown = timer
    })
  }
}

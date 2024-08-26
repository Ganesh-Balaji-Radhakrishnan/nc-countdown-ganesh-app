import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  countdown: string = '';

  constructor(private countdownService: CountdownService) {}

  ngOnInit() {
    this.countdownService.getTimer().subscribe((timer) => {
      this.countdown = timer;
    });
  }
}

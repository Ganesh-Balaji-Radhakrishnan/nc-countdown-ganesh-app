import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { EventInputComponent } from './event-input/event-input.component';
import { EventNameDisplayComponent } from './event-name-display/event-name-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    EventInputComponent,
    EventNameDisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

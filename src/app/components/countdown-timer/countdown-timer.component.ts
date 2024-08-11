import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId: any;
  public timeLeft: { days: number, hours: number, minutes: number, seconds: number };
  public formattedSeconds: string;

  constructor() {
    this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    this.formattedSeconds = '00'; // Initialize formattedSeconds
  }

  ngOnInit(): void {
    this.startCountdown(new Date('2024-12-31T23:59:59').getTime());
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private startCountdown(endTime: number): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(this.intervalId);
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.formattedSeconds = '00';
      } else {
        this.timeLeft.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.timeLeft.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.timeLeft.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.timeLeft.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.formattedSeconds = this.timeLeft.seconds.toString().padStart(2, '0');
      }
    }, 1000);
  }
}

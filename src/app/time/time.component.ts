import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent {
  public currentTime: number;
  constructor() {
    setInterval(() => {
      this.currentTime = Date.now();
    }, 10);
  }
}

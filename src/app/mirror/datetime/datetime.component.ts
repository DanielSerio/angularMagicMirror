import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {
  datetime = new Date();

  constructor() { }

  ngOnInit() {
    this.tick();
  }

  tick(): void {
    window.setInterval(() => {
      this.datetime = new Date();
    }, 1000);
  }

}

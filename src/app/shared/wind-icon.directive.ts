import { Wind } from './forecast-response';
import { Directive, Input, OnInit, HostBinding } from '@angular/core';

export interface WindIcon {
  type: 'dir' | 'speed';
  wind: Wind; 
}

@Directive({
  selector: '[WindIcon]'
})

export class WindIconDirective implements OnInit{
  @Input() WindIcon: WindIcon;
  @HostBinding('class')
  elementClass;

  constructor() { 
  }

  ngOnInit() {
    if (this.WindIcon.type === 'dir') {
      //add direction class
      this.elementClass = `wi wi-wind wi-towards-${this.WindIcon.wind.dir}`;
    } else {
      //add beaufort class
      this.elementClass = `wi wi-wind-beaufort-${this.beaufort()}`;
    }
  }

  private beaufort(): number {
    const mph = this.WindIcon.wind.mph;

    if (mph < 1) { return 0; }
    else if (mph >= 1 && mph <= 3) { return 1; }
    else if (mph >= 4 && mph <= 7) { return 2; }
    else if (mph >= 8 && mph <= 12) { return 3; }
    else if (mph >= 13 && mph <= 18) { return 4; }
    else if (mph >= 19 && mph <= 24) { return 5; }
    else if (mph >= 25 && mph <= 31) { return 6; }
    else if (mph >= 32 && mph <= 38) { return 7; }
    else if (mph >= 39 && mph <= 46) { return 8; }
    else if (mph >= 47 && mph <= 54) { return 9; }
    else if (mph >= 55 && mph <= 63) { return 10; }
    else if (mph >= 64 && mph <= 72) { return 11; }
    return 12;
  }

}

import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[WeatherIcon]'
})
export class WeatherIconDirective implements OnInit {
  @Input() WeatherIcon: string;
  private classString: string;

  @HostBinding('class')
  elementClass = 'initial';
  
  constructor() { 
    
  }

  ngOnInit() {
    switch(this.WeatherIcon) {
      case 'chanceflurries' || 'flurries':
        this.classString = `wi wi-wu-${this.WeatherIcon} snow-wind`;
        break;
      case 'chancesleat' || 'sleat':
        this.classString = `wi wi-wu-${this.WeatherIcon} sleet`;
        break;
      case 'chancesnow' || 'snow':
        this.classString =  `wi wi-wu-${this.WeatherIcon} snow`;
        break;
      case 'chancetstorms' || 'tstorms':
        this.classString = `wi wi-wu-${this.WeatherIcon} thunderstorm`;
        break;
      case 'clear' || 'mostlysunny' || 'partlysunny' || 'sunny' || 'unknown':
        this.classString = `wi wi-wu-${this.WeatherIcon} day-sunny`;
        break;
      case 'cloudy' || 'mostlycloudy' || 'partlycloudy':
        this.classString = `wi wi-wu-${this.WeatherIcon} day-cloud`;
        break;
      case 'chancerain':
        this.classString = `wi wi-wu-chancerain rain`;
      break;
      case 'rain':
        this.classString = `wi wi-wu-rain showers`;
      break;
      default: this.classString = `wi wi-wu-hazy day-haze`;  
    };
    this.elementClass = this.classString;
  }
}

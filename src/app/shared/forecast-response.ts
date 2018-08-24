import { SimpleForecast } from './forecast-response';
export interface BlankObject {
  [key: string]: any;
}

export interface Temperature {
  "fahrenheit": string;
  "celsius": string;
}

export interface Precipitation {
  in: (number | string);
  mm?: (number | string);
  cm?: (number | string);
}

export interface Wind {
  mph: number;
  kph: number;
  dir: string;
  degrees: number;
}

export interface TextForecast {
  period: number;
  icon: string;
  icon_url: string;
  title: string;
  fctext: string;
  fcttext_metric: string;
  pop: string;
}

export interface SimpleForecast {
  date: BlankObject;
  period: number;
  high: Temperature;
  low: Temperature;
  conditions: string;
  icon: string;
  icon_url: string;
  skyicon: string;
  pop: (number | string);
  qpf_allday: Precipitation;
  qpf_day: Precipitation;
  qpf_night: Precipitation;
  snow_allday: Precipitation;
  snow_day: Precipitation;
  snow_night: Precipitation;
  maxwind: Wind;
  avewind: Wind;
  avehumidity: number;
  maxhumidity: number;
  minhumidity: number;
}

export interface Forecast {
  txt_forecast: {
    date: string;
    forecastday: TextForecast[];
  };
  simpleforecast: {
    forecastday: SimpleForecast[];
  };
}

export interface ForecastResponse {
  response: BlankObject;
  forecast: Forecast;
}

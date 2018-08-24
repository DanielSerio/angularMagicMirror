import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MirrorComponent } from './mirror/mirror.component';
import { WeatherComponent } from './mirror/weather/weather.component';
import { WeatherIconDirective } from './shared/weather-icon.directive';
import { WindIconDirective } from './shared/wind-icon.directive';
import { DatetimeComponent } from './mirror/datetime/datetime.component';
import { NewsComponent } from './mirror/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    MirrorComponent,
    WeatherComponent,
    WeatherIconDirective,
    WindIconDirective,
    DatetimeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

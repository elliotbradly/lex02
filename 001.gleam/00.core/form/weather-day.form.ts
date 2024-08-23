import WeatherItem from "../interface/weather-day.interface";
import WeatherHour from "../interface/weather-hour.interface";

export default class WeatherForm implements WeatherItem {
  location: string = "";
  summary: string = "";
  sunriseTime: number = 0;
  sunsetTime: number = 0;
  moonPhase: number = 0;
  temperatureMin: number = 0;
  temperatureMinTime: number = 0;
  temperatureMax: number = 0;
  temperatureMaxTime: number = 0;
  hour: WeatherHour[] = [];

  constructor() {}
}

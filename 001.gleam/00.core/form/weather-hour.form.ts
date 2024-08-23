import WeatherHour from "../interface/weather-hour.interface";

export default class WeatherHourForm implements WeatherHour {
  type: string = "";
  temperature: number = 0;
  windGust: number = 0;
  windBearing: number = 0;
  precipIntensity: number = 0;
  humidity: string = "";

  constructor() {}
}

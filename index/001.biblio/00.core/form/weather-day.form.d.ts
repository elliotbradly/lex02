import WeatherItem from "../interface/weather-day.interface";
import WeatherHour from "../interface/weather-hour.interface";
export default class WeatherForm implements WeatherItem {
    location: string;
    summary: string;
    sunriseTime: number;
    sunsetTime: number;
    moonPhase: number;
    temperatureMin: number;
    temperatureMinTime: number;
    temperatureMax: number;
    temperatureMaxTime: number;
    hour: WeatherHour[];
    constructor();
}

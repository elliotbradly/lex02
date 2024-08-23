import WeatherHour from "../interface/weather-hour.interface";
export default class WeatherHourForm implements WeatherHour {
    type: string;
    temperature: number;
    windGust: number;
    windBearing: number;
    precipIntensity: number;
    humidity: string;
    constructor();
}

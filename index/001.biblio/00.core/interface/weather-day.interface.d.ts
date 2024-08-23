import WeatherHour from "./weather-hour.interface";
export default interface WeatherDay {
    summary: string;
    sunriseTime: number;
    sunsetTime: number;
    moonPhase: number;
    temperatureMin: number;
    temperatureMinTime: number;
    temperatureMax: number;
    temperatureMaxTime: number;
    hour: WeatherHour[];
}

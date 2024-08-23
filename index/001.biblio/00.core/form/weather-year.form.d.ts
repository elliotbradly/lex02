import WeatherDay from "../interface/weather-day.interface";
import WeatherYear from "../interface/weather-year.interface";
export default class WeatherYearForm implements WeatherYear {
    location: string;
    dayList: WeatherDay[];
    constructor();
}

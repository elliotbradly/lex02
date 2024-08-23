import WeatherDay from "./weather-day.interface";
export default interface WeatherYear {
    location: string;
    dayList: WeatherDay[];
}

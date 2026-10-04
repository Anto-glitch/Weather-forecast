import axios from 'axios';
import { File, Paths } from 'expo-file-system';
import { float } from 'react-native/Libraries/Types/CodegenTypes';
import { checkWeather } from './checkWeather';

export async function getWeather(latitude: number, longitude: number) {
  interface WeatherData {
  elevation: number;
  generationtime_ms: float;
  hourly :{
    temperature_2m: number;
    time: string;
  }[];
  hourly_units: {
    temperature_2m: string;
    time: string;
  };
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
};


  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=3`,
  );
  const data: WeatherData = response.data;

try {
  const file = new File(Paths.document, 'weather_data.json');
  file.write(JSON.stringify(data, null, 4));
  checkWeather();
} catch (error) {
  console.error(error);
}
}

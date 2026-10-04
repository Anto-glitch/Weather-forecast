import axios from 'axios';
import { File, Paths } from 'expo-file-system';
import { float } from 'react-native/Libraries/Types/CodegenTypes';


export async function getWeather(latitude: number, longitude: number) {
  interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  minutely_15_units: {
    time: string;
    temperature_2m: string;
  };
  minutely_15: {
    time: string[];
    temperature_2m: (number | null)[];
  };
}

  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&minutely_15=temperature_2m&forecast_days=3`,
  );
  console.log(response.data);
  const data: WeatherData = response.data;

  try {
    const file = new File(Paths.document, 'weather_data.json');
    file.write(JSON.stringify(data, null, 4));
  } catch (error) {
    console.error(error);
  }
}

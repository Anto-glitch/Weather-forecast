import { File, Paths } from 'expo-file-system';

export function checkWeather() {
  try {
    const file = new File(Paths.document, 'weather_data.json');
    console.log(file.textSync());
  } catch (error) {
    console.error(error);
  }
}

import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { File, Paths } from 'expo-file-system';
import { weatherSchema } from './weatherSchema';

export async function getWeather(latitude: number, longitude: number) {
  const file = new File(Paths.document, 'weather_data.json');
  const readCachedWeather = () => weatherSchema.parse(JSON.parse(file.textSync()));
  const networkState = await NetInfo.fetch();

  if (networkState.isInternetReachable === false) {
    return readCachedWeather();
  }

  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&minutely_15=temperature_2m&forecast_days=3`,
    );
    const data = weatherSchema.parse(response.data);
    file.write(JSON.stringify(data, null, 4));
    return data;
  } catch (error) {
    try {
      return readCachedWeather();
    } catch (cacheError) {
      console.error('Nie udało się pobrać ani odczytać zapisanej pogody:', {
        error,
        cacheError,
      });
      throw error;
    }
  }
}

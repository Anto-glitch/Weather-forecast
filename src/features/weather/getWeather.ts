import axios from 'axios';
import { File, Paths } from 'expo-file-system';
import { weatherSchema } from './weatherSchema';
import NetInfo from 'expo-network';

export async function getWeather(latitude: number, longitude: number) {
  const state = await NetInfo.getNetworkStateAsync();
  if (!state.isConnected) {
    try {
      const file = new File (Paths.document, 'weather_data.json');
      const data = file.textSync();
      return weatherSchema.parse(JSON.parse(data));
    } catch (error){
      console.error(error);
    }
  else {
    const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&minutely_15=temperature_2m&forecast_days=3`,
    );
    const data = weatherSchema.parse(response.data);
  }
  }
  

  try {
    const file = new File(Paths.document, 'weather_data.json');
    file.write(JSON.stringify(data, null, 4));
  } catch (error) {
    console.error(error);
  }

  return data;
}

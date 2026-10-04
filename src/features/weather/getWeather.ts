import axios from 'axios';

export async function getWeather(latitude: number, longitude: number) {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=3`,
  );

  console.log(response.data);

  return response.data;
}

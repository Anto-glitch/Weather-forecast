import { useQuery } from '@tanstack/react-query';
import { getWeather } from './getWeather';

export const useWeatherQuery = (userLatitude: number, userLongitude: number) => {
  const WeatherQuery = useQuery({
    queryKey: ['weather', userLatitude, userLongitude],
    queryFn: () => getWeather(userLatitude, userLongitude),
    staleTime: 1000 * 30, // 30 seconds for demonstration purposes
    //staleTime: 1000 * 60 * 15, // 15 minutes for production
  });
  return WeatherQuery;
};

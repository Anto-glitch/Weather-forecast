import { useQuery } from '@tanstack/react-query';
import { getWeather } from './getWeather';

export const useWeatherQuery = (userLatitude: number, userLongitude: number) => {
  const WeatherQuery = useQuery({
    queryKey: ['weather', userLatitude, userLongitude],
    queryFn: () => getWeather(userLatitude, userLongitude),
    staleTime: 1000 * 10, // 10 seconds
  });
  return WeatherQuery;
};

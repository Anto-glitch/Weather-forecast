import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/getWeather';
import { weatherKeys } from './weatherKeys';

export const useWeatherQuery = (userLatitude: number, userLongitude: number) => {
  return useQuery({
    queryKey: weatherKeys.byLocation(userLatitude, userLongitude),
    queryFn: () => getWeather(userLatitude, userLongitude),
    staleTime: 1000 * 10, // 10 seconds
  });
};

export const useWeather = useWeatherQuery;

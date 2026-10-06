import { useQuery } from '@tanstack/react-query';
import { getWeather } from './getWeather';
import { useIsFocused } from '@react-navigation/native';

export const useWeatherQuery = () => {
  const focused = useIsFocused();
  const WeatherQuery = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather(37.7749, -122.4194),
    subscribed: focused,
    staleTime: 1000 * 10, // 10 seconds for demonstration purposes
  });
  return WeatherQuery;
};

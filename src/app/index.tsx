import { Button, Text, View } from 'react-native';
import { getWeather } from '../features/weather/getWeather';
import { checkWeather } from '../features/weather/checkWeather';
import { useWeatherQuery } from '../features/weather/weatherQuery';

export default function App() {
  const {data,isLoading,isError} = useWeatherQuery(52.52, 13.41);
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Loading...</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Error</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Weather App {data?.generationtime_ms}</Text>
      <Button title="Get Weather" onPress={() => void getWeather(52.52, 13.41)} />
      <Button title="Check Weather" onPress={() => void checkWeather()} />
    </View>
  );
}

import { Text, View } from 'react-native';
import { useWeather } from '../features/weatherAPI/queries/weatherQuery';

export default function App() {
  const { data, isLoading, isError } = useWeather(52.52, 13.41);
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
    </View>
  );
}

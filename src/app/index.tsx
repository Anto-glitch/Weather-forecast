import { Button, Text, View } from 'react-native';
import { getWeather } from '../features/weather/getWeather';


export default function App() {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Weather App</Text>
      <Button title="Get Weather" onPress={() => void getWeather(52.52, 13.41)} />
    </View>
  );
}

import { Text, View } from 'react-native';
import { Host, Checkbox } from '@expo/ui/jetpack-compose';
import { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Host matchContents>
        <Checkbox value={checked} onCheckedChange={setChecked} />
      </Host>
      <Text className="text-xl font-bold text-blue-500">Welcome to Nativewind!</Text>
    </View>
  );
}

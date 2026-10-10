import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '../../global.css';
import { Stack } from 'expo-router';
import { useAppStateFocus } from '../features/weather/useAppStateFocus';

const queryClient = new QueryClient();

export default function RootLayout() {
  useAppStateFocus();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}

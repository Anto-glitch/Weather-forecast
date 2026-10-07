import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '../../global.css';
import { Stack } from 'expo-router';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
      <QueryClientProvider client={queryClient}>
        <Stack />
      </QueryClientProvider>
  );
}

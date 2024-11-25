import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="dashboard" options={{ title: 'Dashboard' }} />
      <Stack.Screen name="cars" options={{ title: 'Carros' }} />
      <Stack.Screen name="add-car" options={{ title: 'Adicionar Carro' }} />
    </Stack>
  );
}

import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a tela de login após o layout estar pronto
    const timeout = setTimeout(() => {
      router.replace('/login');
    }, 500);

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carregando...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

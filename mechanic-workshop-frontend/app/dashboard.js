import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router'; // Importando o Link para navegação

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Dashboard!</Text>
      
      {/* Link para a tela de carros */}
      <Link href="/cars">
        <Button title="Ver Carros" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

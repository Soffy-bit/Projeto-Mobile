import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';

export default function Defects() {
  const router = useRouter();
  const { carId } = useSearchParams(); // Pegando o carId da URL
  const [defects, setDefects] = useState([]);

  useEffect(() => {
    // Chamada à API para pegar os defeitos de um carro específico
    fetch(`http://localhost:5000/api/cars/${carId}/defects`)
      .then(response => response.json())
      .then(data => setDefects(data))
      .catch(error => console.error('Erro ao buscar defeitos', error));
  }, [carId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Defeitos do Carro</Text>
      <FlatList
        data={defects}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.defectItem}>
            <Text>{item.description}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
      <Button title="Voltar para os Carros" onPress={() => router.back()} />
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
  defectItem: {
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
});

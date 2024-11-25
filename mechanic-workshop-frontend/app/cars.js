import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

const CarListScreen = () => {
  const [cars, setCars] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cars'); // Substitua pelo IP correto
        setCars(response.data);
      } catch (error) {
        console.error('Erro ao buscar carros:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <View>
      <Text>Lista de Carros</Text>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <View>
            <Text>{item.model} - {item.year}</Text>
          </View>
        )}
        keyExtractor={(item) => item.plate}
      />
      <Button
        title="Adicionar Carro"
        onPress={() => router.push('/add-car')}  // Navega para a tela de adicionar carro
      />
    </View>
  );
};

export default CarListScreen;

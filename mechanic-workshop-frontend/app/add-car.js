import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker'; // Importando o Picker

const AddCarScreen = () => {
  const [plate, setPlate] = useState('');
  const [model, setModel] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [year, setYear] = useState('');
  const [defect, setDefect] = useState('');
  const [status, setStatus] = useState('Aguardando Verificação'); // Status inicial
  const router = useRouter();

  // Função para adicionar o carro
  const handleAddCar = async () => {
    if (!plate || !model || !manufacturer || !year || !defect) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/cars', { // Certifique-se de alterar o IP
        plate,
        model,
        manufacturer,
        year,
        defect,
        status,
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Carro adicionado com sucesso!');
        router.push('/car'); // Redireciona para a tela de carros
      }
    } catch (error) {
      console.error('Erro ao adicionar carro:', error);
      Alert.alert('Erro', 'Não foi possível adicionar o carro');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Adicionar Carro</Text>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Placa"
        value={plate}
        onChangeText={setPlate}
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Modelo"
        value={model}
        onChangeText={setModel}
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Fabricante"
        value={manufacturer}
        onChangeText={setManufacturer}
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Ano"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Defeito"
        value={defect}
        onChangeText={setDefect}
      />

      {/* Picker para selecionar o status */}
      <Text style={{ marginBottom: 10 }}>Status</Text>
      <Picker
        selectedValue={status}
        onValueChange={(itemValue) => setStatus(itemValue)}
        style={{ height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      >
        <Picker.Item label="Aguardando Verificação" value="Aguardando Verificação" />
        <Picker.Item label="Aguardando Início do Reparo" value="Aguardando Início do Reparo" />
        <Picker.Item label="Em Reparo" value="Em Reparo" />
        <Picker.Item label="Aguardando Pagamento" value="Aguardando Pagamento" />
        <Picker.Item label="Liberado" value="Liberado" />
      </Picker>

      <Button title="Adicionar Carro" onPress={handleAddCar} />
    </View>
  );
};

export default AddCarScreen;

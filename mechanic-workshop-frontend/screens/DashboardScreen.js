// mechanic-workshop-frontend/screens/DashboardScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View>
      <Text>Bem-vindo ao Dashboard!</Text>
      <Button title="Sair" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

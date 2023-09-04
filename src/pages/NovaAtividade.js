import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { useTasks } from '../context/TaskContext';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

function NovaAtividade() {
  const { cadastrarAtividade } = useTasks();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [prioridade, setPrioridade] = useState('baixa');
  
  const navigation = useNavigation(); // Obtenha a função de navegação

  const handleCadastro = () => {
    if (!titulo.trim() || !descricao.trim() || !data.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (titulo.length > 30) {
      Alert.alert('Erro', 'O título deve ter no máximo 30 caracteres.');
      return;
    }

    cadastrarAtividade({ titulo, descricao, data, prioridade });
    setTitulo('');
    setDescricao('');
    setData('');
    setPrioridade('baixa');
    
    // Navegar para a tela de Atividades após o cadastro
    navigation.navigate('Atividades');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.label, { color: '#2196F3' }]}>Cadastro de Atividade</Text>
      <TextInput
        style={styles.input}
        placeholder="Título (até 30 caracteres)"
        maxLength={30}
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
      <TextInput
        style={[styles.input, styles.descricaoInput]}
        placeholder="Descrição"
        multiline
        numberOfLines={4}
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (DD/MM/YYYY)"
        value={data}
        onChangeText={(text) => setData(text)}
      />
      <Text style={[styles.pickerLabel, { color: '#2196F3' }]}>Prioridade:</Text>
      <Picker
        style={styles.picker}
        selectedValue={prioridade}
        onValueChange={(itemValue) => setPrioridade(itemValue)}
      >
        <Picker.Item label="Baixa Prioridade" value="baixa" />
        <Picker.Item label="Média Prioridade" value="media" />
        <Picker.Item label="Alta Prioridade" value="alta" />
      </Picker>
      <Button title="Cadastrar" onPress={handleCadastro} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2196F3',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: '#2196F3',
  },
  descricaoInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2196F3',
  },
  picker: {
    width: 300,
    marginBottom: 10,
    color: '#2196F3',
    alignContent: 'center'
  },
});

export default NovaAtividade;

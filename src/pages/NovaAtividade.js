import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';
import { Picker } from '@react-native-picker/picker';


function NovaAtividade() {
  const { cadastrarAtividade } = useTasks();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [prioridade, setPrioridade] = useState('baixa');

  const handleCadastro = () => {
    if (titulo.trim() === '' || descricao.trim() === '' || data.trim() === '') {
      // Validação básica, você pode adicionar mais validações conforme necessário.
      alert('Preencha todos os campos!');
    } else {
      cadastrarAtividade({ titulo, descricao, data, prioridade });
      setTitulo('');
      setDescricao('');
      setData('');
      setPrioridade('baixa');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cadastro de Atividade</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        value={data}
        onChangeText={(text) => setData(text)}
      />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  picker: {
    width: 300,
    height: 40,
    marginBottom: 10,
  },
});

export default NovaAtividade;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';

function NovaAtividade() {
  const { cadastrarAtividade } = useTasks();
  const [atividade, setAtividade] = useState('');

  const handleCadastro = () => {
    if (atividade.trim() !== '') {
      cadastrarAtividade(atividade);
      setAtividade('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cadastro de Atividade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a atividade"
        value={atividade}
        onChangeText={(text) => setAtividade(text)}
      />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  // Adicione outros estilos conforme necessário
});

export default NovaAtividade;

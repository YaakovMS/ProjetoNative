import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';

function Atividades() {
  const { atividades } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividades Criadas</Text>
      {atividades.length === 0 ? (
        <Text>Nenhuma atividade criada.</Text>
      ) : (
        <FlatList
          data={atividades}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.atividadeItem, { borderColor: getBorderColor(item.prioridade) }]}>
              <Text style={styles.tituloAtividade}>Título: {item.titulo}</Text>
              <Text style={styles.descricaoAtividade}>Descrição: {item.descricao}</Text>
              <Text>Data: {item.data}</Text>
              <Text>Prioridade: {item.prioridade}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

function getBorderColor(prioridade) {
  switch (prioridade) {
    case 'baixa':
      return 'green';
    case 'media':
      return 'yellow';
    case 'alta':
      return 'red';
    default:
      return 'gray';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
  },
  atividadeItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  tituloAtividade: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  descricaoAtividade: {
    fontStyle: 'italic',
  },
});

export default Atividades;

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';

function Atividades() {
  const { atividades } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividades Criadas</Text>
      {atividades.length === 0 ? (
        <Text style={styles.semAtividades}>Nenhuma atividade criada.</Text>
      ) : (
        <FlatList
          data={atividades}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.atividadeItem, { borderColor: getBorderColor(item.prioridade) }]}>
              <Text style={styles.tituloAtividade}>{item.titulo}</Text>
              <Text style={styles.descricaoAtividade}>Descrição: {item.descricao}</Text>
              <Text style={styles.dataAtividade}>Data: {item.data}</Text>
              <Text style={styles.prioridadeAtividade}>Prioridade: {item.prioridade}</Text>
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
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  semAtividades: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  atividadeItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  tituloAtividade: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descricaoAtividade: {
    fontSize: 16,
    marginTop: 5,
  },
  dataAtividade: {
    fontSize: 16,
    marginTop: 5,
  },
  prioridadeAtividade: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Atividades;

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
            <View style={styles.atividadeItem}>
              <Text>{item.atividade}</Text>
            </View>
          )}
        />
      )}
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
  titulo: {
    fontSize: 20,
    marginBottom: 20,
  },
  atividadeItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default Atividades;

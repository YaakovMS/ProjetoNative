import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTasks } from '../context/TaskContext';
import { useNavigation } from '@react-navigation/native';

function Atividades() {
  const { atividades, markAsDone } = useTasks();
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const borderColor = getBorderColor(item.prioridade);

    return (
      <View style={[styles.atividadeItem, { borderColor }]}>
        {item.done ? (
          <View style={styles.doneContainer}>
            <Text style={styles.doneText}>Done</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => markAsDone(item.id)}
          >
            <Icon name="check" size={20} color="green" />
          </TouchableOpacity>
        )}
        {!item.done && (
          <>
            <Text style={[styles.tituloAtividade, { color: '#2196F3' }]}>{item.titulo}</Text>
            <Text style={[styles.descricaoAtividade, { color: '#2196F3' }]}>Descrição: {item.descricao}</Text>
            <Text style={[styles.dataAtividade, { color: '#2196F3' }]}>Data: {item.data}</Text>
            <Text style={[styles.prioridadeAtividade, { color: '#2196F3' }]}>Prioridade: {item.prioridade}</Text>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {atividades.length === 0 ? (
        <View style={[styles.centeredContainer, { flex: 1 }]}>
          <Text style={[styles.titulo, { color: '#2196F3' }]}>Atividades Criadas</Text>
          <Text style={[styles.semAtividades, { color: '#2196F3' }]}>Nenhuma atividade criada.</Text>
          <TouchableOpacity
            style={styles.adicionarButton}
            onPress={() => navigation.navigate('NovaAtividade')}
          >
            <Text style={styles.adicionarButtonText}>Adicionar Atividade</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={[styles.titulo, { color: '#2196F3' }]}>Atividades Criadas</Text>
          <FlatList
            data={atividades}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listaAtividades}
          />
          <TouchableOpacity
            style={styles.adicionarButton}
            onPress={() => navigation.navigate('NovaAtividade')}
          >
            <Text style={styles.adicionarButtonText}>Adicionar Atividade!!</Text>
          </TouchableOpacity>
        </>
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
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
    marginTop: 30,
    justifyContent: 'center',
  },
  adicionarButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 75,
  },
  adicionarButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  semAtividades: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  listaAtividades: {
    flexGrow: 1,
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
  doneButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  doneContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneText: {
    fontSize: 16,
    marginTop: 5,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Atividades;


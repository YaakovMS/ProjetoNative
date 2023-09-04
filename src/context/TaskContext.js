import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [atividades, setAtividades] = useState([]);

  const cadastrarAtividade = (atividade) => {
    setAtividades([
      ...atividades,
      {
        id: Date.now(),
        titulo: atividade.titulo,
        descricao: atividade.descricao,
        data: atividade.data,
        prioridade: atividade.prioridade,
        done: false, // Initialize done property as false
      },
    ]);
  };

  const markAsDone = (taskId) => {
    const updatedAtividades = atividades.map((atividade) => {
      if (atividade.id === taskId) {
        return { ...atividade, done: true };
      }
      return atividade;
    });
    setAtividades(updatedAtividades);
  };

  const value = {
    atividades,
    cadastrarAtividade,
    markAsDone, // Include markAsDone in the context value
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

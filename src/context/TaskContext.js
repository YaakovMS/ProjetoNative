import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [atividades, setAtividades] = useState([]);

  const cadastrarAtividade = (atividade) => {
    // Adicione a estrutura completa das atividades aqui
    setAtividades([
      ...atividades,
      {
        id: Date.now(),
        titulo: atividade.titulo,
        descricao: atividade.descricao,
        data: atividade.data,
        prioridade: atividade.prioridade,
      },
    ]);
  };

  const value = {
    atividades,
    cadastrarAtividade,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

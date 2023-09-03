import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [atividades, setAtividades] = useState([]);

  const cadastrarAtividade = (atividade) => {
    setAtividades([...atividades, { id: Date.now(), atividade }]);
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

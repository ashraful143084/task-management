import { createContext, useState } from "react";

export const TasksContext = createContext({
  tasks: undefined,
  setTasks: () => {},
});

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState();

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

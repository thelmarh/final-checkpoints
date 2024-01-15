import { createContext, useReducer } from "react";

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "DELETE_TODOS":
      return {
        todos: state.todos.filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

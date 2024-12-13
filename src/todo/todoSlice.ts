import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDosState {
  todos: ToDo[];
}

const initialState: ToDosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      };
      state.todos.push(newToDo);
    //   console.log(newToDo.id);
    //   console.log(state);
    },
    toggleToDo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeToDo: (state, action: PayloadAction<number>) => {
      console.log(state);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToDo, toggleToDo, removeToDo } = todosSlice.actions;
export default todosSlice.reducer;

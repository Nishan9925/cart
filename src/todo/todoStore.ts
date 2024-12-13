import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todoSlice";

export const store = configureStore({
    reducer: {
        todosReducer: todosSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

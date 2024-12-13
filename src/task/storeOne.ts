import { configureStore } from "@reduxjs/toolkit";
import CounterSliceOne  from "./counterSliceOne";

export const store = configureStore ({
    reducer: {
        counter: CounterSliceOne,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
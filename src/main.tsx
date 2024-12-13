import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
// import { store } from "../src/task/storeOne";
// import { store } from "../src/rtk/services/store.ts";
// import { store } from "../src/vid/store.ts";
// import { store } from "./taskCounter/counterStore.ts";
// import { store } from "../src/todo/todoStore.ts";
import { store } from "../src/cartTask/store.ts";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>

)

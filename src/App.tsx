import { useSelector } from "react-redux";
import "./App.css";
import CartContainer from "./cartTask/cart/components/CartContainer";
// import { Counter } from "./features/counter/Counter";
// import CounterOne from "./task/CounterOne";
// import MovieList from "./vid/components/MovieList";
// import MovieInput from "./vid/components/movieInput";
// import Counter from "./taskCounter/Counter";
// import ToDoList from "./todo/ToDo";
import NavBar from "./cartTask/cart/components/NavBar";
import { RootState } from "./cartTask/store";
import { useEffect } from "react";
import { calcTotalAmount } from "./cartTask/cart/feature/cartSlice";

function App() {
  const { cartItems } = useSelector((store: RootState) => store.cart);
  // useEffect(() => {
  //   dispatchEvent(calcTotalAmount())
  // }, [cartItems]);

  return (
    <>
      {/* <Counter /> */}
      {/* <CounterOne /> */}
      {/* <MovieInput /> */}
      {/* <MovieList /> */}
      {/* <Counter /> */}
      {/* <ToDoList /> */}
      <div>
        <NavBar />
        <CartContainer />
      </div>
    </>
  );
}

export default App;

// import * as React from 'react'
// import { useGetPokemonByNameQuery } from "../src/rtk/services/pokemon";

// export default function App() {
//   // Using a query hook automatically fetches data and returns query values
//   const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
//   // Individual hooks are also accessible under the generated endpoints:
//   // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

//   return (
//     <div className="App">
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <>
//           <h3>{data.species.name}</h3>
//           <img src={data.sprites.front_shiny} alt={data.species.name} />
//         </>
//       ) : null}
//     </div>
//   )
// }

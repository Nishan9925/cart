import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from "./counterStore";
import { decrement, increment, reset } from './counterSlice';

function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch();
  return (
    <div>
        <p>Counter</p>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
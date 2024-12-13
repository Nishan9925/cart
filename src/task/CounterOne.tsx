import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./storeOne";
import { decrement, increment, incrementByAmount, reset } from "./counterSliceOne";

function CounterOne () {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch();
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByAmount(count))}>increment</button>
        </div>
    )
}

export default CounterOne;
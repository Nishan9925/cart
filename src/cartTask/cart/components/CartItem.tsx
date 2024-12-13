import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { decreaseAmount, increaseAmount, removeItem } from "../feature/cartSlice";

interface CartItemProps {
    id: number,
    img: string,
    title: string,
    price: number,
    amount: number,
}

function CartItem({id, img, title, price, amount }: CartItemProps) {
    const dispatch: AppDispatch = useDispatch();
  return (
    <div style={{display: "flex", alignItems: "center"}}>
        <img src={img} alt={title} style={{width: "100px", height: "100px"}}/>
        <p>{title}</p>
        <div style={{display: "flex", flexDirection: "column"}}>
            <button onClick={() => dispatch(increaseAmount({id}))}>+</button>
            <p>{amount}</p>
            <button onClick={() => dispatch(decreaseAmount({id}))}>-</button>
        </div>
        <button onClick={() => dispatch(removeItem({id}))}>Remove</button>
    </div>
  )
}

export default CartItem;
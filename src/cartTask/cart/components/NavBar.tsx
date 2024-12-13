import { useSelector } from 'react-redux'
import { RootState } from '../../store';

function NavBar() {
    const amount = useSelector((store: RootState) => store.cart.totalAmount);
  return (
    <div>
        <h3>Cart</h3>
        <p>{amount}</p>
    </div>
  )
}

export default NavBar;
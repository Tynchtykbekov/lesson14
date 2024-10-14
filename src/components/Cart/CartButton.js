import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
 import { toggle } from '../store/uiSlice';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const {totalQuantity} = useSelector(state => state.cart)

  const toggleCardHandler = () => {
    dispatch(toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCardHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

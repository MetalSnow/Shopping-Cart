import { ShoppingCart } from 'lucide-react';
import styles from './Cart.module.css';
import PropTypes from 'prop-types';

function CartButton({ onClick, counter }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>{counter}</span>
      <ShoppingCart size={25} color="black" strokeWidth={2.4} />
      <p>Cart</p>
    </button>
  );
}

CartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default CartButton;

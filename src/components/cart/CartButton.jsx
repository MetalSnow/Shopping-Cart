import { ShoppingCart } from 'lucide-react';
import styles from './Cart.module.css';

function CartButton() {
  return (
    <button className={styles.button}>
      <span>0</span>
      <ShoppingCart size={25} color="white" />
    </button>
  );
}

export default CartButton;

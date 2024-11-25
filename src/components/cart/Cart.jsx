import { MoveLeft, ShoppingBag } from 'lucide-react';
import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Cart({ selectedItems }) {
  const navigate = useNavigate();
  return (
    <section className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <header>
          <ShoppingBag size={28} color="#333333" strokeWidth={2.4} />
          <h1>Your Shopping Cart</h1>
        </header>
        <div className={styles.cartItems}>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <button>increment {item.quantity}</button>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.subTotal}>
          <button onClick={() => navigate(-1)} className={styles.goBackBtn}>
            <MoveLeft size={25} color="black" strokeWidth={2} />
            Back To Shop
          </button>
        </div>
      </div>
      <div className={styles.checkoutContainer}></div>
    </section>
  );
}

Cart.propTypes = {
  selectedItems: PropTypes.array.isRequired,
};

export default Cart;

import { MoveLeft, ShoppingBag, X } from 'lucide-react';
import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CounterInput from '../shop/CounterInput';

function Cart() {
  const navigate = useNavigate();
  const { cart, values, removeFromCart } = useContext(CartContext);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <header>
          <ShoppingBag size={28} color="#333333" strokeWidth={2.4} />
          <h1>Your Shopping Cart</h1>
        </header>
        <div className={styles.cartItems}>
          <ul>
            {cart ? (
              <p className={styles.emptyCart}>Your Cart is Empty</p>
            ) : (
              cart.map((item) => {
                const obj = values.find(
                  (value) => value.id == item.id && value.quantity
                );
                const handleRemove = () => {
                  removeFromCart(item);
                };
                return (
                  <li key={item.id}>
                    <div className={styles.imgContainer}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <p className={styles.title}>{item.title}</p>
                    <CounterInput value={obj.quantity} />
                    <p>${item.price}</p>
                    <button className={styles.removeBtn} onClick={handleRemove}>
                      <X strokeWidth={1.5} />
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div className={styles.subTotal}>
          <button
            onClick={() => navigate('/shop')}
            className={styles.goBackBtn}
          >
            <MoveLeft size={25} color="black" strokeWidth={2} />
            Back To Shop
          </button>
        </div>
      </div>
      <div className={styles.checkoutContainer}></div>
    </section>
  );
}

export default Cart;

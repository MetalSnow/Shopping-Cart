import {
  CreditCard,
  MoveLeft,
  ShoppingBag,
  UserRoundPen,
  X,
} from 'lucide-react';
import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CounterInput from '../shop/CounterInput';

function Cart() {
  const navigate = useNavigate();
  const { cart, values, removeFromCart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <header>
          <ShoppingBag size={28} color="#333333" strokeWidth={2.4} />
          <h1>Your Shopping Cart</h1>
        </header>
        <div className={styles.cartItems}>
          <ul>
            {cart.length === 0 ? (
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
          <p>
            Subtotal: <span>$ {subtotal}</span>
          </p>
        </div>
      </div>
      <div className={styles.checkoutContainer}>
        <div className={styles.info}>
          <h2>
            Personal Info <UserRoundPen />
          </h2>
          <label htmlFor="fullName">
            Full Name
            <input type="text" id="fullName" />
          </label>
          <label htmlFor="address">
            Address
            <input type="text" id="address" />
          </label>
          <label htmlFor="phoneNumber">
            Phone Number
            <input type="phone" id="phoneNumber" />
          </label>
          <h2>
            Card Details <CreditCard />
          </h2>
          <label htmlFor="cardNumber">
            Card Number
            <input type="text" id="cardNumber" />
          </label>
          <label htmlFor="expiryDate" className={styles.expiryDate}>
            Expiry Date
            <p>
              <input type="number" maxLength="2" placeholder="MM" />
              <span>/</span>
              <input type="number" maxLength="2" placeholder="DD" />
              <span>/</span>
              <input type="number" maxLength="3" placeholder="YYYY" />
            </p>
          </label>
          <label htmlFor="cvv">
            CVV
            <input type="phone" id="cvv" style={{ width: 60 }} />
          </label>
        </div>
        <button
          onClick={() =>
            alert('Order confirmed! Your items will be shipped soon.')
          }
        >
          Checkout
        </button>
      </div>
    </section>
  );
}

export default Cart;

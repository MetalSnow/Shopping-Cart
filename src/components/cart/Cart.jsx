import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CounterInput from '../shop/CounterInput';
import Modal from '../Modal';
import {
  CreditCard,
  MoveLeft,
  ShoppingBag,
  UserRoundPen,
  X,
} from 'lucide-react';

function Cart() {
  const navigate = useNavigate();
  const { cart, values, removeFromCart } = useContext(CartContext);
  const [modal, setModal] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    if (cart.length !== 0) {
      navigate('/');
      window.location.reload();
    }
  };

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
            Subtotal: <span>$ {Math.round(subtotal * 100) / 100}</span>
          </p>
        </div>
      </div>
      <form className={styles.checkoutContainer} onSubmit={handleSubmit}>
        <div className={styles.info}>
          <h2>
            Personal Info <UserRoundPen />
          </h2>
          <label htmlFor="fullName">
            Full Name
            <input type="text" id="fullName" required />
          </label>
          <label htmlFor="address">
            Address
            <input type="text" id="address" required />
          </label>
          <label htmlFor="phoneNumber">
            Phone Number
            <input type="phone" id="phoneNumber" required />
          </label>
          <h2>
            Card Details <CreditCard />
          </h2>
          <label htmlFor="cardNumber">
            Card Number
            <input type="text" id="cardNumber" required />
          </label>
          <label htmlFor="expiryDate" className={styles.expiryDate}>
            Expiry Date
            <p>
              <input type="number" maxLength="2" placeholder="MM" required />
              <span>/</span>
              <input type="number" maxLength="2" placeholder="DD" required />
              <span>/</span>
              <input type="number" maxLength="3" placeholder="YYYY" required />
            </p>
          </label>
          <label htmlFor="cvv">
            CVV
            <input type="phone" id="cvv" style={{ width: 60 }} required />
          </label>
        </div>
        <button>Checkout</button>
      </form>
      <Modal openModal={modal} closeModal={handleClose}>
        {cart.length !== 0 ? (
          <>
            <h2>Thank you for your purchase! 🎉</h2>
            <p>Your order has been successfully placed.</p>
          </>
        ) : (
          <>
            <h2>Your cart is currently empty.</h2>
            <p> 🛒 Add some items to your cart and come back to checkout.</p>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Cart;

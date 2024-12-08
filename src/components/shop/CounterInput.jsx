import PropTypes from 'prop-types';
import styles from './Shop.module.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

function CounterInput({ value, setValue, itemId }) {
  const { setCart, cart } = useContext(CartContext);
  const [newValue, setNewValue] = useState(value);

  const currentItem = itemId
    ? cart.filter((item) => item.id === itemId)[0]
    : false;

  console.log(currentItem);

  const handleInputValue = (e) => {
    const updatedValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 99) {
      if (setValue) {
        setValue(updatedValue);
      }
      setNewValue(updatedValue);

      if (currentItem) {
        const updatedItem = { ...currentItem, quantity: updatedValue };
        setCart((prevCart) =>
          prevCart.map((item) => (item.id === itemId ? updatedItem : item))
        );
      }
    }
  };

  const handleIncremet = () => {
    const updatedValue = Math.min(newValue + 1, 99);

    if (setValue) {
      setValue(updatedValue);
    }
    setNewValue(updatedValue);

    if (currentItem) {
      const updatedItem = { ...currentItem, quantity: updatedValue };
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === itemId ? updatedItem : item))
      );
    }
  };

  const handleDecremet = () => {
    const updatedValue = Math.max(newValue - 1, 1);

    if (setValue) {
      setValue(updatedValue);
    }
    setNewValue(updatedValue);

    if (currentItem) {
      const updatedItem = { ...currentItem, quantity: updatedValue };
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === itemId ? updatedItem : item))
      );
    }
  };

  return (
    <div className={styles.inputContainer}>
      <button className={styles.decrement} onClick={handleDecremet}>
        {' '}
        -{' '}
      </button>
      <input
        type="number"
        value={newValue}
        onChange={handleInputValue}
        min="1"
        max="20"
      />
      <button className={styles.increment} onClick={handleIncremet}>
        {' '}
        +{' '}
      </button>
    </div>
  );
}

CounterInput.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func,
  itemId: PropTypes.number,
};

export default CounterInput;

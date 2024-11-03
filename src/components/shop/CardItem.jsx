import { useState } from 'react';
import styles from './Shop.module.css';
import PropTypes from 'prop-types';

function CardItem({ product, name }) {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((value) => (value != 20 ? value + 1 : value));
  };

  const handleDecrement = () => {
    setValue((value) => value && value - 1);
  };

  return (
    <div className={styles.card}>
      <div>
        {product}
        <p>{name}</p>
      </div>
      <div>
        <div className={styles.inputContainer}>
          <button className={styles.decrement} onClick={handleDecrement}>
            {' '}
            -{' '}
          </button>
          <input type="number" value={value} min="0" max="50" />
          <button className={styles.increment} onClick={handleIncrement}>
            {' '}
            +{' '}
          </button>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  product: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardItem;

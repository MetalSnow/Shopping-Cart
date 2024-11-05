import { useState } from 'react';
import styles from './Shop.module.css';
import PropTypes from 'prop-types';

function CardItem({ image, description, title, price, rating }) {
  const [value, setValue] = useState(0);

  const handleInputValue = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 99) {
      setValue(newValue);
    }
  };

  const handleIncrement = () => {
    setValue(+value + 1);
  };

  const handleDecrement = () => {
    setValue(+value && value - 1);
  };

  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{description}</p>
        <p>$ {price}</p>
        <div>
          <p>{rating.rate} stars</p>
          <p>{rating.count} ratings</p>
        </div>
      </div>
      <div>
        <div className={styles.inputContainer}>
          <button className={styles.decrement} onClick={handleDecrement}>
            {' '}
            -{' '}
          </button>
          <input
            type="number"
            value={value}
            maxLength={2}
            onChange={handleInputValue}
            min="0"
            max="20"
          />
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
};

export default CardItem;

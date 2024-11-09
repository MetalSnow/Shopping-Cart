import { useState } from 'react';
import styles from './Shop.module.css';
import PropTypes from 'prop-types';

function CardItem(props) {
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
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>$ {props.price}</p>
        <div>
          <p>{props.rating.rate} stars</p>
          <p>{props.rating.count} ratings</p>
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

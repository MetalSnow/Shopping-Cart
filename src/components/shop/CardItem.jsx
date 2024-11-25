import { useState } from 'react';
import styles from './Shop.module.css';
import PropTypes from 'prop-types';
import { CircleCheckBig, CirclePlus, Star } from 'lucide-react';

function CardItem(props) {
  const [value, setValue] = useState(1);
  const [btnContent, setBtnContent] = useState('');

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

  const handleAddBtn = (event) => {
    if (event.target.className !== styles.addedToCartBtn) {
      props.setCounter((counter) => counter + 1);

      event.target.className = styles.addedToCartBtn;

      setBtnContent(
        <>
          <CircleCheckBig size={18} strokeWidth={1.7} absoluteStrokeWidth />
          Added to cart
        </>
      );
    }
  };

  return (
    <div className={styles.card} data-testid="card-item-container">
      <img src={props.image} alt={props.title} />
      <div className={styles.tooltip}>
        <p>{props.title}</p>
        <span className={styles.tooltiptext}>{props.description}</span>
      </div>

      <div className={styles.productSet}>
        <div>
          <p className={styles.price}>$ {props.price}</p>
          <div className={styles.rating}>
            <p className={styles.stars}>
              {props.rating.rate}{' '}
              <Star size={18} strokeWidth={2} color="black" />
            </p>
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
          <button className={styles.addToCartBtn} onClick={handleAddBtn}>
            {!btnContent ? (
              <>
                <CirclePlus size={18} strokeWidth={1.7} absoluteStrokeWidth />
                Add To Cart
              </>
            ) : (
              btnContent
            )}
          </button>
        </div>
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
  setCounter: PropTypes.func.isRequired,
};

export default CardItem;

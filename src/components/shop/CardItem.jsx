import { useState, useContext } from 'react';
import styles from './Shop.module.css';
import PropTypes from 'prop-types';
import { CircleCheckBig, CirclePlus, Star } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import CounterInput from './CounterInput';

function CardItem(props) {
  const [value, setValue] = useState(1);
  const { cart, addToCart } = useContext(CartContext);

  const isAdded = cart.some((item) => item.id === props.id);

  const handleAddBtn = () => {
    const itemObj = {
      id: props.id,
      title: props.title,
      image: props.image,
      quantity: value,
      price: props.price,
    };

    addToCart(itemObj);
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
          <CounterInput value={value} setValue={setValue} />
          <button
            className={isAdded ? styles.addedToCartBtn : styles.addToCartBtn}
            onClick={handleAddBtn}
            disabled={isAdded}
          >
            {isAdded ? (
              <>
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.7}
                  absoluteStrokeWidth
                />
                Added to cart
              </>
            ) : (
              <>
                <CirclePlus size={18} strokeWidth={1.7} absoluteStrokeWidth />
                Add To Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
};

export default CardItem;

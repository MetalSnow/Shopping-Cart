import CartButton from '../cart/CartButton';
import NavBar from '../nav/NavBar';
import CardItem from './CardItem';
import styles from './Shop.module.css';

function Shop() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <CartButton />
        <ul style={{ color: 'black' }}>
          <CardItem product="product one" name="name one" />
        </ul>
      </div>
    </>
  );
}

export default Shop;

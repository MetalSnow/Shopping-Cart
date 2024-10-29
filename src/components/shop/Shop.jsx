import CartButton from '../cart/CartButton';
import NavBar from '../nav/NavBar';
import styles from './Shop.module.css';

function Shop() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <CartButton />
        <ul>
          <li>items</li>
          <li>items</li>
          <li>items</li>
          <li>items</li>
          <li>items</li>
          <li>items</li>
        </ul>
      </div>
    </>
  );
}

export default Shop;

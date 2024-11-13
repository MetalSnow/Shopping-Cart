import { useEffect, useState } from 'react';
import CartButton from '../cart/CartButton';
import NavBar from '../nav/NavBar';
import CardItem from './CardItem';
import styles from './Shop.module.css';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <CartButton onClick={() => {}} />
        <aside className={styles.aside}>
          <p>Category</p>
          <ul>
            <li>coats</li>
            <li>shirts</li>
            <li>pants</li>
            <li>shoes</li>
          </ul>
        </aside>
        <ul className={styles.listCards}>
          {products.map((product) => (
            <li key={product.id}>
              <CardItem
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Shop;

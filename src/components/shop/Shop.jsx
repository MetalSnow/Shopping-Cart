import { useEffect, useState } from 'react';
import CartButton from '../cart/CartButton';
import NavBar from '../nav/NavBar';
import CardItem from './CardItem';
import styles from './Shop.module.css';

const url = 'https://fakestoreapi.com/products';

function Shop() {
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInitialProducts(data);
        setProducts(data);
      });
  }, []);

  const handleCategory = (event) => {
    const categorySelected = event.target.textContent;
    setActiveCategory(categorySelected);

    if (categorySelected === 'Show all products') {
      setProducts(initialProducts);
      return;
    }

    const filtredProducts = initialProducts.filter((product) => {
      console.log(product.category);
      return product.category === categorySelected.toLowerCase() && product;
    });

    setProducts(filtredProducts);
  };

  const uniqueCategories = [
    ...new Set(initialProducts.map((product) => product.category)),
  ];

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <CartButton onClick={() => {}} />
        <aside className={styles.aside}>
          <p>Category</p>
          <ul>
            {uniqueCategories.map((category, index) => {
              const categoryName =
                category.charAt(0).toUpperCase() + category.slice(1);

              return (
                <li key={index}>
                  <button
                    onClick={handleCategory}
                    className={
                      activeCategory === categoryName
                        ? styles.activeCategory
                        : ''
                    }
                  >
                    {categoryName}
                  </button>
                </li>
              );
            })}
            <li>
              <button onClick={handleCategory} className={styles.allProducts}>
                Show all products
              </button>
            </li>
          </ul>
        </aside>
        <ul className={styles.listCards}>
          {products ? (
            products.map((product) => (
              <li key={product.id}>
                <CardItem
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              </li>
            ))
          ) : (
            <p style={{ textAlign: 'center', fontSize: 18 }}>Loading...</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default Shop;

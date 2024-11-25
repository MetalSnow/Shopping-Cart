import { useEffect, useState } from 'react';
import CartButton from '../cart/CartButton';
import NavBar from '../nav/NavBar';
import CardItem from './CardItem';
import styles from './Shop.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Cart from '../cart/Cart';
import { LoaderCircle } from 'lucide-react';

const url = 'https://fakestoreapi.com/products';

function Shop() {
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
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
      {!name ? (
        <div className={styles.container}>
          <CartButton
            onClick={() => name !== 'cart' && navigate('cart')}
            counter={counter}
          />
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
                    setCounter={setCounter}
                  />
                </li>
              ))
            ) : (
              <LoaderCircle size={42} color="#393432" strokeWidth={2.8} />
            )}
          </ul>
        </div>
      ) : name === 'cart' ? (
        <Cart />
      ) : (
        <div
          style={{
            textAlign: 'center',
            alignContent: 'center',
            height: '50vh',
          }}
        >
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      )}
    </>
  );
}

export default Shop;

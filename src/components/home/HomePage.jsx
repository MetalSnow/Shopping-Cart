import NavBar from '../nav/NavBar';
import styles from './HomePage.module.css';
import picOne from '../../assets/home-pic-one.jpg';
import picTwo from '../../assets/home-pic-two.jpg';
import picThree from '../../assets/home-pic-three.jpg';
import CartButton from '../cart/CartButton';

function HomePage() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <CartButton />
        <div>
          <p>
            Refresh your wardrobe with our latest collection of everyday
            essentials!
          </p>
          <img src={picOne} alt="Shop-pics" />
        </div>
        <div>
          <img src={picTwo} alt="Shop-pics" />
          <p>
            Experience ultimate comfort with our stylish casual wear—perfect for
            any occasion!
          </p>
        </div>
        <div>
          <p>
            Step out in confidence with our fashionable statement pieces that
            elevate any outfit!
          </p>
          <img src={picThree} alt="Shop-pics" />
        </div>
      </div>
    </>
  );
}

export default HomePage;

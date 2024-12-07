import { Store } from 'lucide-react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
// import LogoIcon from '../LogoIcon';

function NavBar() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1 className={styles.title}>
          <Store size={38} color="white" />
          Demo Store
        </h1>
      </Link>
      <ul className={styles.listContainer}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="https://github.com/MetalSnow" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub-Logo"
              className={styles.gitHubLogo}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

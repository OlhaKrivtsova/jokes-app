import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const setActive = ({isActive}: {isActive: boolean}): string =>
  isActive ? styles['active'] : '';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink className={setActive} to='jokes' end>
              Jokes
            </NavLink>
          </li>
          <li>
            <NavLink className={setActive} to='add-joke'>
              Add a Joke
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

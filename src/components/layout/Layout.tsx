import styles from './Layout.module.css';
import Header from './Header';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

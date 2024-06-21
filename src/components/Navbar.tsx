import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>KANBAN</div>
      <div className={styles.search}>
        <input type="text" placeholder="Search product, supplier, order" />
      </div>
      <div className={styles.user}>
        <img src="/path/to/user/profile.jpg" alt="User" />
      </div>
    </div>
  );
};

export default Navbar;
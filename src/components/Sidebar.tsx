import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ onSectionChange }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuItem} onClick={() => onSectionChange('dashboard')}>
        Dashboard
      </div>
      <div className={styles.menuItem} onClick={() => onSectionChange('inventory')}>
        Inventory
      </div>
      <div className={styles.menuItem} onClick={() => onSectionChange('sales')}>
        Sales
      </div>
      <div className={styles.menuItem} onClick={() => onSectionChange('users')}>
        Users
      </div>
      <div className={styles.menuItem} onClick={() => onSectionChange('organizations')}>
        Organizations
      </div>
    </div>
  );
};

export default Sidebar;
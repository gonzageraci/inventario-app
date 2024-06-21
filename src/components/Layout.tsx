import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styles from '../styles//Layout.module.css';
import { ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [selectedSection, setSelectedSection] = useState<string>('dashboard');

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar onSectionChange={handleSectionChange} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
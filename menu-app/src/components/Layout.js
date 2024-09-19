// components/Layout.js
import React from 'react';
import Header from './Header';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
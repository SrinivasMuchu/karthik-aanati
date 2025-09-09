
"use client";
import React, { useState } from 'react';
import styles from './TopBar.module.css';
import Image from 'next/image';
import logo from '../../../public/karthik-aanati.png'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Why Us', href: '#whyus' },
  { name: 'About Us', href: '#aboutus' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact Us', href: '#contact' },
];

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.topbar}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Karthik aanati" width={150} height={48} className={styles.logo} />
        {/* <span className={styles.brand}>karthik aanati</span> */}
      </div>
      <nav className={menuOpen ? styles.navMobileOpen : styles.nav}>
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
            {link.name}
          </a>
        ))}
      </nav>
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={styles.menuIcon} />
      </button>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Topbar;
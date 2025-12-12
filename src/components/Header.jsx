"use client"
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* MAIN HEADER */}
      <header className={styles.header}>
  
  {/* LEFT SECTION */}
  <div className={styles.left}>
   <button 
  className={styles.hamburger} 
  aria-label="Open menu"
  onClick={() => setMenuOpen(true)}
>
  ☰
</button>

    <Image src="/mylogo.png" alt="Logo" width={32} height={32} />
  </div>

  {/* CENTER SECTION */}
  <div className={styles.center}>LOGO</div>

  {/* RIGHT SECTION */}
  <div className={styles.right}>
    <button className={styles.iconBtn}><Image src="/search-button.svg" width={24} height={20} /></button>
    <button className={styles.iconBtn}><Image src="/wishlist.png" width={24} height={24} /></button>
    <button className={styles.iconBtn}><Image src="/cart.svg" width={30} height={30} /></button>
    <button className={styles.iconBtn}><Image src="/user.svg" width={24} height={24} /></button>
  </div>

</header>


      {/* NAV MENU BELOW HEADER */}
      <nav className={styles.desktopMenu} role="navigation">
        <Link href="#">SHOP</Link>
        <Link href="#">SKILLS</Link>
        <Link href="#">STORIES</Link>
        <Link href="#">ABOUT</Link>
        <Link href="#">CONTACT US</Link>
      </nav>

      {/* MOBILE SLIDEOUT MENU */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul>
          <li><Link href="#">SHOP</Link></li>
          <li><Link href="#">SKILLS</Link></li>
          <li><Link href="#">STORIES</Link></li>
          <li><Link href="#">ABOUT</Link></li>
          <li><Link href="#">CONTACT US</Link></li>
        </ul>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* TOP SECTION */}
      <div className={styles.top}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>

          <div className={styles.inputRow}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h3 className={styles.mt}>CURRENCY</h3>
          <p>🇺🇸 - USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </small>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* LINKS SECTION */}
      <div className={styles.linksSection}>
        <div>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className={styles.social}>
            <span>📸</span>
            <span>💼</span>
          </div>

          <h4 className={styles.mt}>mettā muse ACCEPTS</h4>
          <div className={styles.cards}>
            <img src="/gpay.png" alt="gpay" />
            <img src="/visa.png" alt="visa" />
            <img src="/master.png" alt="master" />
            <img src="/amex.png" alt="amex" />
            <img src="/apple.png" alt="apple" />
            <img src="/paypal.png" alt="paypal" />
          </div>
        </div>
      </div>

      <p className={styles.copy}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}

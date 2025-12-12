import { useState } from "react";
import styles from "../styles/SortDropdown.module.css";

export default function SortDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        RECOMMENDED ▾
      </button>

      {open && (
        <div className={styles.menu}>
          <p>Recommended</p>
          <p>Newest First</p>
          <p>Popular</p>
          <p>Price: High to Low</p>
          <p>Price: Low to High</p>
        </div>
      )}
    </div>
  );
}

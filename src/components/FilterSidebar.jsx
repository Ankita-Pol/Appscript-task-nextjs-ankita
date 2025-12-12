import { useState } from "react";
import styles from "../styles/FilterSidebar.module.css";

export default function FilterSidebar() {
  // Checkbox state
  const [idealFor, setIdealFor] = useState({
    men: false,
    women: false,
    kids: false,
  });

  // Handle toggle
  const handleCheckbox = (key) => {
    setIdealFor((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Unselect all
  const handleUnselectAll = () => {
    setIdealFor({ men: false, women: false, kids: false });
  };

  return (
    <aside className={styles.sidebar}>

      {/* CUSTOMIZABLE */}
      <div className={styles.section}>
        <label className={styles.checkboxRow}>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
      </div>

      {/* IDEAL FOR */}
      <div className={styles.section}>
        <details className={styles.dropdown}>

          <summary className={styles.summary}>
            IDEAL FOR
            <span className={styles.arrow}></span>
          </summary>

          <p className={styles.unselect} onClick={handleUnselectAll}>
            Unselect all
          </p>

          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={idealFor.men}
              onChange={() => handleCheckbox("men")}
            />
            Men
          </label>

          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={idealFor.women}
              onChange={() => handleCheckbox("women")}
            />
            Women
          </label>

          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={idealFor.kids}
              onChange={() => handleCheckbox("kids")}
            />
            Baby & Kids
          </label>
        </details>
      </div>

      {/* OTHER SECTIONS */}
      {[
        "OCCASION",
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIALS",
        "PATTERN",
      ].map((title) => (
        <div className={styles.section} key={title}>
          <details className={styles.dropdown}>
            <summary className={styles.summary}>
              {title}
              <span className={styles.arrow}></span>
            </summary>
          </details>
        </div>
      ))}
    </aside>
  );
}

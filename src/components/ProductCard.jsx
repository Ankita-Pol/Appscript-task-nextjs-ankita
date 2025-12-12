import Image from "next/image";
import styles from "@/styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>

      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>₹ {product.price}</p>
    </article>
  );
}

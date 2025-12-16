import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      <article>
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
    </Link>
  );
}

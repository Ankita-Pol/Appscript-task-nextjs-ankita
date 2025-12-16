import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/ProductDetail.module.css";

export default function ProductDetail({ product }) {
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>

      <div className={styles.page}>
        <div className={styles.container}>
          {/* LEFT : IMAGE */}
          <div className={styles.imageSection}>
            <Image
              src={product.image}
              alt={product.title}
              width={450}
              height={450}
              className={styles.image}
            />
          </div>

          {/* RIGHT : DETAILS */}
          <div className={styles.details}>
            <h1 className={styles.title}>{product.title}</h1>

            <p className={styles.category}>
              Category: <span>{product.category}</span>
            </p>

            <p className={styles.price}>₹ {product.price}</p>

            <p className={styles.description}>
              {product.description}
            </p>

            <div className={styles.actions}>
              <button className={styles.primaryBtn}>
                Add to Cart
              </button>
              <button className={styles.secondaryBtn}>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const product = await res.json();

  return {
    props: { product },
  };
}

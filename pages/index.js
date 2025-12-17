import Head from "next/head";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import SortDropdown from "@/components/SortDropdrown";
// import styles from "@/styles/Home.module.css";
import styles from "../src/styles/Home.module.css"
import { useState , useEffect} from "react";

export default function Home({ products }) {
  const [filterOpen, setFilterOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  setIsMobile(window.innerWidth < 768);
}, []);


  return (
    <>
      <Head>
        <title>Discover Our Products</title>
      </Head>

      <div className={styles.pageWrapper}>
        <div className={styles.headingSection}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Discover products designed to enhance your lifestyle. Whether you’re
            looking for everyday essentials or unique finds.
          </p>
        </div>

        <div className={styles.topControls}>
          <span>{products.length} ITEMS</span>

          {!isMobile && (
            <span
              className={styles.showFilter}
              onClick={() => setFilterOpen((p) => !p)}
            >
              {filterOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
          )}

          <SortDropdown />
        </div>

        <div
          className={`${styles.layoutWrapper} ${
            !filterOpen ? styles.noSidebar : ""
          }`}
        >
          {filterOpen && <FilterSidebar />}

          <div
            className={`${styles.productsGrid} ${
              !filterOpen ? styles.fullWidthGrid : ""
            }`}
          >
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}




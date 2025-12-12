import { useEffect, useState } from "react";
import Head from "next/head";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import SortDropdown from "@/components/SortDropdrown";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterOpen, setFilterOpen] = useState(true);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("API FAILED:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Discover Our Products</title>
      </Head>

      <div className={styles.pageWrapper}>
        {/* Heading Section */}
        <div className={styles.headingSection}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
          Discover products designed to enhance your lifestyle. Whether you’re looking for everyday essentials or unique finds, our collection combines quality, style, and functionality.
          </p>
        </div>

        {/* Top Controls */}
        <div className={styles.topControls}>
          <span>{products.length} ITEMS</span>

          {/* DESKTOP filter button */}
          {!isMobile && (
            <span
              className={styles.showFilter}
              onClick={() => setFilterOpen((prev) => !prev)}
            >
              {filterOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
          )}

          <SortDropdown />
        </div>

        {/* Main Grid Layout */}
        <div
          className={`${styles.layoutWrapper} ${
            !filterOpen ? styles.noSidebar : ""
          }`}
        >
          {/* Sidebar only when open */}
          {filterOpen && <FilterSidebar />}

          {/* Product Grid */}
          <div
            className={`${styles.productsGrid} ${
              !filterOpen ? styles.fullWidthGrid : ""
            }`}
          >
            {loading ? (
              <p className={styles.loading}>Loading products…</p>
            ) : (
              products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

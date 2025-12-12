// import "../styles/globals.css";
import "@/styles/globals.css"
// import Header from "../components/Header";
import Header from "@/components/Header";

// import Footer from "../components/Footer";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

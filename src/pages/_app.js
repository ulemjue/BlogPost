import "@/styles/globals.css";
import { Header, Footer } from "@/components/Layout";
import { ThemeContextProvider } from "@/components/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <div className="max-w-[1280px] grid gap-[100px] mx-auto bg-white">
        <div className="p-5">
          <Header />
        </div>
        <div className="p-5">
          <Component {...pageProps} />;
        </div>
        <div className="p-5">
          <Footer />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

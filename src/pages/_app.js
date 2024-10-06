import { Inter } from "next/font/google";
import AppContext from "../configs/appContext";
import "../style.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobaas App",
  description: "Jobaas as a service",
};

function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={{}}>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </AppContext.Provider>
  );
}

export default MyApp;

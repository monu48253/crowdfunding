import "@/styles/globals.css";

import { NavBar, Footer } from "../Components";
import { CrowdFundingProvider } from "@/Context/CrowdFunding";

export default function app({ Component, pageProps }) {
  return (
    <>
    <CrowdFundingProvider>
      <NavBar />
      <Component {...pageProps} />;
      <Footer />
      </CrowdFundingProvider>
    </>
  )
}

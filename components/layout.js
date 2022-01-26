import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import metaData from "../constants/metaData.json";

const Layout = ({ children, title }) => {
  return (
    <div className="w-full">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metaData.site_name} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        <title>{title}</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Navbar />

        {children}

        <Footer />
      </div>
    </div>
  );
};

export default Layout;

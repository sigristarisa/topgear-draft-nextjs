import Head from "next/head";
import Header from "./Header";

interface Children {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/img/farie_favicon.png" />
        <meta name="description" content="Farie" />
        <title>Farie – Gebrauchte Fahrzeuge online kaufen mit Garantie</title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

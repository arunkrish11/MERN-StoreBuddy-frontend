import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Layout({ children ,title, description, keywords, author}) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content= {description} />
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author} />
      </Helmet>
      <Header />
      <main className="main">{children}
      <ToastContainer />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

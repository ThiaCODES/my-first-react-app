import { Outlet } from "react-router-dom";
import Header from "./Header";

import Footer from "./Footer";
import "../Styling/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <Header />
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

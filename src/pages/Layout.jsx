import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Layout() {
  return (
    <>
      <div className="content-container">
        <Header />
      </div>
      
      <Outlet />

      <div className="content-container">
        <Footer />
      </div>
    </>
  );
}

export default Layout;

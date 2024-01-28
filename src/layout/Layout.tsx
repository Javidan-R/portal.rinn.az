import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <div className="w-full">
          <Header />
          <main className=""><Outlet /></main>
        </div>
        <Footer />
        </>
  );
}

export default Layout;

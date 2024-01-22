import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
import LoadingComponent from "../components/atoms/Loading";

const Layout = () => {
  return (
  <>
   <LoadingComponent />
      
        <div className="w-full">
          <Header />
          <main className=""><Outlet /></main>
        </div>
        <Footer />
  </>
   
  );
}

export default Layout;

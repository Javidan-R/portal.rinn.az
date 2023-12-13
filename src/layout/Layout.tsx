import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="">
        <Footer />
        <div className="w-full">
        <Header />
        <main className=""><Outlet /></main>
        </div>
    </div>
  )
}

export default Layout

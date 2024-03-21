import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/index.js"
import Footer from "../../components/footer/index.js"

const Layout = ()=>{
    return <div>
        <Navbar></Navbar>
        <Outlet/>
        <Footer></Footer>
    </div>
}
export default Layout
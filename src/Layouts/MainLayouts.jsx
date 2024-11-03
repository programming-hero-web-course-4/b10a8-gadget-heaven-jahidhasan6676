import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";


const MainLayouts = () => {
    return (
        <div>
           <div className="bg-[#9538E2] h-[500px] w-11/12 lg:w-11/12 mx-auto rounded-md ">
            <Navbar></Navbar>
            <Banner></Banner>
           </div>
           

           <div className="min-h-[calc(100vh-298px)] py-10">
           <Outlet></Outlet>
           </div>



           {/* footer */}
           <Footer></Footer>
           
        </div>
    );
};

export default MainLayouts;
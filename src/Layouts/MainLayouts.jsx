import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const MainLayouts = () => {
    return (
        <div>
           <div className="bg-[#9538E2] w-11/12 lg:w-11/12 mx-auto ">
            <Navbar></Navbar>
          
           </div>
           

           <div className="min-h-[calc(100vh-298px)]">
           <Outlet></Outlet>
           </div>



           {/* footer */}
           <Footer></Footer>
           
        </div>
    );
};

export default MainLayouts;
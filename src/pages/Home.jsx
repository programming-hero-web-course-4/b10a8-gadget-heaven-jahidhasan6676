import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";


const Home = () => {
    const categories = useLoaderData();
    
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto">
           <div>
            <h2 className="text-xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h2>
           <div className="flex gap-8">
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            </div>
           </div>
        </div>
    );
};

export default Home;
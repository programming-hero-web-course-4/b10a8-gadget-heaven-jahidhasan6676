import { useLoaderData, useParams } from "react-router-dom";


const GadgetDetails = () => {
    const {id} = useParams();
    const gadgetDetails = useLoaderData();
    console.log(gadgetDetails)
    return (
        <div>
            <h2>This is gadget details</h2>
        </div>
    );
};

export default GadgetDetails;
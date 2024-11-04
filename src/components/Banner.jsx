import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className=''>
            {/* text part */}
            <div className="text-center space-y-6 bg-[#9538E2] rounded-b-md pt-5 pb-60">
                <h1 className="text-3xl font-bold text-white">Upgrade Your Tech Accessorize with <br/> Gadget Heaven Accessories</h1>
                <p className="text-sm font-medium  text-white">Explore the latest gadgets that will take your experience to the next level. From smart <br/> devices to the coolest accessories, we have it all!</p>
                <button className="bg-[#FFFFFF] px-3 py-2 rounded-2xl font-medium text-[#9538E2]">Shop now</button>
            </div>
            {/* image part */}
            <div className='mt-[-230px]'>
                <img className='h-[450px] w-[70%] mx-auto  border p-2 bg-white/20 rounded-md mt-5' src={bannerImg} />
            </div>
        </div>
    );
};

export default Banner;
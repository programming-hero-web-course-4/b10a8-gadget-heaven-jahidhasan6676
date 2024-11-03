import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            {/* text part */}
            <div className="text-center space-y-6 mt-6">
                <h1 className="text-3xl font-bold text-white">Upgrade Your Tech Accessorize with <br/> Gadget Heaven Accessories</h1>
                <p className="text-sm font-medium  text-white">Explore the latest gadgets that will take your experience to the next level. From smart <br/> devices to the coolest accessories, we have it all!</p>
                <button className="bg-[#FFFFFF] px-3 py-2 rounded-2xl font-medium text-[#9538E2]">Shop now</button>
            </div>
            {/* image part */}
            <div className=''>
                <img className='absolute h-auto w-[60%] max-w-[600px] left-1/2 translate-x-[-50%] border p-2 bg-white/20 rounded-md mt-5' src={bannerImg} />
            </div>
        </div>
    );
};

export default Banner;
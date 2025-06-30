import { GoDotFill } from "react-icons/go"


function Aboutus() {
    return (
        <>
            <div className="relative bg-cover bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
                    <div className="flex gap-2 items-center">
                        <p className="h-[2.5px] lg:w-20 w-10 bg-white"></p>
                        <h3 className="tangerine-bold text-[50px]  md:text-[70px] text-white">
                            About Us
                        </h3>
                    </div>
                    <p className="inter-semibold text-white lg:text-[30px] text-lg">Shaping the Future of Intelligent Computing</p>

                </div>
            </div>



            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
                <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4 ">Empowering Progress Through Data, Computing, and Algorithms</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-medium text-gray-900">International Conference on Computing, Data Analytics, and Algorithms</span> is a leading global forum designed to bring together scholars, researchers, industry experts, and practitioners to share their cutting-edge research and practical insights. ICCDAA aims to foster knowledge exchange and collaboration in the fast-evolving domains of computing technologies, advanced data analytics, and modern algorithm design. Join us at ICCDAA to connect, collaborate, and contribute to shaping the future of intelligent computing and data-driven decision-making. </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-25 gap-10 lg:mt-15 mt-10">
                    <div className=" lg:block hidden ">
                        <div className="">
                            <img src="/assets/images/About.png" alt="Aboutimage" className='' />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-3 ">
                            <div className="border-2 border-[#E52020] w-fit px-3 rounded-full py-1">
                                <div className="flex gap-2 items-center">
                                    <GoDotFill className="text-sm text-[#E52020]" />
                                    <h2 className="roboto-slab-semibold text-xl">ICCDAA</h2>
                                </div>
                            </div>
                            <p className="inter-semibold text-[20px] lg:text-[40px] ">Empowering Innovation in Computing, Analytics, and Algorithms</p>
                        </div>

                        <div className="lg:hidden block mt-5">
                            <div className="flex justify-center">
                                <img src="/assets/images/About.png" alt="Aboutimage" className='w-full max-w-md ' />
                            </div>
                        </div>

                        <div className="mt-4 lg:mt-5">
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-semibold text-gray-900">International Conference on Computing, Data Analytics, and Algorithms</span> is a premier platform that brings together global researchers, industry professionals, and academicians to share innovations and advancements in the fields of computing, data analytics, and algorithm design. The conference fosters collaboration, sparks dialogue, and encourages knowledge exchange to address current challenges and explore emerging trends.</p>
                        </div>

                        <div className="mt-4 lg:mt-5 flex flex-col gap-6">
                            <p className="inter-medium text-[16px]">Here are a few key highlights of our conference:</p>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-6">
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Global Research Platform</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Focus on Innovation</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Interdisciplinary Scope</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Publication Opportunities</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Global Exposure</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Collaboration Opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Aboutus
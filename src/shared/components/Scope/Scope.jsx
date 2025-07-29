import { GoDotFill } from "react-icons/go";

export default function Scope() {
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
                            Our Scope
                        </h3>
                    </div>
                    <p className="inter-semibold text-white lg:text-[30px] text-lg">Our Research and Innovation Scope</p>

                </div>
            </div>



            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
                <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4 ">Defining Our Research Horizons</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">At the International Conference on Computing, Data Analytics, and Algorithms, our scope reaches far beyond traditional boundaries. We aim to create a collaborative space where cutting-edge computing technologies, advanced data analytics methods, and innovative algorithm designs converge. From foundational theories to real-world applications, we welcome diverse research that drives progress across industries and academia. By embracing emerging trends and fostering interdisciplinary dialogue, we strive to define the next horizons of digital intelligence and empower a smarter, data-driven future.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-15 gap-10 lg:mt-15 mt-10">

                    <div>
                        <div className="flex flex-col gap-3 ">
                            <div className="border-2 border-[#E52020] w-fit px-3 rounded-full py-1">
                                <div className="flex gap-2 items-center">
                                    <GoDotFill className="text-sm text-[#E52020]" />
                                    <h2 className="roboto-slab-semibold text-xl">ICCDAA</h2>
                                </div>
                            </div>
                            <p className="inter-semibold text-[20px] lg:text-[40px] ">Exploring the Frontiers of Computing and Analytics</p>
                        </div>

                        <div className="lg:hidden block mt-5">
                            <div className="flex justify-center">
                                <img src="/assets/images/Scope.png" alt="Scopeimage" className='w-full max-w-md ' />
                            </div>
                        </div>

                        <div className="mt-4 lg:mt-5">
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-semibold text-gray-900">International Conference on Computing, Data Analytics, and Algorithms</span> aims to serve as a dynamic platform for knowledge exchange, innovation, and interdisciplinary collaboration. The scope of the conference covers both theoretical foundations and practical applications in computing, intelligent systems, big data, and advanced algorithm design. ICCDAA welcomes contributions that explore novel computational models, scalable data analytics techniques, and efficient algorithms across diverse domains such as artificial intelligence, cloud computing, and optimization.</p>
                        </div>

                        <div className="mt-4 lg:mt-5 flex flex-col gap-6">
                            <p className="inter-medium text-[16px]">Here are a few key highlights of our scope:</p>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Intelligent Data Analytics</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Big Data & Cloud Integration</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Theory to Practice</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Ethical and Responsible AI</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Computing Architectures</p>
                                </div>
                                <div className="flex flex-row gap-3 lg:gap-2 items-center">
                                    <img src="/assets/images/point.png" alt="point" className="w-8" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">Algorithm Design</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=" lg:block hidden ">
                        <div className="">
                            <img src="/assets/images/Scope.png" alt="Scope" className='' />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}


import { Link } from "react-router-dom";

export default function Organizingcommittee() {
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
                            Organizing Committee
                        </h3>
                    </div>
                    <p className="inter-semibold text-white lg:text-[30px] text-lg">Pillars of Coordination</p>

                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
                <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4 ">The Minds Orchestrating ICCDAA</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The Organizing Committee is the driving force behind the International Conference on Computing, Data Analytics, and Algorithms. Comprising dedicated faculty, industry experts, and administrative leaders, this team oversees every aspect of planning and execution. From coordinating speakers and sessions to managing logistics and partnerships, the committee ensures that ICCDAA delivers a seamless and impactful experience for all participants. Their collective commitment shapes the conference into a collaborative platform that inspires innovation and knowledge exchange.</p>
            </div>
            <div className="lg:mt-15 mt-10 bg-[#FFF4EF] py-10">
                <p className="roboto-slab-semibold text-black text-[20px] lg:text-[30px] text-center mb-10">The Team Behind the Event</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 max-w-[65rem] mx-auto px-3">

                    <div className="relative ">
                        <div className="absolute bg-[#E52020] w-30 h-[calc(100%+15px)] -top-[7px] -left-[7px] rounded-lg"></div>
                        <div className="bg-white  shadow-[0_0_10px_rgba(0,0,0,0.1)] relative h-full rounded-lg border border-gray-300 px-5 py-8 ">
                            <div className="flex lg:flex-row flex-col gap-4 items-center">
                                <div className="">
                                    <img src="/assets/images/User.png" alt="Editor" className="w-27" />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <p className="hanuman-semibold text-[#E52020] text-xl">Chairman</p>
                                    <p className="hanuman-medium text-gray-900 text-2xl">Dr John Smith</p>
                                    <p className="inter-medium text-gray-900 sm:text-base md:text-lg lg:text-[18px">Prince Mohammed Bin Fahd University</p>
                                    <p className="inter-medium text-md text-gray-900">Country  : <span className="text-gray-600">India  </span>  </p>
                                </div>
                            </div>

                            <div className="absolute right-0 top-0 flex justify-center items-center bg-[#E52020]  px-3 py-3 text-3xl rounded-bl-[40px] rounded-tr-lg text-white font-semibold ">01</div>
                        </div>
                    </div>

                    <div className="relative ">
                        <div className="absolute bg-[#E52020] w-30 h-[calc(100%+15px)] -top-[7px] -right-[7px] rounded-lg"></div>
                        <div className="bg-white  shadow-[0_0_10px_rgba(0,0,0,0.1)] relative h-full rounded-lg border border-gray-300 px-5 py-8 lg:flex lg:justify-end">
                            <div className="flex lg:flex-row flex-col gap-4 items-center">
                                <div className="flex flex-col gap-2 lg:order-none order-2 lg:pl-15">
                                  <p className="hanuman-semibold text-[#E52020] text-xl">Convenors</p>
                                   <p className="hanuman-medium text-gray-900 text-2xl">Dr John Smith</p>
                                    <p className="inter-medium text-gray-900 sm:text-base md:text-lg lg:text-[18px">Prince Mohammed Bin Fahd University</p>
                                    <p className="inter-medium text-md text-gray-900">Country  : <span className="text-gray-600">India  </span>  </p>
                                </div>
                                <div className="lg:order-none order-1 flex-shrink-0">
                                    <img src="/assets/images/User.png" alt="Editor" className="w-27" />
                                </div>
                            </div>
                            <div className="absolute left-0 top-0 flex justify-center items-center bg-[#E52020]  px-3 py-3 text-3xl rounded-br-[40px] rounded-tl-lg text-white font-semibold ">02</div>
                        </div>
                    </div>

                    <div className="relative ">
                        <div className="absolute bg-[#E52020] w-30 h-[calc(100%+15px)] -top-[7px] -left-[7px] rounded-lg"></div>
                        <div className="bg-white  shadow-[0_0_10px_rgba(0,0,0,0.1)] relative h-full rounded-lg border border-gray-300 px-5 py-8 ">
                            <div className="flex lg:flex-row flex-col gap-4 items-center">
                                <div className="">
                                    <img src="/assets/images/User.png" alt="Editor" className="w-27" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="hanuman-semibold text-[#E52020] text-xl">Coordinator</p>
                                     <p className="hanuman-medium text-gray-900 text-2xl">Dr John Smith</p>
                                    <p className="inter-medium text-gray-900 sm:text-base md:text-lg lg:text-[18px">Prince Mohammed Bin Fahd University</p>
                                    <p className="inter-medium text-md text-gray-900">Country  : <span className="text-gray-600">India  </span>  </p>
                                </div>
                            </div>

                            <div className="absolute right-0 top-0 flex justify-center items-center bg-[#E52020]  px-3 py-3 text-3xl rounded-bl-[40px] rounded-tr-lg text-white font-semibold ">03</div>
                        </div>
                    </div>

                    <div className="relative ">
                        <div className="absolute bg-[#E52020] w-30 h-[calc(100%+15px)] -top-[7px] -right-[7px] rounded-lg"></div>
                        <div className="bg-white  shadow-[0_0_10px_rgba(0,0,0,0.1)] relative h-full rounded-lg border border-gray-300 px-5 py-8 lg:flex justify-end">
                            <div className="flex lg:flex-row flex-col gap-4 items-center">
                                <div className="flex flex-col items gap-2 lg:order-none order-2 lg:pl-15">
                                    <p className="hanuman-semibold text-[#E52020] text-xl">Members</p>
                                    <p className="hanuman-medium text-gray-900 text-2xl">Dr John Smith</p>
                                    <p className="inter-medium text-gray-900 sm:text-base md:text-lg lg:text-[18px">Prince Mohammed Bin Fahd University</p>
                                    <p className="inter-medium text-md text-gray-900">Country  : <span className="text-gray-600">India  </span>  </p>
                                </div>
                                <div className="lg:order-none order-1 flex-shrink-0">
                                    <img src="/assets/images/User.png" alt="Editor" className="w-27" />
                                </div>

                            </div>

                            <div className="absolute left-0 top-0 flex justify-center items-center bg-[#E52020]  px-3 py-3 text-3xl rounded-br-[40px] rounded-tl-lg text-white font-semibold ">04</div>
                        </div>
                    </div>
                    <div className="relative ">
                        <div className="absolute bg-[#E52020] w-30 h-[calc(100%+15px)] -top-[7px] -left-[7px] rounded-lg"></div>
                        <div className="bg-white  shadow-[0_0_10px_rgba(0,0,0,0.1)] relative h-full rounded-lg border border-gray-300 px-5 py-8 ">
                            <div className="flex lg:flex-row flex-col gap-4 items-center">
                                <div className="">
                                    <img src="/assets/images/User.png" alt="Editor" className="w-27" />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <p className="hanuman-semibold text-[#E52020] text-xl">Chairman</p>
                                    <p className="hanuman-medium text-gray-900 text-2xl">Dr John Smith</p>
                                    <p className="inter-medium text-gray-900 sm:text-base md:text-lg lg:text-[18px">Prince Mohammed Bin Fahd University</p>
                                    <p className="inter-medium text-md text-gray-900">Country  : <span className="text-gray-600">India  </span>  </p>
                                </div>
                            </div>

                            <div className="absolute right-0 top-0 flex justify-center items-center bg-[#E52020]  px-3 py-3 text-3xl rounded-bl-[40px] rounded-tr-lg text-white font-semibold ">04</div>
                        </div>
                    </div>

                    <div className="relative ">
                        <div className="absolute bg-[#E52020] w-30 h-[calc(100%+15px)] -top-[7px] -right-[7px] rounded-lg"></div>
                        <div className="bg-white  shadow-[0_0_10px_rgba(0,0,0,0.1)] relative h-full rounded-lg border border-gray-300 px-5 py-8 lg:flex lg:justify-end">
                            <div className="flex lg:flex-row flex-col gap-4 items-center">
                                <div className="flex flex-col gap-2 lg:order-none order-2 lg:pl-15">
                                  <p className="hanuman-semibold text-[#E52020] text-xl">Convenors</p>
                                   <p className="hanuman-medium text-gray-900 text-2xl">Dr John Smith</p>
                                    <p className="inter-medium text-gray-900 sm:text-base md:text-lg lg:text-[18px">Prince Mohammed Bin Fahd University</p>
                                    <p className="inter-medium text-md text-gray-900">Country  : <span className="text-gray-600">India  </span>  </p>
                                </div>
                                <div className="lg:order-none order-1 flex-shrink-0">
                                    <img src="/assets/images/User.png" alt="Editor" className="w-27" />
                                </div>
                            </div>
                            <div className="absolute left-0 top-0 flex justify-center items-center bg-[#E52020]  px-3 py-3 text-3xl rounded-br-[40px] rounded-tl-lg text-white font-semibold ">06</div>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}
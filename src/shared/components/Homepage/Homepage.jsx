import { PiCalendarCheckFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosAlarm } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { TbCircleArrowRightFilled } from "react-icons/tb";


function Homepage() {
  return (
    <>

      <div className="bg-[url('/assets/images/Hero.jpg')] bg-cover  bg-right lg:h-screen  flex items-center">
        <div className="w-full xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 py-5 lg:mt-0 mt-25 relative">
          <div className="flex flex-col gap-5 justify-center items-center">
            <div>
              <div className="flex gap-4 items-center">
                <div className="space-y-1">
                  <div className="h-[1.5px] bg-white lg:w-[260px] md:w-[70px] w-[30px]"></div>
                  <div className="h-[1.5px] bg-white lg:w-[260px] md:w-[70px] w-[30px]"></div>
                </div>
                <p className="roboto-slab-regular lg:text-[40px] text-[20px] text-white">August 20-25, 2025</p>
                <div className="space-y-1">
                  <div className="h-[1.5px] bg-white lg:w-[260px] md:w-[70px] w-[30px]"></div>
                  <div className="h-[1.5px] bg-white lg:w-[260px] md:w-[70px] w-[30px]"></div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[50rem]">
              <p className="roboto-slab-medium lg:text-[40px] text-[20px] text-white text-center">International Conference on Computing, Data Analytics, and Algorithms</p>
            </div>
            <div className="flex lg:flex-row flex-col gap-2">
              <Link to="/paper-submission">
                <div className="group flex gap-2 bg-gradient-to-r from-[#E52020] to-[#A40000] py-3 px-3 rounded-lg items-center">
                  <button className=" text-white roboto-slab-medium text-lg lg:text-2xl cursor-pointer">Register Here</button>
                  <TbCircleArrowRightFilled className="text-white text-2xl -rotate-45 group-hover:rotate-45 transition-all duration-300" />
                </div>
              </Link>
              <div>
                <button className=" text-white roboto-slab-medium text-lg lg:text-2xl border-2 border-white py-2 px-3 rounded-lg hover:bg-white transition-all duration-300 hover:text-gray-800">TamilNadu, Chennai</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-auto">
        <div className="lg:block hidden absolute lg:bottom-0">
          <div className="bg-[#E52020] px-5 py-4 rounded-tl-xl  rounded-tr-xl">
            <div className="grid lg:grid-cols-3 gap-20">
              <div className="flex flex-row items-center gap-2">
                <PiCalendarCheckFill className='text-4xl text-white' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-200">Date</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-white">28th to 30th August, 2025</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <IoLocationSharp className='text-4xl text-white' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-200">Location</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-white ">TamilNadu, Chennai</p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <IoIosAlarm className='text-4xl text-white' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-200">Duration</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-white">9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About the Conference */}
      <div className="bg-[#FFF4EF] lg:py-10 py-5">
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 lg:mt-15 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-15 gap-10">
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
                    <h2 className="roboto-slab-semibold text-xl">About Us</h2>
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
                <Link to="/about">
                  <div className="group flex gap-2 bg-gradient-to-r from-[#E52020] to-[#A40000] w-fit py-2 px-2 rounded-lg items-center ">
                    <button className="text-white roboto-slab-medium text-lg cursor-pointer">Read More</button>
                    <TbCircleArrowRightFilled className="text-white text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/*Our scope */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 lg:mt-15 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-15 gap-10">

          <div>
            <div className="flex flex-col gap-3 ">
              <div className="border-2 border-[#E52020] w-fit px-3 rounded-full py-1">
                <div className="flex gap-2 items-center">
                  <GoDotFill className="text-sm text-[#E52020]" />
                  <h2 className="roboto-slab-semibold text-xl">Our Scope</h2>
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
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-6">
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
              <Link to="/scope">
                <div className="group flex gap-2 bg-gradient-to-r from-[#E52020] to-[#A40000] w-fit py-2 px-2 rounded-lg items-center ">
                  <button className="text-white roboto-slab-medium text-lg cursor-pointer">Read More</button>
                  <TbCircleArrowRightFilled className="text-white text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                </div>
              </Link>
            </div>
          </div>

          <div className=" lg:block hidden ">
            <div className="">
              <img src="/assets/images/Scope.png" alt="Scope" className='' />
            </div>
          </div>
        </div>
      </div>



      <div className="bg-[#FFF4EF] lg:py-10 py-5 lg:mt-15 mt-10">
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3">
          <div className="flex flex-col gap-7">
            <div className="border-2 border-[#E52020] w-fit px-3 rounded-full py-1">
              <div className="flex gap-2 items-center">
                <GoDotFill className="text-sm text-[#E52020]" />
                <h2 className="roboto-slab-semibold text-xl">Our Keynote Speakers</h2>
              </div>
            </div>
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">ICCDAA 2025 is proud to host a distinguished lineup of keynote speakers and panelists from across the globe. These thought leaders, innovators, and pioneers represent top-tier universities, research institutions, and tech industries.  Our featured speakers will share groundbreaking research, practical case studies, and visionary perspectives on the future of intelligent systems, big data, AI, and emerging technologies. Join us to engage with these influential voices who are shaping the future of technology and data-driven innovation.</p>
          </div>
          <div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 h-full mt-10 lg:max-w-[80rem] place-self-center">
              <div>
                <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] px-5 py-10 rounded-md h-full">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src="/assets/images/Speaker.jpg" alt="Speaker" className="flex-shrink-0" />
                    </div>
                    <div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[#E52020] roboto-slab-medium text-xl">John Mathews</p>
                        <p className="inter-regular">Senior Research Analyst</p>
                      </div>
                      <p className="mt-4 text-gray-700 text-[16px] text-justify leading-[30px]">With rich experience across academia and industry, he offers practical insights into intelligent computing and its real-world applications.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] px-5 py-10 rounded-md h-full">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src="/assets/images/Speaker.jpg" alt="Speaker" className="flex-shrink-0" />
                    </div>
                    <div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[#E52020] roboto-slab-medium text-xl">John Mathews</p>
                        <p className="inter-regular">Senior Research Analyst</p>
                      </div>
                      <p className="mt-4 text-gray-700 text-[16px] text-justify leading-[30px]">With rich experience across academia and industry, he offers practical insights into intelligent computing and its real-world applications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Join Us at ICBOM 2025 */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3  lg:mt-15 mt-10">
        <div className="flex flex-col gap-7 items-center">
          <div className="border-2 border-[#E52020] w-fit px-3 rounded-full py-1 ">
            <div className="flex gap-2 items-center">
              <GoDotFill className="text-sm text-[#E52020]" />
              <h2 className="roboto-slab-semibold text-xl">ICCDAA 2025</h2>
            </div>
          </div>
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Computing, Data Analytics, and Algorithms aims to bring together leading experts, innovators, and scholars to explore breakthroughs in computing technologies, intelligent data analysis, and algorithmic advancements. ICCDAA 2025 serves as a global hub for presenting original research, sharing practical innovations, and fostering collaborations across academia and industry. Join us to discover the future of computing and shape the next era of data-driven intelligence.</p>
        </div>


        <div className="max-w-[70rem] mx-auto px-3 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3  place-items-center  gap-7 lg:gap-17 h-full w-full">
            <div className=" mx-auto bg-gradient-to-r from-[#E52020] to-[#A40000] rounded-xl h-full w-full  py-5   ">
              <div className="flex flex-row items-center gap-2 px-7">
                <PiCalendarCheckFill className='text-4xl text-white' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-200">Date</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-white">28th to 30th August, 2025</p>
                </div>
              </div>
            </div>
            <div className=" mx-auto bg-gradient-to-r from-[#E52020] to-[#A40000] rounded-xl h-full w-full  py-5   ">
              <div className="flex flex-row items-center gap-2 px-7">
                <IoLocationSharp className='text-4xl text-white' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-200">Location</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-white">TamilNadu, Chennai</p>
                </div>
              </div>
            </div>
            <div className=" mx-auto bg-gradient-to-r from-[#E52020] to-[#A40000] rounded-xl h-full w-full  py-5   ">
              <div className="flex flex-row items-center gap-2 px-7">
                <IoIosAlarm className='text-4xl text-white' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-200">Duration</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-white">9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


   
    </>
  )
}

export default Homepage
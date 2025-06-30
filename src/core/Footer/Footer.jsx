import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoIosMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { TbCircleArrowRightFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="">
        <footer className="bg-[#A40000] text-white relative mt-45 ">

          <div className="relative xl:bottom-1/2 xl:-translate-y-30 lg:bottom-35  lg:block hidden ">
            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3">
              <div className="bg-white border-3 border-[#E52020] px-25 py-7  rounded-full">
                <div className="flex flex-col gap-3 ">
                  <p className="text-[#E52020] roboto-slab-semibold text-2xl">Empower the Future with Computing, Data & Algorithms</p>
                  <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Step into the forefront of innovation at the International Conference on Computing, Data Analytics, and Algorithms. This premier event brings together researchers, academicians, and industry leaders from across the globe to explore the latest breakthroughs in computing technologies, intelligent algorithms, and data-driven solutions.</p>
                  <Link to="/paper-submission" className='flex justify-center'>
                    <div className="group flex gap-2 bg-gradient-to-r from-[#E52020] to-[#A40000] w-fit py-2 px-2 rounded-lg items-center ">
                      <button className="text-white roboto-slab-medium text-lg cursor-pointer">Register Here</button>
                      <TbCircleArrowRightFilled className="text-white text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div className=" mx-auto px-5 max-w-[92rem]  lg:py-10 py-5 xl:-mt-25 lg:-mt-30 -mt-30">
            <div className="grid grid-cols-1  md:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-4 ">
              <div className='text-center md:text-left flex flex-col justify-start items-start'>
                <Link to='/'>
           
              <img className='w-40 md:mx-0   mx-auto' src="/assets/images/White.png" alt="logo" />
            </Link>
                {/* <Link to="/" className="text-white text-4xl hanuman-semibold">
                  ICCDAA
                </Link> */}
              </div>
              <div className='lg:mx-auto md:text-left text-start '>
                <h4 className="lg:text-xl text-lg font-bold mb-2 ">Quick Links</h4>
                <ul className=' lg:text-base list-disc list-inside'>
                  <li><a href="/" className="hover:underline">Home</a></li>
                  <li><a className="hover:underline w-fit"> <Link to='/about'>About the Conference</Link></a></li>
                  <li><a className="hover:underline"><Link to='/scope'>Scope</Link> </a></li>
                  <li><a className="hover:underline"><Link to='/organizing-committee'>Organization Committee</Link></a></li>
                  <li><a className="hover:underline"><Link to='/editorial-board'>Editorial Board</Link> </a></li>
                </ul>
              </div>
              <div className='lg:ml-auto  md:text-left text-start  '>
                <div className='flex gap-4 flex-wrap justify-start items-start '>
                  <div className=''>
                    <h4 className="lg:text-xl text-lg font-bold mb-2 ">Registration Guide</h4>
                    <ul className="lg:text-base list-disc list-inside">
                      <li><a className="hover:underline"><Link to='/key-dates'>Key Dates</Link> </a></li>
                      <li><a className="hover:underline"><Link to='/conference-tracks'>Conference Tracks</Link></a></li>
                      <li><a className="hover:underline"><Link to='/paper-submission'>Paper submission </Link>  </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='lg:ml-auto  md:text-left text-start  '>
                <div className='flex gap-4 flex-wrap justify-start items-start '>
                  <div className=''>
                    <h4 className="lg:text-xl text-lg font-bold mb-2 ">Contact Info</h4>
                    <ul className="lg:text-base ">
                      <li><a className="hover:underline"><Link to='' className='flex gap-2 items-center'><IoLocationSharp className='text-lg' />Chennai, Tamil Nadu</Link></a></li>
                      <li className='wrap-anywhere xl:wrap-normal'><a className="hover:underline"><Link to='' className='flex gap-2 items-center'><IoIosMail className="text-lg" />info.iccdaa@gmail.com</Link></a></li>
                      <li><a className="hover:underline"><Link to='' className='flex gap-2 items-center'><BiSolidPhoneCall className='text-lg' />+91 0101010101</Link></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="bg-white h-[1px]   mx-auto  "></h1>
          <div className='grid lg:grid-cols-3 grid-cols-1  items-center    py-3  '>
            <div>
            </div>
            <div className="text-center md:text-base text-xs">
              <p>© 2025 <span className='hover:underline' > <Link to="/" target='_blank'>ICCDAA </Link> </span> . All Rights Reserved.</p>
            </div>
          </div>
        </footer>

      </div>

    </>
  );
};
export default Footer;

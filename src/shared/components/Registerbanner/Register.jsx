import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";


function Register() {
    return (
        <>
            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3  mt-15  lg:hidden block">
                <div className="bg-white border-3 border-[#E52020] px-5 py-5  rounded-xl">
                    <div className="flex flex-col gap-3 ">
                        <p className="text-[#E52020] roboto-slab-semibold text-2xl">Empower the Future with Computing, Data & Algorithms</p>
                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Step into the forefront of innovation at the International Conference on Computing, Data Analytics, and Algorithms. This premier event brings together researchers, academicians, and industry leaders from across the globe to explore the latest breakthroughs in computing technologies, intelligent algorithms, and data-driven solutions.</p>
                        <Link to="/paper-submission" className="mx-auto ">
                            <div className="group flex gap-2 bg-gradient-to-r from-[#E52020] to-[#A40000] w-fit py-2 px-2 rounded-lg items-center ">
                                <button className="text-white roboto-slab-medium text-lg cursor-pointer">Register Here</button>
                                <TbCircleArrowRightFilled className="text-white text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
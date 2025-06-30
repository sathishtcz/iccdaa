import { FaBrain, FaChartBar, FaCloud, FaCogs, FaDatabase, FaLock, FaRobot } from "react-icons/fa";

export default function ConferenceTracks() {
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
                            Conference Tracks
                        </h3>
                    </div>
                    <p className="inter-semibold text-white lg:text-[30px] text-lg">Key Focus Areas</p>

                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10">
                <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4  ">Core Tracks at ICCDAA</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mb-12">The  <span className="inter-medium text-gray-900">International Conference on Computing, Data Analytics, and Algorithms</span> features a diverse array of carefully designed tracks that showcase the evolving and interdisciplinary landscape of computing, data-driven insights, and algorithmic innovations. Each track aims to ignite impactful discussions, highlight pioneering research, and encourage collaboration among global researchers, industry experts, and academicians.</p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaRobot className="text-4xl text-[#E52020] " />,
                            num: "01",
                            title: "Machine Learning & AI",
                            desc: "Advance intelligent systems with deep learning, NLP, and predictive analytics."
                        },
                        {
                            icon: <FaDatabase className="text-4xl text-[#E52020]" />,
                            num: "02",
                            title: "Big Data & Analytics",
                            desc: "Harness big data frameworks, visualization, and advanced data mining."
                        },
                        {
                            icon: <FaBrain className="text-4xl text-[#E52020]" />,
                            num: "03",
                            title: "Algorithm Design",
                            desc: "Explore novel algorithmic techniques for complex problems and optimizations."
                        },
                        {
                            icon: <FaCloud className="text-4xl text-[#E52020]" />,
                            num: "04",
                            title: "Cloud & Edge Computing",
                            desc: "Discuss scalable architectures, distributed computing, and IoT ecosystems."
                        },
                        {
                            icon: <FaLock className="text-4xl text-[#E52020]" />,
                            num: "05",
                            title: "Cybersecurity & Privacy",
                            desc: "Enhance secure computing with cryptography and privacy-preserving algorithms."
                        },
                        {
                            icon: <FaChartBar className="text-4xl text-[#E52020]" />,
                            num: "06",
                            title: "Data Science Applications",
                            desc: "Apply analytics across industries for innovation and informed decision-making."
                        }, {
                            icon: <FaCogs className="text-4xl text-[#E52020]" />,
                            num: "07",
                            title: "High-Performance Computing",
                            desc: "Explore scalable computing solutions, cloud infrastructures, and advanced processing techniques."
                        },
                        {
                            icon: <FaBrain className="text-4xl text-[#E52020]" />,
                            num: "08",
                            title: "Cognitive Computing",
                            desc: "Advance human-like decision-making with AI systems that simulate human thought processes."
                        },
                        {
                            icon: <FaCloud className="text-4xl text-[#E52020]" />,
                            num: "09",
                            title: "Edge & Cloud Integration",
                            desc: "Combine edge computing and cloud solutions for faster, smarter, and decentralized data processing."
                        }

                    ].map((track, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition duration-300 group relative"
                        >
                            {/* Number Badge */}
                            <div className="absolute top-4 right-4  w-8 h-8 flex items-center text-gray-600 text-lg lg:text-xl justify-center roboto-slab-semibold">
                                {track.num}
                            </div>

                            {/* Icon */}
                            <div className="mb-4">{track.icon}</div>

                            {/* Title */}
                            <h3 className="hanuman-semibold text-xl text-gray-900 group-hover:text-[#E52020] transition">
                                {track.title}
                            </h3>

                            {/* Description */}
                            <p className="inter-regular text-gray-600 mt-2">
                                {track.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

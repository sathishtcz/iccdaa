import { LuLockOpen } from "react-icons/lu";
import { Link } from "react-router-dom";


export default function Editorboard() {


    const teamMembers = [
        {
            name: "D. Kayathri Devi",
            department: "Department of Information Technology and Engineering",
            university: "Amity University",
            location: "Uzbekistan"
        },
        {
            name: "T. Ananth Kumar",
            department: "Department of Computer Science and Engineering",
            university: "IFET College of Engineering ",
            location: "India "
        },
        {
            name: "Ijegwa David Acheme",
            department: "Department of Computer Science",
            university: "Edo State University",
            location: "Nigeria"
        },
         { name: 'K. Karthika', department: 'Department of Computer Science and Engineering', university: 'Sri Sairam College of Engineering', location: 'India' },
        {
            name: "Hansi Gunasinghe",
            department: "Department of Computing and Information Systems",
            university: "Sabaragamuwa University of Sri Lanka",
            location: "Sri Lanka"
        },
        {
            name: "Tehreem Qasim",
            department: "Department of Robotics and Artificial Intelligence",
            university: "SZABIST University",
            location: "Pakistan"
        }, { name: 'G. Vinodhini', department: 'Department of Information Technology', university: 'Annamalai University', location: 'India' },
        {
            name: "Sakshi dua",
            department: "Department of Computer Applications",
            university: "Lovely Professional University",
            location: "India"
        },
        {
            name: "Argha Chandra Dhar",
            department: "Department of Computer Science and Engineering",
            university: "Khulna University of Engineering and Technology",
            location: "Bangladesh"
        },
        {
            name: "Tusar Kanti Dash",
            department: "Department of Electronics and Communication Engineering",
            university: "C V Raman Global University",
            location: "India"
        },
        {
            name: "Dheeraj Kumar Joshi",
            department: "Department of Mathematics",
            university: "DIT University",
            location: "India"
        },
        {
            name: "Idowu Bismark Olabode",
            department: "Department of Electrical and Information Engineering",
            university: "Covenant University",
            location: "Nigeria"
        },
        {
            name: "Hung Nguyen",
            department: "Department of Information Technology",
            university: "Nha Trang university",
            location: "Vietnam"
        },
        { name: 'V. Mageshwari', department: 'Department of Computer Science and Engineering', university: 'PSGR Krishnammal College for Women', location: 'India' },

        { name: 'Huiliang Zhao', department: 'Department of Product Design', university: 'Guizhou Minzu University', location: 'China' },
        { name: 'D. Angeline Benitta', department: 'Department of Computer Applications', university: 'Hindustan Institute of Technology and Science', location: 'India' },
        {
            name: "Asghar Ali Shah",
            department: "Department of Computer Science",
            university: "Bahria university",
            location: "Pakistan"
        },
        {
            name: "P. Rajesh",
            department: "Department of Computer Science and Engineering",
            university: "Institute of Science and Technolog",
            location: "India"
        },
        {
            name: "Yogi Pratama",
            department: "Department of Medical Informatics",
            university: "Al Insyirah Institute of Health and Technology",
            location: "Indonesia"
        },
        {
            name: "Mujtaba Korai",
            department: "Department of Computer Engineering",
            university: "Gachon University",
            location: "South Korea"
        },
        {
            name: "Bawar Mohammed Faraj",
            department: "Department of Information Technology",
            university: "University of Halabja Computer Science",
            location: "Iraq"
        },
        {
            name: "Minhaz Uddin Emon",
            department: "Department of Computer Science",
            university: "Pattimura University",
            location: "Indonesia"
        }

    ];
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
                            Editorial Board
                        </h3>
                    </div>
                    <p className="inter-semibold text-white lg:text-[30px] text-lg">Leaders in Research Excellence</p>

                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
                <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4 ">Meet Our Esteemed Editorial Board</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The ICCDAA Editorial Board is composed of distinguished scholars, researchers, and industry experts who bring deep knowledge and unwavering commitment to maintaining the highest academic standards. Their role is pivotal in reviewing submissions, ensuring rigorous peer evaluation, and upholding the integrity of the conference proceedings. Through their guidance and expertise, we strive to foster impactful discussions, nurture innovative ideas, and promote excellence across computing, data analytics, and algorithm research.</p>
            </div>
            <div className="lg:mt-15 mt-10 bg-[#FFF4EF] py-10">
                <p className="roboto-slab-semibold text-black text-[20px] lg:text-[30px] text-center mb-10">Meet Our Esteemed Editorial Board</p>

                <div className="max-w-[65rem] mx-auto px-4 ">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white border-l-4 border-[#E52020] p-6 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="hanuman-medium text-[#E52020] text-2xl">Dr. {member.name}</h3>
                                    <p className="inter-medium text-gray-700">{member.department}</p>
                                    <p className="inter-medium text-gray-700">
                                        {member.university}
                                    </p>
                                    <p className="inter-medium text-gray-700">
                                        {member.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </>
    )
}

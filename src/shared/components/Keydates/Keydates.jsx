import { BsCalendarEvent, BsCheckCircle, BsUpload, BsClockHistory, BsPersonCheck, BsPeople } from "react-icons/bs";
import { MdAccountBalance, MdAccountBox, MdLocationOn, MdCode, MdVerifiedUser } from "react-icons/md";



export default function Keydates() {
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
              Key Dates
            </h3>
          </div>
          <p className="inter-semibold text-white lg:text-[30px] text-lg">Stay Ahead: ICCDAA 2025 Key Dates</p>

        </div>
      </div>


      <div className="xl:max-w-[1450px] md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10">
        <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4">
          ICCDAA 2025 Important Dates
        </p>
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]  mb-8">Keep track of these important deadlines to ensure your successful participation in the International Conference on Computing, Data Analytics, and Algorithms. From abstract submissions and paper acceptance to registration and final preparations, these key dates will help you plan ahead and make the most of this premier academic event. Don’t miss the opportunity to contribute, collaborate, and connect — mark your calendar today!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <BsCalendarEvent />, label: "Abstract Submission Closes", date: "September 10, 2025" },
            { icon: <BsUpload />, label: "Full Paper Submission Deadline", date: "September 15, 2025" },
            { icon: <BsCheckCircle />, label: "Acceptance Notification", date: "September 23, 2025" },
            { icon: <BsClockHistory />, label: "Final Paper Submission", date: "September 29, 2025" },
            { icon: <BsPersonCheck />, label: "Registration Deadline", date: "October 2, 2025" },
            { icon: <BsPeople />, label: "Conference Dates", date: "October 7, 2025" },
          ].map((item, index) => (
            <div key={index} className="relative bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E52020] rounded-t-lg"></div>
              <div className="text-[#E52020] text-3xl mb-4">{item.icon}</div>
              <p className="inter-medium text-[18px] text-black mb-2">{item.label}</p>
              <p className="inter-regular text-gray-800 text-[16px]">{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === FANCY REGISTRATION DETAILS SECTION === */}
      {/* <div className="xl:max-w-[1450px] md:max-w-[920px] px-3 mx-auto mt-16 lg:mt-20">
        <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4">
          Payment & Registration Information
        </p>

        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]  mb-8">
          Register now to be part of one of the most anticipated gatherings in computing, data analytics, and algorithm research. Whether you’re presenting groundbreaking work, attending to expand your expertise, or looking to collaborate with global innovators, your registration guarantees access to insightful sessions, engaging workshops, and valuable networking opportunities at ICCDAA 2025.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <MdAccountBox />, label: "Account Name", value: "ICCDAA Conference" },
            { icon: <MdAccountBalance />, label: "Account Number", value: "9876543210" },
            { icon: <MdLocationOn />, label: "Branch", value: "Chennai" },
            { icon: <MdCode />, label: "IFSC Code", value: "ICIC0001234" },
            { icon: <MdVerifiedUser />, label: "MICR", value: "600229001" },
          ].map((item, index) => (
            <div key={index} className="relative bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E52020] rounded-t-lg"></div>
              
              <div className="text-[#E52020] text-3xl mb-4">{item.icon}</div>
              <p className="inter-medium text-[18px] text-black mb-2">{item.label}</p>
              <p className="inter-regular text-gray-800 text-[16px] break-words">{item.value}</p>
            </div>
          ))}
        </div>
      </div> */}

    </>
  )
}

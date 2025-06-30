import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { toast } from "react-toastify";


export default function Contactus() {

    const [formData, setFormData] = useState({
        Firstname: '',
        Lastname: '',
        Mobile_Number: '',
        Email_Address: '',
        Message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Firstname', formData.Firstname);
            formDataToSend.append('Lastname', formData.Lastname);
            formDataToSend.append('Mobile_Number', formData.Mobile_Number);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Message', formData.Message);

            // if (formData.Paper_File) {
            //     formDataToSend.append('Paper_File', formData.Paper_File);
            // }

            const response = await fetch('http://192.168.29.11/ICCDAA/Iccdaa/contact.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    Firstname: '',
                    Lastname: '',
                    Mobile_Number: '',
                    Email_Address: '',
                    Message: '',
                });
                toast.success("Form submitted successfully!");
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };


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
                            Contact Us
                        </h3>
                    </div>
                    <p className="inter-semibold text-white lg:text-[30px] text-lg">Contact Our Conference Team</p>

                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
                <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4 ">Let’s Get In Touch</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">If you have any questions regarding registration, paper submissions, sponsorship opportunities, or general event details, our team is here to assist you. We welcome inquiries from academics, professionals, students, and collaborators across the globe.</p>
            </div>


            <div className="xl:max-w-[1050px] md:max-w-[920px] px-3 mx-auto mt-10 ">
                <div className="bg-[#FFF4EF] p-5 rounded-lg">
                    <div className="grid lg:grid-cols-5 grid-cols-1 items-center gap-8">

                        <div className="flex flex-col   gap-8 items-center justify-center lg:col-span-2">
                            <div className="flex flex-col gap-1 items-center">
                                <LiaPhoneVolumeSolid className="text-[#E52020] text-4xl flex-shrink-0" />
                                <p className="text-gray-600 inter-medium text-lg wrap-anywhere xl:wrap-normal">Call Support Center 24/7</p>
                                <p className="text-black inter-medium text-lg wrap-anywhere xl:wrap-normal">+91 9745551212</p>
                            </div>

                            <div className="flex flex-col gap-1 items-center">
                                <IoIosMail className="text-[#E52020] text-4xl flex-shrink-0" />
                                <p className="text-gray-600 inter-medium text-lg">Write to Us</p>
                                <p className="text-black inter-medium text-lg wrap-anywhere xl:wrap-normal">info.iccdaa@gmail.com</p>
                            </div>

                            <div className="flex flex-col gap-1 items-center">
                                <IoLocationSharp className="text-[#E52020] text-4xl flex-shrink-0" />
                                <p className="text-gray-600 inter-medium text-lg">Location</p>
                                <p className="text-black inter-medium text-lg wrap-anywhere xl:wrap-normal">TamilNadu, Chennai</p>
                            </div>
                        </div>



                        <div className="lg:col-span-3">
                            <p className="roboto-slab-semibold text-[#E52020] text-[20px] lg:text-[30px] mb-4 text-center">Send us a Message</p>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col  gap-5">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <div>
                                            <input
                                                type="text"
                                                name="Firstname"
                                                onChange={handleChange}
                                                value={formData.Firstname}
                                                placeholder="Enter Your First Name"
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="Lastname"
                                                onChange={handleChange}
                                                value={formData.Lastname}
                                                required
                                                placeholder="Enter Your Last Name "
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                onChange={handleChange}
                                                value={formData.Email_Address}
                                                required
                                                name="Email_Address"
                                                placeholder="Enter Your Email"
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                onChange={handleChange}
                                                value={formData.Mobile_Number}
                                                required
                                                name="Mobile_Number"
                                                placeholder="Enter Your Phone Number"
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            />
                                        </div>
                                        <div className='lg:col-span-2'>
                                            <textarea
                                                onChange={handleChange}
                                                value={formData.Message}
                                                required
                                                name="Message"
                                                placeholder="Enter Your Message"
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                                rows="5"
                                            >

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="group flex gap-2 justify-center bg-gradient-to-r from-[#E52020] to-[#A40000] py-2 px-2 rounded-lg items-center w-fit">
                                            <button type="submit" disabled={status === 'Sending...'} className="text-white roboto-slab-medium text-lg cursor-pointer">{status === 'Sending...' ? 'Sending...' : 'Send Message'}</button>
                                            <TbCircleArrowRightFilled className="text-white text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

import React from "react";
import { contact } from "../constants";
import { Card, Input, Button } from "@material-tailwind/react";
// import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const Contact = () => {
  const top = () => {
    window.scrollTo({
      top:0,
      left:100,
      behavior: "smooth"
    });
    
  };

  return (
    <div id="contact" className="h-full w-[100%] ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80">
      <div className="pb-10 lg:pb-5 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Contact
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="lg:mx-5 grid grid-cols-1 xl:grid-cols-5 gap-5">
        <div className="bg-white h-full lg:w-full col-span-2 shadow-2xl">
          <div>
            {contact.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex m-5">
                  <span className="text-2xl me-3">{item.icons1}</span>
                  <div className="-mt-1">
                    <h1 className="text-xl font-semibold">{item.title1}</h1>
                    <p>{item.value1}</p>
                  </div>
                </div>
                <div className="flex m-5">
                  <span className="text-2xl me-3">{item.icons2}</span>
                  <div className="-mt-1">
                    <h1 className="text-xl font-semibold">{item.title2}</h1>
                    <p>{item.value2}</p>
                  </div>
                </div>
                <div className="flex m-5">
                  <span className="text-2xl me-3">{item.icons3}</span>
                  <div className="-mt-1">
                    <h1 className="text-xl font-semibold">{item.title3}</h1>
                    <p>{item.value2}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mx-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63432.56370737007!2d3.3805405356156384!3d6.453654934940688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cc9b07cf55%3A0xc4ae10b395418b9b!2sLagos%20Island!5e0!3m2!1sen!2sng!4v1717526852107!5m2!1sen!2sng"
                width="100%"
                style={{ border: "0", height: "40vh", marginBottom: "20px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-span-3 shadow-2xl me-3 sm:me-0">
          <Card color="transparent" shadow={false} className="mx-4">
            <form className="mt-8 mb-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Input type="text" size="lg" label="Your Name" />
                </div>
                <div>
                  <Input type="email" size="lg" label="Email" />
                </div>
              </div>
              <div className="mt-10">
                <Input type="text" size="lg" label="Subject" />
              </div>
              <div className="xl:mt-20 mt-10 2xl:mt-10">
                <Input type="text" size="" label="Message" className="pt-64" />
              </div>
              <div className="mx-auto w-64">
                <Button className="mt-64 px-10 mb-5 xl:mb-0 bg-[#149ddd]">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <div className="absolute right-10 mt-16 bg-[#149ddd] text-white text-xl p-2 rounded-full" onClick={top}>
        <FaArrowUp />
      </div>
    </div>
  );
};

export default Contact;

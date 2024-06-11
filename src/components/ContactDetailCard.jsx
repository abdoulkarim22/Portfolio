import React from "react";
import { useState } from "react";
import Footer from "./Footer";

function ContactDetailCard() {
  const [status, setStatus] = useState("Submit");//for handle submit button and form subbmit
  const [input1, setInput1] = useState({ height: "2px", click: false });
  const [input2, setInput2] = useState({ height: "2px", click: false });
  const [input3, setInput3] = useState({ height: "5px", click: false });



  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch(
      "https://backend-portfolio-ktnbrtimo-1atul0s-projects.vercel.app/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  const handleInputClick1 = () => {
    // Increase the height on input click
    setInput1({ click: true, height: "40px" }); // Adjust the desired height
  };
  const handleInputClick2 = () => {
    // Increase the height on input click
    setInput2({ click: true, height: "40px" }); // Adjust the desired height
  };
  const handleInputClick3 = () => {
    // Increase the height on input click
    setInput3({ click: true, height: "80px" }); // Adjust the desired height
  };

  return (
    <section>
      <div className="bg-white dark:bg-black rounded-2xl ">
        <div className="px-7 md:px-14 pt-14  ">
          <div className="flex md:space-x-4 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">Contact</h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-green-600  top-1/2 absolute rounded-lg " />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-6">Contact Form</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1" htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              className="w-full p-2 border border-green-900 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-green-900 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1" htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              className="w-full p-2 border border-green-900 rounded focus:outline-none focus:ring-2 focus:ring-green-500 rounded h-32"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full p-2 bg-green-600 text-gray-900 font-bold rounded hover:bg-transparent-600 focus:outline-none focus:ring-2 "
          >
            Send Message
          </button>
        </form>
        </div>

        <Footer />
      </div>
    </section>
  );
}
export default ContactDetailCard;

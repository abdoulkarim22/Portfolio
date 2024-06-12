import React from "react";
import Footer from "./Footer";
import ActivityCard from "./ActivityCard";
import ActivityDetails from "./ActivityDetails.js";

function WorkDetailCard() {
  return (
    <section>
      <div className="bg-white dark:bg-black rounded-2xl dark:text-[#a6a6a6]">
        <div className="px-4 md:px-14 pt-14  ">
          <div className="flex md:space-x-4 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">
              Activities
            </h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-green-600  top-1/2 absolute rounded-lg" />
            </div>
          </div>

          {/* adding link to Activities page  */}
             
          {/* <div className="grid sm:grid-cols-2 my-4">
            {ActivityDetails.map((ActivityDetail, index) => (
              <ActivityCard
                index={index}
                title={ActivityDetail.title}
                description={ActivityDetail.description}
                img={ActivityDetail.image}
                link={ActivityDetail.link}
              />
            ))}
          </div> */}
        </div>

        {/* for adding Certification courses  */}
        <div className="px-14 py-5  ">
           À venir!!
          <h1 className="text-2xl text-black font-semibold flex space-x-2">
            {/* <span className="dark:text-white">Certification Courses</span> */}
          </h1>

          {/* add first Certification course  */}
          {/* <a href="https://drive.google.com/file/d/15CX4p6NVs_WehrSqJ9jtKshJkVDNEvGl/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-pink-100 dark:bg-slate-900 my-3 rounded-xl">Web Development Bootcamp by Angela Yu (Udemy)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/1HEnt6RFiSaPSMnz7utrT1qUeV3tm-k2I/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-red-100 dark:bg-slate-900 my-3 rounded-xl">Database Management System (NPTEL)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/1dr_NBuJPWWDwe-fN0UsDCMerR4Jn2GkD/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-pink-100 dark:bg-slate-900 my-3 rounded-xl">C++ (Spoken Tutorial IIT Bombay)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/1ex3Vvdj943Nt-gP897KiTBm8KeW7Mt73/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-red-100 dark:bg-slate-900 my-3 rounded-xl">Java (Spoken Tutorial IIT Bombay)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/1oQdYeKMzqjLzSaRhQpaee0zDDBZ1gsFy/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-pink-100 dark:bg-slate-900 my-3 rounded-xl">Python (Cisco Netacad)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/15OgPFxPhSS4NBPQDzQ6TXQ5YNHa-pCGk/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-red-100 dark:bg-slate-900 my-3 rounded-xl">C language (Cisco Netacad)- <span className="text-blue-400">Certificate link</span> </div></a>
          
           */}
        </div>
        <Footer />
      </div>
    </section>
  );
}
export default WorkDetailCard;

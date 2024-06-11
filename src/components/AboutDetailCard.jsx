import React from "react";

import Footer from "./Footer";

function AboutDetailCard() {
  return (
    <section>
      <div className="bg-white dark:bg-black shadow-sm    rounded-2xl text-[#828282] ">
        <div className="px-4 md:px-14 pt-14  ">
          <div className="flex md:space-x-4 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">À propos</h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-green-600  top-1/2 absolute rounded-lg" />
            </div>
          </div>
          <p className="my-5 ">
          Développeur web et mobile passionné, j'excelle dans la création
           d'applications innovantes et performantes.Mon ambition est de simplifier
           la vie des utilisateurs grâce à des solutions digitales élégantes et fonctionnelles
          </p>
          <p>
          Actuellement, j'explore le développement Mobile  en utilisant React Native , ainsi que , et je suis toujours à la recherche de
          opportunités d'acquérir plus d'expérience et de travailler dans le monde réel
            projets.
          </p>
        </div>
        {/* for what i do section  */}
        <div className="px-4 md:px-14 py-5  ">
          <h1 className="text-2xl text-black dark:text-white font-semibold">Ce que je fais!</h1>
          {/* for what do box  */}
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* first box  */}
            <div className="bg-pink-50 dark:bg-slate-900  rounded-lg mr-4 my-4 p-3 sm:flex sm:space-x-2 space-y-2 sm:space-y-0 ">
              {/* for icon  */}
              <div className="">
                <svg
                  className="h-6 w-10 my-2 fill-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </div>
              {/* for text  */}
              <div className=" space-y-2">
                <h1 className="text-lg text-black font-semibold">
                Le développement web
                </h1>
                <p className="text-md">
                J'ai également une bonne connaissance du frontend. J'ai
                  créé beaucoup de projets
                </p>
              </div>
            </div>

            {/* second box  */}
            <div className="bg-gray-50 dark:bg-slate-900 rounded-lg mr-4 my-4 p-3 sm:flex sm:space-x-2 space-y-2 sm:space-y-0 ">
              {/* for icon  */}
              <div className="">
                <svg className="h-9 w-10 my-2 text-green-700" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="m12 19.01l.01-.011"/><path d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6"/><path stroke-linejoin="round" d="M15.5 8.5L19 12l-3.5 3.5m-7-7L5 12l3.5 3.5"/></g></svg>
              </div>
              {/* for text  */}
              <div className="space-y-2">
                <h1 className="text-lg text-black  font-semibold">
                Le développement Mobile
                </h1>
                <p className="text-md">
                Je me plonge actuellement dans le développement mobile avec React Native,
                 prêt à mettre en pratique mes compétences dans le monde réel.
                </p>
              </div>
            </div>

           
           
            
          </div>
          {/* third box  */}
         
        </div>
        <Footer />
      </div>
    </section>
  );
}
export default AboutDetailCard;

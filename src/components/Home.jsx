import React from "react";

function Home() {
  return (
    <div className="absolute flex flex-col h-screen w-full">
      <img
        src="/images/bg.webp"
        className="absolute object-cover w-full h-full"
        alt="Background"
      />

      <div className="flex absolute justify-between w-full">
        <div className=" m-5">
          <p className="text-white text-xl font-semibold">ACADEMIA</p>
          <p className="text-white text-[12px] font-bold">
            ONLINE EDUCATION & LEARNING
          </p>
        </div>
        <div className="flex gap-5 mt-6 mr-5">
          <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-zinc-400">
            <p className="text-black font-semibold ">f</p>
          </div>
          <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-zinc-400">
            <p className="text-black font-semibold">i</p>
          </div>
          <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-zinc-400">
            <p className="text-black font-semibold">t</p>
          </div>
          <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-zinc-400">
            <p className="text-black font-semibold">y</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col text-white p-5 sm:p-10 w-full h-full justify-between mt-20">
        <div className="bg-opacity-20 w-full absolute top-0 left-0 h-20 flex justify-between items-center px-5 sm:px-10 bg-gray-400">
          <div className="hidden md:flex gap-4 sm:gap-8">
            <p className="text-white capitalize cursor-pointer hover:text-gray-300">
              Home
            </p>
            <p className="text-white capitalize cursor-pointer hover:text-gray-300">
              About
            </p>
            <p className="text-white capitalize cursor-pointer hover:text-gray-300">
              All Courses
            </p>
            <p className="text-white capitalize cursor-pointer hover:text-gray-300">
              Team
            </p>
            <p className="text-white capitalize cursor-pointer hover:text-gray-300">
              Pricing
            </p>
            <p className="text-white capitalize cursor-pointer hover:text-gray-300">
              Journal
            </p>
            <p className="text-white capitalize cursor-pointer hover:text-gray-300">
              Contact
            </p>
          </div>

          <div className="flex md:hidden">
            <button className="text-white">Menu</button>
          </div>

          <button className="text-white bg-green-500 h-10 w-[120px] sm:w-[150px] rounded-lg">
            Get Certificate
          </button>
        </div>

        <div className="flex flex-col items-start mt-20 sm:mt-28 px-5 sm:px-10 lg:max-w-lg w-full space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Welcome to Academia
          </h1>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold">
            Best Online Education Expertise
          </h2>
          <p className="text-sm sm:text-md lg:text-lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-5 max-w-full">
            <button className="bg-teal-500 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-teal-700 transition-all">
              Get Started Now
            </button>
            <button className="bg-white text-teal-500 py-2 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-teal-100 transition-all">
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <div className="absolute left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="/logo.png"
          alt="Listify Logo"
          width={300}
          height={100}
          className="w-32 md:w-52 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/*search box*/}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/*Avatar*/}
          <Avatar name="Aliva Pryadarshini" round size="50" color="#0055D1" />
        </div>
      </div>
      <div className="flex items-center justify-center py-2 px-5 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl p-5 rounded-xl w-fit bg-white italic max-w-3xl  text-blue-600">
          {" "}
          <UserCircleIcon className="inline-block h-10 w-10 mr-1 text-blue-600 " />
          GPT is summarising your task for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;

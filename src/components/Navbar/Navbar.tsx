"use client";
import {
  Bell,
  Heart,
  Mail,
  MessageCirclePlus,
  SearchIcon,
  User,
  UserPlus,
} from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [isMailDropdownOpen, setIsMailDropdownOpen] = useState(false);

  const toggleMailDropdown = () => {
    setIsMailDropdownOpen(!isMailDropdownOpen);
  };
  const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);

  const togglebellDropdown = () => {
    setIsBellDropdownOpen(!isBellDropdownOpen);
  };
  
  return (
    <div className="relative border-b py-1  lg:flex lg:flex-row lg:items-center lg:justify-between md:flex md:flex-row md:items-center md:justify-between  sm:flex sm:flex-row sm:items-center sm:justify-between flex flex-col items-center justify-center px-5  ">
      <div className="pt-2 relative  text-gray-600">
        <input
          className="border-2 text-xs  border-gray-300 h-8 px-4 pr-16 rounded-full focus:outline-none"
          type="search"
          name="search"
          placeholder="Search..."
        />
        <button type="submit" className="absolute top-0 left-[215px] mt-4 ">
          <SearchIcon className="h-4 w-4" />
        </button>
      </div>


      <div className="relative flex items-center gap-5 my-2">
        <div>
          {/* <ToggleButton/> */}
        </div>
            <div className="cursor-pointer" onClick={toggleMailDropdown}>
              <Mail className="w-5 h-5" />
            </div>
            {isMailDropdownOpen && (
              <div className="absolute right-[100px] mt-[175px] w-48 bg-white border border-gray-300 rounded shadow-lg">
                <ul className="py-1">
                  <li className="px-4 text-xs py-2 hover:bg-gray-100 cursor-pointer">
                    Action
                  </li>
                  <li className="px-4  text-xs py-2 hover:bg-gray-100 cursor-pointer">
                    Another Action
                  </li>
                  <li className="px-4  text-xs py-2 hover:bg-gray-100 cursor-pointer">
                    Something else here
                  </li>
                </ul>
              </div>
            )}
            <div className="cursor-pointer" onClick={togglebellDropdown}>
              <Bell className="w-5 h-5" />
            </div>
            {isBellDropdownOpen && (
              <div className="absolute right-[55px] mt-[250px] w-52 bg-white border border-gray-300 rounded shadow-lg">
                <ul className="py-5">
                  <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer flex items-center ">
                    <div className="bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center">
                      <UserPlus className="h-5 w-5 text-white " />
                    </div>
                    <p className="text-xs ml-1">
                      New user registered<br></br>
                      <span className="text-xs text-gray-500 pt-4">
                        5 minutes ago
                      </span>
                    </p>
                  </li>
                  <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer flex items-center ">
                    <div className="bg-green-600 rounded-full h-10 w-10 flex items-center justify-center">
                      <MessageCirclePlus className="h-5 w-5 text-white " />
                    </div>
                    <p className="text-xs ml-1">
                      New user registered<br></br>
                      <span className="text-xs text-gray-500 pt-4">
                        5 minutes ago
                      </span>
                    </p>
                  </li>
                  <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer flex items-center ">
                    <div className="bg-pink-600 rounded-full h-10 w-10 flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white " />
                    </div>
                    <p className="text-xs ml-1">
                      New user registered<br></br>
                      <span className="text-xs text-gray-500 pt-4">
                        5 minutes ago
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            )}
            <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="relative w-[45px] h-[45px]  border border-gray-400 shadow-lg rounded-full overflow-hidden"
              >
                <Image src='/profile.png' className="object-cover inset-1 h-full w-full " width={100} height={100} alt="/profile.png"/>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <div className="flex items-center gap-2">
                    <div className="relative h-[80px] w-[80px]  border border-gray-400 rounded-lg shadow-lg">
                    <Image src='/profile.png' className="h-full w-full object-cover inset-1" width={300} height={300} alt="/profile.png"/>
                    </div>

                    <div>
                      <p className="text-1xl text-black font-medium">Abhishek</p>
                      <span className="text-xs text-gray-400 font-light">hello@gmail.com</span>
                      <button className="bg-purple-500 px-2 py-2 text-[12px] text-white font-medium  rounded-full">
                      View Profile
                    </button>
                    </div>
                    
                </div>
                
              </DropdownMenuLabel>
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>My Balance</DropdownMenuItem>
              <DropdownMenuItem>Account Setting</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
            
    </div>
  );
};

export default Navbar;

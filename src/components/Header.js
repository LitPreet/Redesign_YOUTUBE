import React, { useContext, useState } from "react";
import { Link ,useNavigate, useLocation } from "react-router-dom";
//logos
import PCLogo from "../images/yt-logo.png";
import MBLogo from "../images/yt-logo-mobile.png";
//icons
import { IoIosSearch } from "react-icons/io";
import {BiLogOutCircle} from 'react-icons/bi'
import { FiBell } from "react-icons/fi";
import { Context } from "../context/contextApi";
import { signOut } from "firebase/auth";
import { auth } from '../firebase';


const Header = ( {onSignOut} ) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { mobileMenu, setMobileMenu} = useContext(Context);
  const navigate = useNavigate();
  

  const searchQueryHandler = (event) =>{

    if((event?.key === 'Enter') && searchQuery?.length > 0) {
navigate(`/searchResult/${searchQuery}`);
    }
  }

const MobileMenuToggle = () =>{
  setMobileMenu(!mobileMenu);
}

const handleSignOut = () => {
 
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
      onSignOut();
    
      }).catch((error) => {
      // An error happened.
      });
  
}
  
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    
    <div className="sticky  text-center my-[16px] mx-2 md:mx-4 rounded-2xl  z-20 flex shadow-2xl h-[55px] md:h-[4rem] flex-none  bg-[#222222] justify-between items-center px-4 md:px-5 transition-all ">
      {/* hamburger  and logo */}

      <div className="flex h-5 items-center ">
        {pageName !== "video" && (
          <div className=" h-10 w-10 hidden md:hidden items-center  cursor-pointer hover:bg-[#51545b]/[0.7] rounded-full justify-center" onClick={MobileMenuToggle}>
            {/* {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )} */}
          </div>
        )}

        {/* logo start */}
        <Link to="/" className="flex h-5 items-center">
          <img alt="pclogo" src={PCLogo} className="hidden h-full md:block" />
          <img alt="moblogo" src={MBLogo} className="h-full md:hidden px-3" />
        </Link>
      </div>

      {/* input main div */}
      <div className=" group flex items-center">
        <div className="flex h-8 md:h-10 md:pl-5 border  border-[#675f5f] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5  md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>

          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value = {searchQuery}
          />
        </div>
        <button className="w-[40px] md:[60px] h-8 md:h-10 flex items-center justify-center border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]" onClick={searchQueryHandler()}>
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>


      <div className="flex items-center">
        <div className="hidden sm:flex md:flex justify-between items-center">
          <button onClick={handleSignOut} className="flex rounded-md items-center justify-center h-8 w-[80px] bg-white text-black font-semibold">SignOut</button>
          
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#51545b]/[0.7]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <button onClick={handleSignOut} className="flex sm:hidden md:hidden items-center justify-center mr-2  h-[32px] w-[32px] rounded-full bg-white "><BiLogOutCircle /></button>
       
        <div
          className="hidden md:flex h-8 w-8 overflow-hidden rounded-full md:ml-4 
          "
        >
          <img
            alt="img"
            src="https://xsgames.co/randomusers/avatar.php?g=male"
          />
        </div>
      </div>
    </div>

  );
};

export default Header;

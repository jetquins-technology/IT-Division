import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { HiMiniSlash } from "react-icons/hi2";

const Breadcrumb = ({item}) => {
    
  return (
    <nav aria-label="breadcrumb" className="flex items-center text-gray-600 text-sm">
     
        <div  className="flex items-center ">
         
            <Link to="" className="hover:underline  hover:text-white-800 text-[#fff] text-[1rem]">
              Home
            </Link>
            <HiMiniSlash className="text-[#C8C8C8] text-[1.4rem]" />
          
            <span className=" text-[#fff]" >{item}</span>
          
        </div>
      
    </nav>
  );
};

export default Breadcrumb;

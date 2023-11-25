import gallery from "../assets/gallery.png";
import contacts from "../assets/Contacts.png";
import map from "../assets/Map.png";
import sort from "../assets/sort.png"
import shortlistImage from "../assets/shortlist.png"
import shortlistImageYellow from "../assets/shortlistIconYellow.png"
import contactBlack from "../assets/contactBlack.png"
import { useState } from "react";

const IconBar = ({shortlist}) => {
  // we are changing a state variable in parent component based on some event inside child component
  const shortListToggle=()=>{
      shortlist(prevState => !prevState); // Toggle the state based on the previous state  
      setIsShortList(!isShortList)
  }

  const [isShortList,setIsShortList]=useState(false);
  return (
    <div className="flex box-border p-5">
      <div className="flex w-11/12">
        <div className="m-2 md:mx-10">
          <img className="w-[25px] h-[25px] ml-[6px]" src={!isShortList ? contacts :contactBlack} alt="contacts" />
          <p className={`${!isShortList? 'text-[#E0A64E]':''} text-xs mt-2`}>Contacts</p>
        </div>
        <div className="m-2 md:mx-10">
          <img className="w-[25px] h-[25px] ml-3" src={gallery} alt="gallery" />
          <p className=" text-xs mt-2 ml-1">Gallery</p>
        </div>
        <div className="m-2 md:mx-10">
          <img className="w-[25px] h-[25px] ml-2" src={map} alt="map"/>
          <p className=" text-xs mt-2 ml-2">Map</p>
        </div>
      </div>
      <div className="flex">
        <div className="m-2 md:mx-10" onClick={shortListToggle}>
          <img className="w-[25px] h-[25px] ml-3" src={ isShortList ? shortlistImageYellow :shortlistImage} alt="shortlist"/>
          <p className={`${isShortList? 'text-[#E0A64E]':''} text-xs mt-2`}>Shortlisted</p>
        </div>
        <div className="m-2 md:mx-10">
          <img className="w-[25px] h-[25px]" src={sort} alt="sort"/>
          <p className=" text-xs mt-2">Sort</p>
        </div>
      </div>
    </div>
  );
};
export default IconBar;

import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import LocationData from "./LocationData";

function Header() {
  const [ip, setIp] = useState("");
  const [searchIp, setSearchIp] = useState("");

  const handleSearch = () => {
    setSearchIp(ip); // Update the IP used for LocationData
  };

  return (
    <div className="flex justify-center items-center h-full text-white flex-col lg:gap-7 lg:mx-[135px] xs:mx-20 xs:gap-2">
      <h1 className="font-bold lg:text-4xl lg:mt-auto xs:mt-28 xs:text-lg">
        IP Address Tracker
      </h1>
      <div className="w-full flex justify-center items-center">
        <input
          className="py-3 px-4 rounded-tl-md rounded-bl-md text-black lg:w-1/3 xs:w-full"
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setIp(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img
            className="bg-black px-4 rounded-tr-md rounded-br-md lg:py-[17px] xs:py-[19px]"
            src={arrow}
            alt="arrow"
          />
        </button>
      </div>

      <LocationData ip={searchIp} />
    </div>
  );
}

export default Header;

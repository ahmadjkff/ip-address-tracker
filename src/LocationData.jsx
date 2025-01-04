import React, { useState, useEffect, useContext } from "react";
import Calculations from "./Calculations";
import { MyContext } from "./Context";
import Placeholder from "./Skeleton";

function LocationData({ ip }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { setCenter } = useContext(MyContext);
  const fields = [
    { name: "IP Address", value: data?.ip },
    { name: "Location", value: data?.location },
    { name: "Timezone", value: data?.timezone },
    { name: "ISP", value: data?.isp },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Calculations(ip);
        setData(result);
        setCenter(result.center);
      } catch (err) {
        setError("Failed to fetch location data");
      }
    };

    fetchData();
  }, [ip]);

  if (error) {
    return (
      <div className="flex justify-evenly bg-white w-full text-black rounded-xl z-40 lg:flex-row lg:translate-y-20 xs:-translate-y-12 xs:flex-col xs:items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-white translate-y-20 w-full py-8 text-black rounded-xl z-40 px-10">
        <Placeholder />
      </div>
    );
  }

  return (
    <div className="flex justify-evenly bg-white translate-y-20 w-full py-8 text-black rounded-xl z-40 gap-4 lg:flex-row xs:flex-col xs:items-center">
      {fields.map((field) => {
        return (
          <div className="flex flex-col px-10 xs:items-center" key={field.name}>
            <h5 className="text-Dark-Gray">{field.name}</h5>
            <p className="xs:font-bold">{field.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LocationData;

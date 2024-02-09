import React, { useEffect, useState } from "react";
import { AIRLINES_API } from "../constants/AppConstants";
import TimeConverter from "./TimeConverter";
import Shimmer from "./Shimmer";

const ShowBookingDetails = ({ onClose, flight }) => {
  console.log("flight:", flight);
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(AIRLINES_API);
      const json = await data.json();
      console.log("jsonValue:", json?.data?.result);
      setBookingData(json?.data?.result);
    } catch (e) {
      console.error("Error in getting booking details : ", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed mt-20 top-0 left-2 right-2 rounded-lg h-[75%] flex bg-white bg-opacity-55 backdrop-blur-lg">
      {loading ? (
        <Shimmer />
      ) : (
        <div className="flex flex-row-reverse justify-between w-full">
          <div className="cursor-pointer m-2" onClick={onClose}>
            <img
              className="h-10 w-10"
              src="https://cdn.iconscout.com/icon/free/png-256/free-close-1439770-1214341.png"
              alt=""
            />
          </div>

          <div className="mt-6 w-full overflow-y-scroll">
            {bookingData.map((booking) => (
              <div
                key={booking?.id}
                className="m-4 ml-32 h-32 w-9/12 bg-gray-200 shadow-md rounded-lg"
              >
                <div className="flex justify-center">
                  <h1 className="mt-2 p-2 px-6 font-bold text-lg rounded-lg shadow-lg text-center text-gray-600">
                    {booking?.displayData?.airlines?.[0]?.airlineName}
                  </h1>
                </div>
                <div className="flex m-4 gap-56">
                  <div className="ml-9 text-center">
                    <h2 className="font-bold text-base">
                      <TimeConverter
                        depTime={booking?.displayData?.source?.depTime}
                      />
                    </h2>
                    <span className="text-gray-500 font-semibold font-sans text-sm">
                      {booking?.displayData?.source?.airport?.cityName}
                    </span>
                  </div>
                  <div className="-mt-2 text-gray-500">
                    <h6 className="-mb-3 text-center">
                      {booking?.displayData?.totalDuration}
                    </h6>
                    <span className="">⎼⎼⎼⎼⎼⎼⎼⎼⎼</span>
                    <h6 className="-mt-2 text-center">
                      {booking?.displayData?.stopInfo}
                    </h6>
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-base">
                      <TimeConverter
                        depTime={booking?.displayData?.destination?.arrTime}
                      />
                    </h2>
                    <span className="text-gray-500 font-semibold font-sans text-sm">
                      {booking?.displayData?.destination?.airport?.cityName}
                    </span>
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-base">₹ {booking?.fare}</h2>
                    <span className="text-gray-500 font-semibold font-sans text-sm">
                      per adult
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBookingDetails;

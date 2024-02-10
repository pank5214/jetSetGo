import React, { useEffect, useState } from "react";
import { AIRLINES_API } from "../constants/AppConstants";
import TimeConverter from "./TimeConverter";
import Shimmer from "./Shimmer";

const ShowFlightDetails = ({ onClose, sourceCity, destinationCity }) => {
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
    <div className="fixed mt-16 top-0 left-2 right-2 rounded-lg h-[75%] flex bg-gray-100 bg-opacity-55 backdrop-blur-lg">
      {loading ? (
        <Shimmer />
      ) : (
        <div className="flex flex-row-reverse justify-between w-full">
          <div
            className="cursor-pointer m-2 hover:bg-slate-200 h-10 w-10 hover:rounded-md"
            onClick={onClose}
          >
            <img
              className="h-10 w-10"
              src="https://cdn.iconscout.com/icon/free/png-256/free-close-1439770-1214341.png"
              alt="close"
            />
          </div>

          <div className="mt-6 w-full overflow-y-scroll">
            {bookingData
              .filter(
                (booking) =>
                  booking?.displayData?.source?.airport?.cityName ===
                    sourceCity &&
                  booking?.displayData?.destination?.airport?.cityName ===
                    destinationCity
              )
              .map((booking) => (
                <div
                  key={booking?.id}
                  className="m-4 ml-32 h-28 flex justify-center w-10/12 bg-gray-300 shadow-md rounded-lg cursor-pointer"
                >
                  <div className="flex flex-col justify-center px-6 -ml-[58px] rounded-xl shadow-slate-500 shadow-md text-center text-slate-600">
                    <h1 className="font-bold text-lg">
                      {booking?.displayData?.airlines?.[0]?.airlineName}
                    </h1>
                    <h6 className="text-xs">
                      Flight No.{" "}
                      {booking?.displayData?.airlines?.[0]?.flightNumber}
                    </h6>
                  </div>
                  <div className="flex items-center gap-48">
                    <div className="ml-9 text-center">
                      <h2 className="font-bold text-base">
                        <TimeConverter
                          depTime={booking?.displayData?.source?.depTime}
                        />
                      </h2>
                      <span className="text-gray-500 font-semibold font-sans text-sm">
                        {booking?.displayData?.source?.airport?.cityName} (T-
                        {booking?.displayData?.source?.airport?.terminal})
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
                        {booking?.displayData?.destination?.airport?.cityName}{" "}
                        (T-
                        {booking?.displayData?.destination?.airport?.terminal})
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
            {/* Check if there are no flights and display a message */}
            {bookingData.filter(
              (booking) =>
                booking?.displayData?.source?.airport?.cityName ===
                  sourceCity &&
                booking?.displayData?.destination?.airport?.cityName ===
                  destinationCity
            ).length === 0 && (
              <div className="mt-48">
                <p className="text-center mt-6 text-red-600 font-bold text-xl">
                  Sorry for the inconvenience, There are no available flights
                  between {sourceCity} and {destinationCity} at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowFlightDetails;

import React, { useState } from "react";
import InputTextComp from "./InputTextComp";
import { IoIosAirplane } from "react-icons/io";
import { ButtonYellowComp } from "./ButtonYellowComp";
import ShowBookingDetails from "./ShowBookingDetails";
import { AIRLINES_API } from "../constants/AppConstants";

const FlightBookingFormComp = () => {
  const [showModals, setShowModals] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [source, setSource] = useState(""); // Lifted state for source
  const [destination, setDestination] = useState(""); // Lifted state for destination

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Button clicked!!");
    // const data = await fetch(AIRLINES_API);
    // const json = await data.json();
    // const matchingFlight = json?.data?.result.find(
    //   (flight) =>
    //     flight?.displayData?.source?.airport?.cityName === source &&
    //     flight?.displayData?.destination?.airport?.cityName === destination
    // );
    // console.log("Matching Flight:", matchingFlight);
    // console.log("Source:", source);
    // console.log("Destination:", destination);
    // console.log("Flight Data:", json?.data?.result);

    // // Store values in localStorage
    // localStorage.setItem("source", source);
    // localStorage.setItem("destination", destination);

    // setSelectedFlight(matchingFlight);
    setShowModals(true);
  };

  const closeModal = () => {
    setShowModals(false);
  };

  return (
    <div className="bg-white pb-5 w-[22%] rounded-3xl absolute mt-20 shadow shadow-gray-300">
      <form action="" onSubmit={handleSubmit}>
        <div className="p-5">
          <p className="font-semibold">
            Book Cheap <span className="text-yellow-400">Flights</span>
          </p>
        </div>
        <div className="flex bg-black text-white justify-center py-3 ">
          <div className="flex">
            <input className="text-white" type="radio" required />
            <p className="text-sm ml-3">One Way</p>
          </div>
          <div className="flex ml-3">
            <input className="text-white" type="radio" />
            <p className="text-sm ml-3 text-yellow-400">Round Trip</p>
          </div>
        </div>
        <div className="p-5">
          <InputTextComp
            image={<IoIosAirplane />}
            placeholder="Source"
            suggestionsKey="source"
            label="Source"
            value={source}
            onChange={(selectedValue) => setSource(selectedValue)}
          />
          <InputTextComp
            image={<IoIosAirplane />}
            placeholder="Destination"
            suggestionsKey="destination"
            label="Destination"
            extraStyle={"mt-2"}
            value={destination}
            onChange={(selectedValue) => setDestination(selectedValue)}
          />
        </div>

        <div className="px-5">
          <ButtonYellowComp
            label={"FIND FLIGHTS"}
            extraStyle={"mt-5 flex justify-center"}
            type="submit"
          />
        </div>
      </form>
      {showModals && (
        <ShowBookingDetails onClose={closeModal} flight={selectedFlight} />
      )}
    </div>
  );
};

export default FlightBookingFormComp;

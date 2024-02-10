import React, { useEffect, useState } from "react";
import AutoSuggestInput from "./AutoSuggestInput";
import { IoIosAirplane } from "react-icons/io";
import ButtonYellow from "./ButtonYellow";
import ShowFlightDetails from "./ShowFlightDetails";

const FlightBookingForm = () => {
  const [showModals, setShowModals] = useState(false);
  const [sourceValue, setSourceValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");

  useEffect(() => {
    if (showModals) {
      document.body.style.overflow = "hidden"; // Prevent scrolling on the background content
    } else {
      document.body.style.overflow = ""; // Allow scrolling when the modal is closed
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on component unmount
    };
  }, [showModals]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModals(true);
  };

  const closeModal = () => {
    setShowModals(false);
  };

  return (
    <div className="bg-white pb-5 w-[25%] rounded-3xl absolute mt-20 shadow shadow-gray-300">
      <form action="" onSubmit={handleSubmit}>
        <div className="p-5">
          <p className="font-semibold">
            Book Cheap <span className="text-yellow-400">Flights</span>
          </p>
        </div>
        <div className="flex bg-black text-white justify-center py-3 gap-16">
          <div className="flex items-center">
            <input
              className="text-white"
              type="radio"
              name="flightType"
              id="oneWay"
              required
            />
            <label htmlFor="oneWay" className="text-sm ml-3">
              One Way
            </label>
          </div>
          <div className="flex items-center ml-3">
            <input
              className="text-white"
              type="radio"
              name="flightType"
              id="roundTrip"
            />
            <label htmlFor="roundTrip" className="text-sm ml-3 text-yellow-400">
              Round Trip
            </label>
          </div>
        </div>

        <div className="p-5 mt-1">
          <AutoSuggestInput
            image={<IoIosAirplane />}
            placeholder="Source"
            suggestionsKey="source"
            label="Source"
            searchValue={sourceValue}
            setSearchValue={setSourceValue}
            required={true}
          />
          <AutoSuggestInput
            image={<IoIosAirplane />}
            placeholder="Destination"
            suggestionsKey="destination"
            label="Destination"
            extraStyle={"mt-4"}
            searchValue={destinationValue}
            setSearchValue={setDestinationValue}
            required={true}
          />
          <input
            className="mt-5 border-gray-300 border-[1px] p-2 rounded-lg shadow-md"
            type="date"
            required
          />
        </div>

        <div className="px-5">
          <ButtonYellow
            label={"FIND FLIGHTS"}
            extraStyle={"mt-1 flex justify-center"}
            type="submit"
          />
        </div>
      </form>
      {showModals && (
        <ShowFlightDetails
          onClose={closeModal}
          sourceCity={sourceValue}
          destinationCity={destinationValue}
        />
      )}
    </div>
  );
};

export default FlightBookingForm;

import React from "react";

const TimeConverter = ({ depTime }) => {
  // Split the string into date and time parts
  const [datePart, timePart] = depTime.split("T");

  // Create a new Date object using the time part
  const timeDate = new Date(`1970-01-01T${timePart}`);

  // Extract the time portion
  const extractedTime = timeDate.toTimeString().slice(0, 5);

  // console.log("Departure Time: ", extractedTime, datePart);
  return (
    <div>
      <p>{extractedTime}</p>
    </div>
  );
};

export default TimeConverter;

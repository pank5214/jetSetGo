import React from "react";

const TimeConverter = ({depTime}) => {
  // Split the string into date and time parts
  const [datePart, timePart] = depTime.split("T");

  // Create a new Date object using the time part
  const timeDate = new Date(`1970-01-01T${timePart}`);

  // Extract the time portion
  const extractedTime = timeDate.toTimeString().slice(0, 5);
  return (
    <div>
      <p>{extractedTime}</p>
    </div>
  );
};

export default TimeConverter;

// function extractTime(depTime) {
//     // Split the string into date and time parts
//     const [datePart, timePart] = depTime.split('T');

//     // Create a new Date object using the time part
//     const timeDate = new Date(`1970-01-01T${timePart}`);

//     // Extract the time portion
//     const extractedTime = timeDate.toTimeString().slice(0, 5);

//     return extractedTime;
//   }

//   // Example usage:
//   const depTime = "2023-03-31T06:20";
//   const extractedTime = extractTime(depTime);

//   console.log("Extracted Time:", extractedTime);

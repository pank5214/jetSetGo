import React from "react";

export const ButtonYellowComp = ({ label, extraStyle, onClick, disabled }) => {
  return (
    <div className={`${extraStyle}`}>
      <button
        className="py-2 px-5 bg-yellow-400 text-sm text-white text-center"
        onClick={onClick} 
      >
        {label}
      </button>
    </div>
  );
};

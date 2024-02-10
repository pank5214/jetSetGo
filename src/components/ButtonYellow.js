import React from "react";

const ButtonYellow = ({ label, extraStyle, onClick }) => {
  return (
    <div className={`${extraStyle}`}>
      <button
        className="py-3 px-5 bg-yellow-400 text-sm text-white text-center rounded-lg"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonYellow;

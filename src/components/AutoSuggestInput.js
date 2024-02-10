import React, { useEffect, useState } from "react";
import { AIRLINES_API } from "../constants/AppConstants";

const AutoSuggestInput = ({
  placeholder,
  suggestionsKey,
  image,
  extraStyle,
  label,
  required,
  searchValue,
  setSearchValue,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getAutoSuggestions();
    }, 2000);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const getAutoSuggestions = async () => {
    const data = await fetch(AIRLINES_API);
    const json = await data.json();
    setSuggestions(json?.data?.result);
  };

  return (
    <div className="relative">
      <div
        className={`flex border border-gray-300 px-3 py-4 rounded-lg shadow-md ${extraStyle}`}
      >
        <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
          {image}
        </div>
        <input
          className="ml-3 outline-none border-none text-sm w-full"
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          required={required}
        />
        <p className="text-sm text-gray-300">{label}</p>

        {showSuggestions && searchValue.length > 0 && (
          <div className="w-full absolute z-10 mt-9 bg-gray-100 rounded-md shadow-md p-2 -ml-3">
            <ul>
              {suggestions
                .filter((suggestion) =>
                  (suggestion?.displayData?.[suggestionsKey]?.airport?.cityName)
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="py-1 text-lg font-medium text-gray-500 hover:bg-gray-200 hover:rounded-lg hover:w-full   hover:p-2 cursor-pointer"
                    onMouseDown={() =>
                      setSearchValue(
                        suggestion?.displayData?.[suggestionsKey]?.airport
                          ?.cityName
                      )
                    }
                  >
                    {
                      suggestion?.displayData?.[suggestionsKey]?.airport
                        ?.cityName
                    }
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoSuggestInput;

import React, { useState } from 'react';

const SportybetContent: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleFilterDropdown = () => setIsFilterOpen(!isFilterOpen);
  const toggleSortDropdown = () => setIsSortOpen(!isSortOpen);

  return (
    <div className="p-5">
      <div className="">
        {/* Filter Dropdown */}
        <div className="betbuddy_sportydropdown_container">
          <button
            onClick={toggleFilterDropdown}
            className="betbuddy_sportydropdown flex justify-between items-center px-4 py-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300"
          >
            Filter
            <span className="ml-2 text-gray-600">
              {isFilterOpen ? '▲' : '▼'}
            </span>
          </button>
          {isFilterOpen && (
            <div
              className={`absolute left-0 mt-2 w-full border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden transition-all duration-300 ${isFilterOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <ul className="py-2 justify-between items-center">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_sportydropdown_item">By Time</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_sportydropdown_item">By Odds</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_sportydropdown_item">By League</li>
              </ul>
            </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="betbuddy_sportydropdown_container">
          <button
            onClick={toggleSortDropdown}
            className="betbuddy_sportydropdown flex justify-between items-center px-4 py-2 rounded-md shadow-md hover:bg-gray-300"
          >
            Sort
            <span className="ml-2 text-gray-200">
              {isSortOpen ? '▲' : '▼'}
            </span>
          </button>
          {isSortOpen && (
            <div
              className={`absolute left-0 mt-2 w-full border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden transition-all duration-300 ${isSortOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_sportydropdown_item">Time</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_sportydropdown_item">Odds</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_sportydropdown_item">By Popularity</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SportybetContent;
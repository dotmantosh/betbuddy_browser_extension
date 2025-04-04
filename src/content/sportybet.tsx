import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FilterTab, SortTab } from '../interfaces/types';
import renderFilterContent from './components/sportybet/FilterComponent';
import { FilterCriteria } from '../interfaces/IFilter';
import SportyService from '../services/sportybet.services';

const SportybetContent: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState<FilterTab>('By Time');
  const [activeSortTab, setActiveSortTab] = useState<SortTab>('Time');
  const [sortOrder, setSortOrder] = useState<'Ascending' | 'Descending'>('Ascending');

  const [sportList, setSportList] = useState([])
  const [popularEvents, setPopularEvents] = useState([])

  const toggleFilterDropdown = () => setIsFilterOpen(!isFilterOpen);
  const toggleSortDropdown = () => setIsSortOpen(!isSortOpen);

  // Yup validation schema for sort form
  const sortValidationSchema = Yup.object().shape({
    sortOrder: Yup.string().required('Sort Order is required'),
  });



  const renderSortContent = () => {
    switch (activeSortTab) {
      case 'Time':
        return (
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <label htmlFor="sortOrder" className="w-24">
                Order:
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'Ascending' | 'Descending')}
                className="border rounded p-1 flex-1 appearance-none bg-white"
              >
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
          </div>
        );
      case 'Odds':
        return (
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <label htmlFor="sortOrder" className="w-24">
                Order:
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'Ascending' | 'Descending')}
                className="border rounded p-1 flex-1 appearance-none bg-white"
              >
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
          </div>
        );
      case 'Popularity':
        return (
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <label htmlFor="sortOrder" className="w-24">
                Order:
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'Ascending' | 'Descending')}
                className="border rounded p-1 flex-1 appearance-none bg-white"
              >
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // const renderSortContent = () => {
  //   switch (activeSortTab) {
  //     case 'Time':
  //       return <div>Content sorted by time</div>;
  //     case 'Odds':
  //       return <div>Content sorted by odds</div>;
  //     case 'By Popularity':
  //       return <div>Content sorted by popularity</div>;
  //     default:
  //       return null;
  //   }
  // };

  const getSportList = async () => {
    try {
      const response = await SportyService.getSportList('');
      console.log('Sport List:', response.data);
      // setSportList(response.data.data.sportList[0].categories)
      // setPopularEvents(response.data.data.popularEvents[0].categories)
    } catch (error) {
      console.error('Error fetching sports list:', error);
    }
  }

  useEffect(() => {
    // Fetch the sports list when the component mounts
    getSportList();
  }, [])

  return (
    <div className="p-5">
      <div className="">
        {/* Filter Dropdown with Tabs */}
        <div className="betbuddy_sportydropdown_container">
          <button
            onClick={toggleFilterDropdown}
            className="betbuddy_sportydropdown flex justify-between items-center px-4 py-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 w-full"
          >
            Filter
            <span className="ml-2 text-gray-600">
              {isFilterOpen ? '▲' : '▼'}
            </span>
          </button>
          {isFilterOpen && (
            <div className="mt-2 w-full border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden">
              <ul className="py-2 my-0">
                <li
                  key="by-time"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeFilterTab === 'By Time' ? 'active' : ''}`}
                  onClick={() => setActiveFilterTab('By Time')}
                >
                  By Time
                </li>
                <li
                  key="by-odds"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeFilterTab === 'By Odds' ? 'active' : ''}`}
                  onClick={() => setActiveFilterTab('By Odds')}
                >
                  By Odds
                </li>
                <li
                  key="by-league"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeFilterTab === 'By League' ? 'active' : ''}`}
                  onClick={() => setActiveFilterTab('By League')}
                >
                  By League
                </li>
              </ul>
              <div className="betbuddy_tab_content mt-2">{renderFilterContent(activeFilterTab, sportList)}</div>
            </div>
          )}
        </div>

        {/* Sort Dropdown with Tabs */}
        <div className="betbuddy_sportydropdown_container">
          <button
            onClick={toggleSortDropdown}
            className="betbuddy_sportydropdown flex justify-between items-center px-4 py-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 w-full"
          >
            Sort
            <span className="ml-2 text-gray-600">
              {isSortOpen ? '▲' : '▼'}
            </span>
          </button>
          {isSortOpen && (
            <div className="mt-2 w-full border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden">
              <ul className="my-0">
                <li
                  key="sort-time"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeSortTab === 'Time' ? 'active' : ''}`}
                  onClick={() => setActiveSortTab('Time')}
                >
                  Time
                </li>
                <li
                  key="sort-odds"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeSortTab === 'Odds' ? 'active' : ''}`}
                  onClick={() => setActiveSortTab('Odds')}
                >
                  Odds
                </li>
                <li
                  key="sort-popularity"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeSortTab === 'Popularity' ? 'active' : ''}`}
                  onClick={() => setActiveSortTab('Popularity')}
                >
                  By Popularity
                </li>
              </ul>
              <div className="betbuddy_tab_content mt-2">{renderSortContent()}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SportybetContent;
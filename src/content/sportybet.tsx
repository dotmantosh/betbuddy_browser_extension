import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FilterTab, SortTab } from '../interfaces/types';
import SportyService from '../services/sportybet.services';
import { ISportList } from '../interfaces/ISportList';

const SportybetContent: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState<FilterTab>('By Time');
  const [activeSortTab, setActiveSortTab] = useState<SortTab>('Time');
  const [sortOrder, setSortOrder] = useState<'Ascending' | 'Descending'>('Ascending');
  const [sportList, setSportList] = useState<ISportList[]>([]);
  const [popularEvents, setPopularEvents] = useState<any[]>([]);
  const [leagueFilter, setLeagueFilter] = useState<ISportList[]>([]); // Moved from renderFilterContent

  const toggleFilterDropdown = () => setIsFilterOpen(!isFilterOpen);
  const toggleSortDropdown = () => setIsSortOpen(!isSortOpen);



  const handleLeagueFilterChange = (sport: any) => {
    const sportExist = leagueFilter.some(
      (league) => league.id === sport.id
    );
    setLeagueFilter((prev) => {
      if (sportExist) {
        return prev.filter((league) => league.id !== sport.id);
      } else {
        return [...prev, sport];
      }
    });
  };

  // Yup validation schema for filter form
  const filterValidationSchema = Yup.object().shape({
    startDate: Yup.date().required('Required'),
    endDate: Yup.date()
      .required('End Date is required')
      .min(Yup.ref('startDate'), 'End Date must be after Start Date'),
    startOdds: Yup.number().min(0, 'Start Odds must be positive'),
    endOdds: Yup.number().min(Yup.ref('startOdds'), 'End Odds must be greater than Start Odds'),
    selectedLeague: Yup.string().required('Please select a league'),
  });

  const initialValues = {
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    startOdds: '',
    endOdds: '',
    selectedLeague: '',
  };

  const renderFilterContent = (activeFilterTab: FilterTab) => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={filterValidationSchema}
        onSubmit={(values) => {
          console.log('Filter Values:', values);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            {activeFilterTab === 'By Time' && (
              <>
                <div className="flex form_group_flex">
                  <div className="mb-4 form-row-2">
                    <label htmlFor="startDate" className="block text-sm font-medium">
                      Start Date
                    </label>
                    <Field type="date" name="startDate" className="border rounded p-1 w-full" />
                    <ErrorMessage
                      name="startDate"
                      component="div"
                      className="text-red-500 text-sm betbuddy_form_errmsg"
                    />
                  </div>
                  <div className="mb-4 form-row-2">
                    <label htmlFor="endDate" className="block text-sm font-medium">
                      End Date
                    </label>
                    <Field type="date" name="endDate" className="border rounded p-1 w-full" />
                    <ErrorMessage
                      name="endDate"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div className="flex form_group_flex">
                  <div className="mb-4">
                    <label htmlFor="startTime" className="block text-sm font-medium">
                      Start Time
                    </label>
                    <Field type="time" name="startTime" className="border rounded p-1 w-full" />
                    <ErrorMessage
                      name="startTime"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-4 form-row-2">
                    <label htmlFor="endTime" className="block text-sm font-medium">
                      End Time
                    </label>
                    <Field type="time" name="endTime" className="border rounded p-1 w-full" />
                    <ErrorMessage
                      name="endTime"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
              </>
            )}
            {activeFilterTab === 'By Odds' && (
              <div className="flex form_group_flex">
                <div className="mb-4 form-row-2">
                  <label htmlFor="startOdds" className="block text-sm font-medium">
                    Start Odds
                  </label>
                  <Field
                    type="number"
                    name="startOdds"
                    className="border rounded p-1 w-full"
                    step="0.01"
                    defaultValue="1.00"
                  />
                  <ErrorMessage
                    name="startOdds"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4 form-row-2">
                  <label htmlFor="endOdds" className="block text-sm font-medium">
                    End Odds
                  </label>
                  <Field
                    type="number"
                    name="endOdds"
                    className="border rounded p-1 w-full"
                    step="0.01"
                    defaultValue="100.00"
                  />
                  <ErrorMessage
                    name="endOdds"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            )}
            {activeFilterTab === 'By League' && (
              <div className="mb-4">
                <label htmlFor="selectedLeague" className="block text-sm font-medium">
                  Select Leagues to remove
                </label>
                <div className="betbuddy-dropdown-container">
                  <button
                    type="button"
                    className="border rounded p-1 w-full text-left flex justify-between items-center"
                    onClick={() => {
                      const dropdown = document.getElementById('league-dropdown');
                      if (dropdown) {
                        dropdown.style.display =
                          dropdown.style.display === 'none' ? 'block' : 'none';
                      }
                    }}
                  >
                    Select League
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  <div
                    id="league-dropdown"
                    className="border rounded mt-1 p-2 bg-white shadow-md"
                    style={{ display: 'none', maxHeight: '200px', overflowY: 'auto' }}

                  >
                    {sportList.map((sport) => (
                      <div
                        key={sport.id}
                        className="flex items-center mb-2 betbuddy_sportitem"
                        onClick={() => { handleLeagueFilterChange(sport) }}
                      >
                        <label htmlFor={`league-${sport.id}`} className="text-sm">
                          {sport.name}
                        </label>
                        <Field
                          type="checkbox"
                          name="selectedLeague"
                          className="mr-2"
                          checked={leagueFilter.includes(sport)} // Check if sport.id is in leagueFilter
                          readOnly // Prevent direct editing of the checkbox
                        />

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 apply_btn"
            >
              Apply Filter
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  const renderSortContent = () => {
    switch (activeSortTab) {
      case 'Time':
      case 'Odds':
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

  const getSportList = async () => {
    try {
      const response = await SportyService.getSportList('');
      console.log('Sport List:', response.data);
      setSportList(response.data.data.sportList[0].categories || []);
      setPopularEvents(response.data.data.popularEvents[0].categories || []);
    } catch (error) {
      console.error('Error fetching sports list:', error);
    }
  };

  useEffect(() => {
    getSportList();
  }, []);

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
            <span className="ml-2 text-gray-600">{isFilterOpen ? '▲' : '▼'}</span>
          </button>
          {isFilterOpen && (
            <div className="mt-2 w-full border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden">
              <ul className="py-2 my-0">
                <li
                  key="by-time"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeFilterTab === 'By Time' ? 'active' : ''
                    }`}
                  onClick={() => setActiveFilterTab('By Time')}
                >
                  By Time
                </li>
                <li
                  key="by-odds"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeFilterTab === 'By Odds' ? 'active' : ''
                    }`}
                  onClick={() => setActiveFilterTab('By Odds')}
                >
                  By Odds
                </li>
                <li
                  key="by-league"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeFilterTab === 'By League' ? 'active' : ''
                    }`}
                  onClick={() => setActiveFilterTab('By League')}
                >
                  By League
                </li>
              </ul>
              <div className="betbuddy_tab_content mt-2">{renderFilterContent(activeFilterTab)}</div>
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
            <span className="ml-2 text-gray-600">{isSortOpen ? '▲' : '▼'}</span>
          </button>
          {isSortOpen && (
            <div className="mt-2 w-full border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden">
              <ul className="my-0">
                <li
                  key="sort-time"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeSortTab === 'Time' ? 'active' : ''
                    }`}
                  onClick={() => setActiveSortTab('Time')}
                >
                  Time
                </li>
                <li
                  key="sort-odds"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeSortTab === 'Odds' ? 'active' : ''
                    }`}
                  onClick={() => setActiveSortTab('Odds')}
                >
                  Odds
                </li>
                <li
                  key="sort-popularity"
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer betbuddy_tab ${activeSortTab === 'Popularity' ? 'active' : ''
                    }`}
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
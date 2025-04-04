import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FilterTab } from '../../../interfaces/types';

interface FilterFormValues {
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  startOdds?: string;
  endOdds?: string;
  selectedLeague?: string;
}

const renderFilterContent = (activeFilterTab: FilterTab, sportList: Array<any>) => {
  const [leagueFilter, setLeagueFilter] = React.useState<string[]>([]);

  // const handleLeagueFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedValue = event.target.value;
  //   console.log('Selected League:', selectedValue);
  // };

  // Yup validation schema for filter form
  const filterValidationSchema = Yup.object().shape({
    startDate: Yup.date().required('Required'),
    endDate: Yup.date()
      .required('End Date is required')
      .min(Yup.ref('startDate'), 'End Date must be after Start Date'),
    startOdds: Yup.number().min(0, 'Start Odds must be positive'),
    endOdds: Yup.number()
      .min(Yup.ref('startOdds'), 'End Odds must be greater than Start Odds'),
    selectedLeague: Yup.string().required('Please select a league'),
  });

  const initialValues: FilterFormValues = {
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    startOdds: '',
    endOdds: '',
    selectedLeague: '',
  };

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
                  <Field
                    type="date"
                    name="startDate"
                    className="border rounded p-1 w-full"
                  />
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
                  <Field
                    type="date"
                    name="endDate"
                    className="border rounded p-1 w-full"
                  />
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
                  <Field
                    type="time"
                    name="startTime"
                    className="border rounded p-1 w-full"
                  />
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
                  <Field
                    type="time"
                    name="endTime"
                    className="border rounded p-1 w-full"
                  />
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
            <>
              <div className="flex form_group_flex">

                <div className="mb-4 form-row-2">
                  <label htmlFor="startOdds" className="block text-sm font-medium">
                    Start Odds
                  </label>
                  <Field
                    type="number"
                    name="startOdds"
                    className="border rounded p-1 w-full"
                    range={{ min: 1, max: 100 }}
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
                    range={{ min: 1, max: 100 }}
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
            </>
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
                    // onClick={() => { handleLeagueFilterChange(sport) }}
                    >
                      <label htmlFor={`league-${sport.id}`} className="text-sm">
                        {sport.name}
                      </label>
                      <Field
                        type="checkbox"
                        name="selectedLeague"
                        value={sport.id}
                        className="mr-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* <ErrorMessage
                name="selectedLeague"
                component="div"
                className="text-red-500 text-sm"
              /> */}
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

export default renderFilterContent;
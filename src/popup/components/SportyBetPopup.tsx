import React from 'react';
import { IPopupProps } from '../../interfaces/IPopupProps';


const SportyBetPopup: React.FC<IPopupProps> = ({ url, tournaments }) => {

  return (
    <div>
      <h3 className='text-green'>Sportybet Tools</h3>
      <p>Current URL: {url || 'Not available'}</p>

      {tournaments?.length ? (
        <div>
          <h2>First Tournament ID: {tournaments[0].id}</h2>
          <p>Total Tournaments: {tournaments.length}</p>
        </div>
      ) : (
        <p>No tournaments data available</p>
      )}
    </div>
  );
};

export default SportyBetPopup;


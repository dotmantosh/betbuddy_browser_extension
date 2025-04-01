import React from 'react';
import { IPopupProps } from '../../interfaces/IPopupProps';


const SportyBetPopup: React.FC<IPopupProps> = ({ url }) => {
  return (
    <div>
      <h3 className='text-green'>Sportybet Tools</h3>
      <p>Current URL: {url || 'Not available'}</p>
    </div>
  );
};

export default SportyBetPopup;


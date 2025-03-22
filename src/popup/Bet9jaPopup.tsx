import React from 'react';
import { IPopupProps } from '../interfaces/IPopupProps';


const Bet9jaPopup: React.FC<IPopupProps> = ({ url }) => {
  return (
    <div>
      <h3>Bet9ja Tool</h3>
      <p>Current URL: {url || 'Not available'}</p>
    </div>
  );
};

export default Bet9jaPopup;


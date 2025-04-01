import React from 'react';
import { IPopupProps } from '../../interfaces/IPopupProps';

const BetWayPopup: React.FC<IPopupProps> = ({ url }) => {
  return (
    <div>
      <h3>Betway Tools</h3>
      <p>Current URL: {url || 'Not available'}</p>
    </div>
  );
};

export default BetWayPopup;


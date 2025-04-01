// export function betway(): void {
//   console.log('Betway content script running!');
//   document.body.style.backgroundColor = 'lightgreen';
// }

// betway();

import React from 'react';

const Betway: React.FC = () => (
  <div className="betway-overlay fixed top-0 left-0 p-4 bg-green-500 text-white">
    <h2>Betway Enhancements</h2>
    <button onClick={() => alert('betway Action!')}>Boost Odds</button>
  </div>
);

export default Betway
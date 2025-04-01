// export function bet9ja(): void {
//   console.log('Bet9ja content script running!');
//   document.body.style.backgroundColor = 'lightyellow';
// }

// bet9ja();

import React from 'react';

const Bet9ja: React.FC = () => (
  <div className="bet9ja-overlay fixed top-0 left-0 p-4 bg-green-500 text-white">
    <h2>bet9ja Enhancements</h2>
    <button onClick={() => alert('bet9ja Action!')}>Boost Odds</button>
  </div>
);

export default Bet9ja
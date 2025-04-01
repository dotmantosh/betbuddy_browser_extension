import React from 'react';
// import '../style/content.css'; // Import your CSS file here

const SportybetContent: React.FC = () => {
  const filterImage = chrome.runtime.getURL('icons8-filter.gif'); // Get the absolute URL for the image
  const sortImage = chrome.runtime.getURL('icons8-sort.gif'); // Get the absolute URL for the image

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '10px' }}>

        <span
          role="img"
          aria-label="Sort"
          className='betbuddy_icon'
          // onClick={() => alert('filete clicked!')}
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            backgroundImage: `url(${filterImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '20px',
            height: '20px',
          }}
        ></span>
        <span
          role="img"
          aria-label="Sort"
          className='betbuddy_icon'
          // onClick={() => alert('Sort clicked!')}
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            backgroundImage: `url(${sortImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '20px',
            height: '20px',
          }}
        ></span>

      </div>
    </div>
  );
};

export default SportybetContent;
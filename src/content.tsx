import React from 'react';
import { createRoot } from 'react-dom/client';
import SportybetContent from "./content/sportybet";
import BetwayContent from './content/betway';
import Bet9jaContent from './content/bet9ja';
import './style/conent.css'; // Import your CSS file here

// Map site IDs to components
const siteComponents: { [key: string]: React.FC } = {
  sportybet: SportybetContent,
  betway: BetwayContent,
  bet9ja: Bet9jaContent,
};

// Detect site from window.location
const detectSite = (url: string): string => {
  if (url.includes('sportybet.com')) return 'sportybet';
  if (url.includes('betway.com')) return 'betway';
  if (url.includes('bet9ja.com')) return 'bet9ja';
  return 'unsupported';
};

// Main App component
const ContentApp: React.FC<{ site: string }> = ({ site }) => {
  console.log('Site from content ', site)
  const Component = siteComponents[site] || (() => <div>No enhancements for this site</div>);
  console.log(siteComponents[site])
  return <Component />;
};

// Mount the React app
const mountApp = () => {
  const site = detectSite(window.location.href);

  // // Create or find the container
  // let container = document.getElementById('betbuddy-content-root');


  // container = document.createElement('div');
  // container.id = 'betbuddy-content-root'; // Fixed from your previous code

  let container;

  if (site === 'sportybet') {
    const betslipDiv = document.getElementById('j_betslip');
    if (betslipDiv) {
      betslipDiv.style.position = 'relative';
      container = document.createElement('div');
      container.id = 'betbuddy-controls';
      // Set dark gray background and white text
      // container.style.backgroundColor = '#333';
      container.style.color = 'white';
      // container.style.padding = '10px';
      // container.style.position = 'absolute';
      // container.style.top = '0';
      // container.style.left = '0';
      container.style.width = '100%';
      // container.style.height = '100px';

      container.style.zIndex = '9999';
      betslipDiv.insertBefore(container, betslipDiv.firstChild);
    } else {
      console.error('j_betslip not found');
      return;
    }
  } else {
    container = document.createElement('div');
    container.id = 'betbuddy-content-root';
    document.body.appendChild(container);
  }

  const root = createRoot(container);
  root.render(<ContentApp site={site} />);
};

// Run immediately since it’s statically loaded via manifest.json
mountApp();
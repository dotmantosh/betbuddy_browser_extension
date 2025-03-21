import React from 'react';
import { createRoot } from 'react-dom/client';
import SportyBetPopup from './SportyBetPopup';
import Bet9jaPopup from './Bet9jaPopup';
import BetwayPopup from './BetWayPopup';
import UnsupportedPopup from './UnsupportedPopup';
import { detectSite } from '../config/siteDetector';

// Define props type for popup components (optional, adjust as needed)
interface PopupProps {
  url?: string;
}

// Type for the site components map
type SiteComponentsType = {
  [key: string]: React.ComponentType<PopupProps>;
};

const siteComponents: SiteComponentsType = {
  'sportybet': SportyBetPopup,
  'betway': BetwayPopup,
  'bet9ja': Bet9jaPopup
};

function Popup({ url }: { url: string }) {
  const site = detectSite(url) || 'unsupported';
  const SiteComponent = siteComponents[site] || UnsupportedPopup;

  return (
    <div>
      {/* Pass url as a prop if components need it */}
      <SiteComponent url={url} />
    </div>
  );
}

function initPopup() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = tabs[0]?.url || '';
    root.render(<Popup url={currentUrl} />);
  });
}

initPopup();
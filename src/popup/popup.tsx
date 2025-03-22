import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import SportyBetPopup from './SportyBetPopup';
import Bet9jaPopup from './Bet9jaPopup';
import BetwayPopup from './BetWayPopup';
import UnsupportedPopup from './UnsupportedPopup';
import { detectSite } from '../config/siteDetector';
import '../assets/tailwind.css'

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
  const [injectedScript, setInjectedScript] = useState<string | null>('Loading...');

  useEffect(() => {
    console.log('[Popup] Sending message for URL:', url);
    chrome.runtime.sendMessage({ action: 'getInjectedScript', url }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('[Popup] Message error:', chrome.runtime.lastError.message);
        setInjectedScript('Error: Background not responding');
      } else {
        console.log('[Popup] Received response:', response);
        setInjectedScript(response?.script || 'None');
      }
    });
  }, [url]);
  return (
    <div>
      {/* Pass url as a prop if components need it */}
      <SiteComponent url={url} />
      <p>Injected Script: {injectedScript}</p>
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
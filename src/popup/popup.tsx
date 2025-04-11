import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import SportyBetPopup from './components/SportyBetPopup';
import Bet9jaPopup from './components/Bet9jaPopup';
import BetwayPopup from './components/BetWayPopup';
import UnsupportedPopup from './components/UnsupportedPopup';
import { detectSite } from '../config/siteDetector';
import '../assets/tailwind.css'

// Define props type for popup components (optional, adjust as needed)
interface PopupProps {
  url?: string;
  tournaments?: any;
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
  const [apiData, setApiData] = useState<any>(null);
  // useEffect(() => {
  //   console.log('[Popup] Sending message for URL:', url);
  //   chrome.runtime.sendMessage({ action: 'getInjectedScript', url }, (response) => {
  //     if (chrome.runtime.lastError) {
  //       console.error('[Popup] Message error:', chrome.runtime.lastError.message);
  //       setInjectedScript('Error: Background not responding');
  //     } else {
  //       console.log('[Popup] Received response:', response);
  //       setInjectedScript(response?.script || 'None');
  //     }
  //   });
  // }, [url]);

  // Add this useEffect for message listening
  useEffect(() => {
    // Load existing data on mount
    chrome.storage.local.get('sportyBetTournaments', (result) => {
      console.log('tournaments gotten from localstorage :', result.sportyBetTournaments)
      if (result.sportyBetTournaments) {
        setApiData(result.sportyBetTournaments);
      }
    });

    // Listen for real-time updates
    const messageHandler = (message: any) => {
      if (message.type === 'API_RESPONSE') {
        console.log('tournaments gotten from chromeruntime :', message)
        setApiData((prev: any) => {
          const existingIds = new Set(prev?.map((item: any) => item.id) || []);
          const newItems = message.data.filter((item: any) =>
            !existingIds.has(item.id)
          );
          return [...(prev || []), ...newItems];
        });
      }
    };

    chrome.runtime.onMessage.addListener(messageHandler);
    return () => chrome.runtime.onMessage.removeListener(messageHandler);
  }, []);
  return (
    <div>
      {/* Pass url as a prop if components need it */}
      <img src="buddy.png" alt="" />
      <SiteComponent url={url} tournaments={apiData} />
      <p className={"text-green-500"}>Injected Script: {injectedScript}</p>
    </div>
  );
}

export default Popup
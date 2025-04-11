import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import SportybetContent from './content/sportybet';
import BetwayContent from './content/betway';
import Bet9jaContent from './content/bet9ja';
import './style/conent.css';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions
interface ApiMessage {
  type: string;
  url: string;
  data: unknown;
  method: string;
}

type SiteKey = 'sportybet' | 'betway' | 'bet9ja' | 'unsupported';

declare global {
  interface Window {
    axios?: {
      request: <T>(config: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
    };
  }
}

// Map site IDs to components
const siteComponents: Record<SiteKey, React.FC<{ tournaments: any[] }>> = {
  sportybet: SportybetContent,
  betway: BetwayContent,
  bet9ja: Bet9jaContent,
  unsupported: () => <div>No enhancements for this site</div>,
};

const detectSite = (url: string): SiteKey => {
  if (url.includes('sportybet.com')) return 'sportybet';
  if (url.includes('betway.com')) return 'betway';
  if (url.includes('bet9ja.com')) return 'bet9ja';
  return 'unsupported';
};

const TARGET_API_ENDPOINTS = [
  "/factsCenter/pcUpcomingEvents",
  "/factsCenter/pcEvents",
];

const ContentApp: React.FC<{ site: SiteKey }> = ({ site }) => {
  const [tournaments, setTournaments] = useState<any[]>([]);

  const setupMessageRelay = () => {
    window.addEventListener('message', (event) => {
      // Security check
      if (event.source !== window) return;

      if (event.data.type === 'BETBUDDY_API_DATA') {
        console.log("event gotten from interceptor :", event);

        const newPayload = event.data.payload.data;

        if (event.data.payload.url === "/factsCenter/pcEvents") {
          console.log('new Payload for pcEvents:', newPayload);

          // Update state with new data
          setTournaments((prev) => {
            const isNewData = !prev.some((existing: any) =>
              JSON.stringify(existing) === JSON.stringify(newPayload)
            );

            if (isNewData) {
              return [...prev, ...newPayload];
            }
            return prev;
          });
        }

        if (event.data.payload.url === "/factsCenter/pcUpcomingEvents") {
          console.log('new Payload for pcUpcomingEvents:', newPayload);

          // Update state with new data
          setTournaments((prev) => {
            const isNewData = !prev.some((existing: any) =>
              JSON.stringify(existing) === JSON.stringify(newPayload)
            );

            if (isNewData) {
              return [...prev, ...newPayload];
            }
            return prev;
          });
        }
      }
    });
  };

  // Initialize the message relay BEFORE injecting scripts
  setupMessageRelay();

  const injectScript = (file: string) => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(file);
    script.onload = () => script.remove();
    (document.head || document.documentElement).appendChild(script);
  };

  // Inject the interceptor script
  injectScript('interceptor.js');

  const Component = siteComponents[site];
  return <Component tournaments={tournaments} />;
};

// Mounting logic
const mountApp = (): void => {
  const site = detectSite(window.location.href);

  let container = document.getElementById('betbuddy-content-root');
  if (!container) {
    container = document.createElement('div');
    container.id = 'betbuddy-content-root';
    document.body.appendChild(container);
  }

  const root = createRoot(container);
  root.render(<ContentApp site={site} />);
};

mountApp();
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import SportybetContent from './content/sportybet';
import BetwayContent from './content/betway';
import Bet9jaContent from './content/bet9ja';
import './style/conent.css';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IEvent, ITournament } from './interfaces/IEvent';


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
const siteComponents: Record<SiteKey, React.FC<{ tournaments: ITournament[]; events: IEvent[] }>> = {
  sportybet: SportybetContent,
  betway: BetwayContent,
  bet9ja: Bet9jaContent,
  unsupported: () => <></>,
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
  const [tournaments, setTournaments] = useState<ITournament[]>([]);
  const [events, setEvents] = useState<IEvent[]>([]);

  const setupMessageRelay = () => {
    window.addEventListener('message', (event) => {
      // Security check
      if (event.source !== window) return;

      if (event.data.type === 'BETBUDDY_API_DATA') {
        console.log("Event received from interceptor:", event);

        const newPayload: ITournament[] = event.data.payload.data;
        console.log('New Payload from Window:', newPayload);

        // Flatten the events from the new payload
        const newEvents: IEvent[] = newPayload.flatMap((tournament) => tournament.events as IEvent[]);

        // Update the events state with unique events
        setEvents((prevEvents) => {
          const existingEventIds = new Set(prevEvents.map((event) => event.eventId));
          const uniqueNewEvents = newEvents.filter(
            (event: IEvent) => !existingEventIds.has(event.eventId)
          );

          return [...prevEvents, ...uniqueNewEvents];
        });
      }
    });
  };

  // Initialize the message relay BEFORE injecting scripts
  setupMessageRelay()

  const injectScript = (file: string) => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(file);
    script.onload = () => script.remove();
    (document.head || document.documentElement).appendChild(script);
  };

  // Inject the interceptor script
  injectScript('interceptor.js');

  const Component = siteComponents[site];
  return <Component tournaments={tournaments} events={events} />;
};

// Mounting logic
const mountApp = (): void => {
  const site = detectSite(window.location.href);

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

mountApp();
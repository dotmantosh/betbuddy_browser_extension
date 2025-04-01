import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './popup'
import '../assets/tailwind.css'

function init() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = tabs[0]?.url || '';
    root.render(<Popup url={currentUrl} />);
  });
}

init();
import React from 'react'
import { createRoot } from "react-dom/client";

function Popup() {
  return (
    <div>popup</div>
  )
}

const container = document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container)
root.render(<Popup />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div style={{ padding: 20 }}>
    <h1>⚽ Focitipp rendszer indul!</h1>
    <p>A teljes rendszer működik, most már deploy-olható Vercel-re.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

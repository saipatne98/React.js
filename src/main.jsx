import React from 'react';
import ReactDOM from 'react-dom/client';
 import { App } from './App';
import Profile  from './components/Profile.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Profile/>
  </React.StrictMode>
);


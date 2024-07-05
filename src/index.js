import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import CursorProvider from './context/CursorContext'
import {PicturesProvider} from './context/PictureContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PicturesProvider>
  {/* <CursorProvider> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  {/* </CursorProvider> */}
  </PicturesProvider>
);

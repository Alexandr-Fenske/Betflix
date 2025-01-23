import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './src/app/store.js';
import App from './src/components/App.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
);

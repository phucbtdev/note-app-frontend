import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Container } from '@mui/material';
import router from './router';

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import './index.css';

import './firebase/configFirebase';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: '150px' }} >
      <RouterProvider router={router}></RouterProvider>
    </Container>
  </StrictMode>,
) 

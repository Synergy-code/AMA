import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LocomotiveScrollProvider from './contexts/LocomotiveScrollProvider/LocomotiveScrollProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocomotiveScrollProvider>
      <App />
    </LocomotiveScrollProvider>
  </StrictMode>,
)

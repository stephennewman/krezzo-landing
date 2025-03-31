import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivacyPolicy />
  </StrictMode>,
) 
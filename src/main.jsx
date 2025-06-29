import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DocsProvider from './context/DocsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DocsProvider>
      <App />
    </DocsProvider>
  </StrictMode>,
)

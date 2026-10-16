import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KartyaProvider } from './contexts/KartyaContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KartyaProvider>
      <App />
    </KartyaProvider>
    
  </StrictMode>,
)

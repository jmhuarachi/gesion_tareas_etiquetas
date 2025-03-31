import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TareasProvider } from './context/TareasContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TareasProvider>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </TareasProvider>
    
  </StrictMode>,
)

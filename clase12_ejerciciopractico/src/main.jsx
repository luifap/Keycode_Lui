import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lui from './pages/Lui'

import "./styles/global.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lui />
  </StrictMode>
)

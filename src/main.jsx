import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../src/assets/libs/jsvectormap/css/jsvectormap.min.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/icons.min.css'
import '../src/assets/css/app.min.css'
import '../src/assets/images/favicon.ico'
//Javascript imports
import '../src/assets/libs/bootstrap/js/bootstrap.bundle.min.js'
import '../src/assets/libs/simplebar/simplebar.min.js'
import '../src/assets/libs/apexcharts/apexcharts.min.js'
// import '../src/assets/data/stock-prices.js'
import '../src/assets/libs/jsvectormap/js/jsvectormap.min.js'
import '../src/assets/libs/jsvectormap/maps/world.js'
// import '../src/assets/js/pages/index.init.js'
import '../src/assets/js/app.js'




createRoot(document.getElementById('root')).render(


  <StrictMode>
    <App />
  </StrictMode>,
)

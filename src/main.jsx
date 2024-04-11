import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <BrowserRouter basename='/LearnLingo/'>
      {/* <Provider store={store}> */}
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      {/* </Provider> */}
    </BrowserRouter>

   </React.StrictMode>,
)

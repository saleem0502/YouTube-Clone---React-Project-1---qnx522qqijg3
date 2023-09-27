import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import reducer,{initialState} from "./utils/reducer";

import { BrowserRouter } from 'react-router-dom';

import { StateProvider } from "./utils/StateProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider initaialState={initialState} reducer={reducer}>
    <BrowserRouter>
    <App/>
  </BrowserRouter>
  </StateProvider>
)

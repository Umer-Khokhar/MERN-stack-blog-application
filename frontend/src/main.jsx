import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BlogContext, ThemeProvider} from "./components";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
  <BlogContext>
    <App />
  </BlogContext>
    </ThemeProvider>
  </React.StrictMode>
)
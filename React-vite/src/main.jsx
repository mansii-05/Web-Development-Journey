import { StrictMode } from 'react' //react 2 baar chalta h, ek baar react-dom aur ek baar react khud, isliye humne react ko import kiya hai

import { createRoot } from 'react-dom/client' //destructuring kye hain react-dom ke client ke createroot function ko

import './index.css' //css file
import App from './App.jsx' //we can use default name

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)

// createRoot(document.getElementById('root')).render(App()) //reload krne pe chalta h bcoz js runs only once

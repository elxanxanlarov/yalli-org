import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContextYalli from './Context/YalliContext.jsx';

createRoot(document.getElementById('root')).render(
  <ContextYalli>
    <App />
  </ContextYalli>
)

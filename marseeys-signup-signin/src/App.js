import './App.css';
import ContainerWelcome from './components/ContainerWelcome';

// importing login components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
        {/* <ContainerWelcome/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
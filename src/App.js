import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navigation />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="*" element={<Home />} />
      </Routes>
      </BrowserRouter>
        </div>
  );
}

export default App;

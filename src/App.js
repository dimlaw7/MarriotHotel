import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import Booking from "./pages/Booking";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MarriotHotel" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

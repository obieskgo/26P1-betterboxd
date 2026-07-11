
import './css/App.css';
import Home from "./pages/Home";
import Favorite from "./pages/Favs";
import {Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorite />}/>
      </Routes>
    </main>
  </div>
  );
}

export default App;
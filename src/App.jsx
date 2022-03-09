import "./App.css";
import Home from "../components/Home";
import EditCard from "../components/EditCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/edit/:id" element={<EditCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

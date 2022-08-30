import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import GoalPage from "./pages/GoalPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/goal" element={<GoalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

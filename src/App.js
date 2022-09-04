import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import GoalPage from "./pages/GoalPage";
import GoalsPage from "./pages/GoalsPage";

import 'react-big-calendar/lib/css/react-big-calendar.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/goals/:id" element={<GoalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

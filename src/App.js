import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import GoalPage from "./pages/GoalPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/goal" element={<GoalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

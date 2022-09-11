import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import GoalPage from "./pages/GoalPage";
import GoalsPage from "./pages/GoalsPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "react-big-calendar/lib/css/react-big-calendar.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/goals">GoalPro</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/goals">Home</Nav.Link>
            <Nav.Link href="/auth">Auth</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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

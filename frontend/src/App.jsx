import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from './utils/Theme.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from './Component/NavBar.jsx';
import Dashboard from "./pages/DashBoard";
import Workouts from "./pages/WorkOut.jsx";
import Contect from "./pages/Contect.jsx";
import Blogs from "./pages/Blogs.jsx";
import Clubs from "./pages/Clubs.jsx";
import Challanges from "./pages/Challanges.jsx";
import Tutorials from "./pages/Tutorials.jsx";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/contact" exact element={<Contect />} />
              <Route path="/blogs" exact element={<Blogs />} />
              <Route path="/clubs" exact element={<Clubs />} />
              <Route path="/challanges" exact element={<Challanges />} />
              <Route path="/tutorials" exact element={<Tutorials />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
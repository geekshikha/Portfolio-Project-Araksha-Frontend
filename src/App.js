import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import { Homepage, Login, SignUp } from "./pages";
import DevicePage from "./pages/DevicePage";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <Container>
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<DevicePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

/*  <Route path="/" element={<Homepage />} /> */

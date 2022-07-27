import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import { Homepage, Login, SignUp } from "./pages";
import CategoryPage from "./pages/CategoryPage";
import DevicePage from "./pages/DevicePage";
import DeviceDetailsPage from "./pages/DeviceDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShippingAddress from "./components/ShippingAddress/ShippingAddress";
import Payment from "./components/Payment/Payment";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import TrackingPage from "./pages/TrackingPage";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import OrderDetails from "./pages/OrderDetails";
import AboutUsPage from "./pages/AboutUsPage";

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
        <Route path="/aboutus" element={<AboutUsPage />} />

        <Route path="/products" element={<CategoryPage />} />
        <Route path="/products/:id" element={<DevicePage />} />
        <Route path="/devices/:id" element={<DeviceDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shipping" element={<ShippingAddress />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrderPage />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/track" element={<TrackingPage />} />

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

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, useNavigate } from "react-router-dom";
import Routing from "./components/Routing";
import { submitAPI } from "./api";
import { getBookingsFromStorage, saveBookingsToStorage } from './utils/storage';
import ScrollToTop from './components/ScrollToTop';


function AppWrapper() {
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState(() => getBookingsFromStorage());

  // When updating bookings:
  const updateBookingData = (newBooking) => {
  const updatedData = [...bookingData, newBooking];
  setBookingData(updatedData);
  saveBookingsToStorage(updatedData);
  };


  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      const updatedData = [...bookingData, formData];
      setBookingData(updatedData);
      localStorage.setItem("bookingData", JSON.stringify(updatedData)); // ✅ Save to localStorage
      navigate("/confirmed");
    } else {
      alert("Reservation failed.");
    }
  };

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Routing submitForm={submitForm} bookingData={bookingData} /> {/* ✅ Step 4: pass data */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;

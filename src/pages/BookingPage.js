import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from "../api";
import { submitAPI } from "../api";
import '../BookingPage.css';

function BookingPage({ submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  // Filter times between 17:00 and 20:00 inclusive
  const filterTimes = (times) => {
    return times.filter(t => {
      const [h, m] = t.split(':').map(Number);
      const totalMins = h * 60 + m;
      return totalMins >= 10 * 60 && totalMins <= 20 * 60;
    });
  };

  const initializeTimes = () => {
    const today = new Date().toISOString().split("T")[0];
    let times = fetchAPI(today);
    times = filterTimes(times);
    setAvailableTimes(times);
    if (times.length > 0) setTime(times[0]);
    setDate(today);
  };

  const updateTimes = (selectedDate) => {
    let times = fetchAPI(selectedDate);
    times = filterTimes(times);
    setAvailableTimes(times);
    if (times.length > 0) setTime(times[0]);
    else setTime("");
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    if (date) {
      updateTimes(date);
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion, fullName, email, phone };
    submitForm(formData);
  };

  return (
    <BookingForm
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      availableTimes={availableTimes}
      fullName={fullName}
      setFullName={setFullName}
      email={email}
      setEmail={setEmail}
      phone={phone}
      setPhone={setPhone}
      specialRequests={specialRequests}
      setSpecialRequests={setSpecialRequests}
      onSubmit={handleSubmit}
    />
  );
}

export default BookingPage;

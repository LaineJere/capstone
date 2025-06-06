import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import LandingSection from '../components/LandingSection';
import ItemsSection from '../components/ItemsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import { initializeTimes, timesReducer } from '../utils/timeUtils';
import { submitAPI } from "../api";

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());
  const navigate = useNavigate();

  function updateTimes(date) {
    dispatch({ type: "UPDATE_TIMES", date });
  }

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    } else {
      alert("Failed to submit reservation.");
    }
  };

  return (
    <main>
      <LandingSection />
      <ItemsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
}

export default Main;

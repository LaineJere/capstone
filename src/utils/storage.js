// src/utils/storage.js

export const getBookingsFromStorage = () => {
  const storedData = localStorage.getItem("bookingData");
  return storedData ? JSON.parse(storedData) : [];
};

export const saveBookingsToStorage = (data) => {
  localStorage.setItem("bookingData", JSON.stringify(data));
};

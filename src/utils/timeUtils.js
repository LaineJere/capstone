import { fetchAPI } from '../api'; // Adjust path if needed

export function initializeTimes() {
  const today = new Date().toISOString().split("T")[0];
  return fetchAPI(today); // This must call fetchAPI
}

export function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date); // Also must call fetchAPI
    default:
      return state;
  }
}
import { initializeTimes, timesReducer } from './timeUtils';
import { fetchAPI } from '../api';

// Mock fetchAPI
jest.mock('../api', () => ({
  fetchAPI: jest.fn(),
}));

test("initializeTimes returns correct initial times from fetchAPI", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();
  expect(fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(mockTimes);
});

test("timesReducer returns updated times on UPDATE_TIMES", () => {
  const mockTimes = ["17:30", "18:30"];
  fetchAPI.mockReturnValue(mockTimes);

  const initialState = [];
  const action = { type: "UPDATE_TIMES", date: "2025-06-04" };
  const newState = timesReducer(initialState, action);

  expect(fetchAPI).toHaveBeenCalledWith("2025-06-04");
  expect(newState).toEqual(mockTimes);
});

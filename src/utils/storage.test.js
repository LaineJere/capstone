// src/utils/storage.test.js
import { getBookingsFromStorage, saveBookingsToStorage } from './storage';

describe('storage utilities', () => {
  beforeEach(() => {
    // Mock localStorage methods
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    jest.spyOn(window.localStorage.__proto__, 'getItem');

    localStorage.setItem.mockClear();
    localStorage.getItem.mockClear();
  });

  test('saveBookingsToStorage saves data to localStorage', () => {
    const data = [{ date: '2025-06-05', guests: 2 }];
    saveBookingsToStorage(data);
    expect(localStorage.setItem).toHaveBeenCalledWith('bookingData', JSON.stringify(data));
  });

  test('getBookingsFromStorage returns parsed data from localStorage', () => {
    const data = [{ date: '2025-06-05', guests: 2 }];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(data));
    const result = getBookingsFromStorage();
    expect(localStorage.getItem).toHaveBeenCalledWith('bookingData');
    expect(result).toEqual(data);
  });

  test('getBookingsFromStorage returns empty array if no data', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    const result = getBookingsFromStorage();
    expect(result).toEqual([]);
  });
});

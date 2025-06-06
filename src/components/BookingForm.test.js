import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { validateEmail, validatePhone } from '../utils/validation';
import useState from 'react';

// ✅ React must be in scope before using JSX inside the mock
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  NavLink: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(),
}));

test("Submit button is enabled and labeled correctly", () => {
  render(
    <BookingForm
      date="2025-07-01"
      setDate={() => {}}
      time="18:00"
      setTime={() => {}}
      guests={2}
      setGuests={() => {}}
      occasion="Birthday"
      setOccasion={() => {}}
      availableTimes={["18:00", "19:00"]}
      fullName="John Doe"
      setFullName={() => {}}
      email="john@example.com"
      setEmail={() => {}}
      phone="+1234567890"
      setPhone={() => {}}
      onSubmit={jest.fn()}
    />
  );

  const submitBtn = screen.getByDisplayValue(/book a table/i);
  expect(submitBtn).toBeInTheDocument();
  expect(submitBtn).not.toBeDisabled(); // ✅ Now should pass
});

function createMockProps(overrides = {}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+1234567890");

  return {
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    availableTimes: ["17:00", "18:00"],
    onSubmit: jest.fn((e) => e.preventDefault()),
    ...overrides,
  };
}

test('renders the "Choose date" label', () => {
  render(
    <BookingForm
      date="2025-07-01"
      setDate={() => {}}
      time="18:00"
      setTime={() => {}}
      guests={2}
      setGuests={() => {}}
      occasion="Birthday"
      setOccasion={() => {}}
      availableTimes={["18:00", "19:00"]}
      fullName="John Doe"
      setFullName={() => {}}
      email="john@example.com"
      setEmail={() => {}}
      phone="+1234567890"
      setPhone={() => {}}
      onSubmit={jest.fn()}
    />
  );

  const labelElement = screen.getByText("Choose date*");
  expect(labelElement).toBeInTheDocument();
});

test('date input has required attribute', () => {
  render(<BookingForm date />); // pass necessary props or mock them
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeRequired();
});

test('guests input has min=1 and max=10', () => {
  render(<BookingForm guests />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

// Similarly for email, phone, etc.

test('validateEmail returns true for valid email', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('validateEmail returns false for invalid email', () => {
  expect(validateEmail('invalid-email')).toBe(false);
});

test('validatePhone returns true for valid phone number', () => {
  expect(validatePhone('+1234567890')).toBe(true);
});

test('validatePhone returns false for invalid phone number', () => {
  expect(validatePhone('123abc')).toBe(false);
});
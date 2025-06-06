import '../ConfirmedBookingPage.css';


function ConfirmedBookingPage({ bookingData }) {
  const latest = bookingData[bookingData.length - 1];

  return (
    <section className="confirmation-page">
      <div className="overlay-box">
        <div className="content-wrapper">
          <h2>Grazie!</h2>
          <h2>Your Table is Reserved!</h2>
          {latest && (
            <ul>
              <li><strong>Date:</strong> {latest.date}</li>
              <li><strong>Time:</strong> {latest.time}</li>
              <li><strong>Guests:</strong> {latest.guests}</li>
              <li><strong>Occasion:</strong> {latest.occasion}</li>
              <li><strong>Special Requests:</strong> {latest.specialRequests || "None"}</li>
            </ul>
          )}
          <p>You'll receive a confirmation by email shortly.</p>
          <p>Feel free to reach out if you have any questions!</p>
          <h2>Benvenuti!</h2>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBookingPage;

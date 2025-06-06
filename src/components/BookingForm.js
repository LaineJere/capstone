import React, { useState, useEffect } from "react";

function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  specialRequests,
  setSpecialRequests,
  onSubmit,
}) {

  const [formValid, setFormValid] = useState(false);
  const isDateValid = date && new Date(date) >= new Date(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    // Check form validity every time any of these fields change
    const valid =
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== "" &&
      fullName !== "" &&
      email !== "" &&
      phone !== ""
    setFormValid(valid);
  }, [date, time, guests, occasion, fullName, email, phone]);

  return (
    <section className="bookingform">
      <header>
        <div className="title-block">
          <h1>Little Lemon</h1>
          <h2>Florença</h2>
        </div>
        <div>
          <div className="open-hours">
            <p><b>Horário de funcionamento:</b></p>
            <p><b>Mo - Thu 10:00 - 21:00</b></p>
            <p><b>Fri - Sun 10:00 - 24:00</b></p>
          </div>
          <div className="address">
            <p><b>Endereço:</b></p>
            <p><b>Florence Str 17</b></p>
            <p><b>Florence, Italy</b></p>
          </div>
        </div>
      </header>
      <form
        onSubmit={onSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <fieldset>
          <legend>Detalhes da Reserva</legend>

          <label htmlFor="guests">Número de convidados*</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            max="10"
            required
          />

          <label htmlFor="occasion">Ocasião</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Aniversário</option>
            <option>Casamento</option>
          </select>

          <label htmlFor="res-date">Escolha a data*</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={new Date().toISOString().split("T")[0]}
          />

          <label htmlFor="res-time">Escolha o Horario*</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {(availableTimes || []).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <legend>Informações para contato</legend>

          <label htmlFor="full-name">Nome Completo*</label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nome Completo"
            required
            minLength={2}
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
            required
          />

          <label htmlFor="phone">Numero de telefone*</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1234567890"
            pattern="^\+?\d{7,15}$"
            title="Phone number should be 7 to 15 digits, optionally starting with +"
            required
          />
        </fieldset>

        <fieldset>
          <legend>Solicitações Adicionais</legend>

          <label htmlFor="special-requests">Pedidos Especiais</label>
          <textarea
            id="special-requests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Algum pedido especial?"
            rows="3"
          ></textarea>
        </fieldset>

        <input type="submit" class="button" value="Reserve uma mesa" disabled={!isDateValid} aria-label="On Click" />
      </form>
    </section>
  )
};

export default BookingForm;

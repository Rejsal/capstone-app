import { useState } from "react";
import { fetchAPI, submitAPI } from "../helper/Api";
import Validation from "./common/Validation";

export const updateTimes = async (date) => {
  try {
    const data = await fetchAPI(date);
    return data;
  } catch (e) {
    return [];
  }
};

export const initializeTimes = async (date) => {
  return await updateTimes(date);
};

const ReserveForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfDiners, setNumberOfDiners] = useState("1");
  const [occasion, setOccasion] = useState("");
  const [type, setType] = useState("Indoor");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiry, setExpiry] = useState("");
  const [bookingSlots, setBookingSlots] = useState([]);
  const [error, setError] = useState(null);

  const submitBooking = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !date ||
      !time ||
      !cardNumber ||
      !cvv ||
      !expiry
    ) {
      setError("Fields can't be blank");
      return;
    }
    if (phone.length !== 10) {
      setError("Invalid contact number");
      return;
    }
    if (cardNumber.length !== 16) {
      setError("Invalid card number");
      return;
    }
    if (cvv.length !== 3) {
      setError("Invalid CVV");
      return;
    }
    setError(null);
    const response = await submitAPI({
      firstName,
      lastName,
      phone,
      date,
      time,
      numberOfDiners,
      occasion,
      type,
      cardNumber,
      cvv,
      expiry,
    });
    if (response) {
      alert("Booking success");
    }
  };

  console.log("entered" + error);
  return (
    <div>
      {error ? <Validation error={error} /> : null}
      <form onSubmit={submitBooking}>
        <div className="reserve-form-section">
          <div>
            <div className="reservation-date">
              <div className="date-view">
                <label htmlFor="date">Date</label>
                <input
                  value={date}
                  id="date"
                  type="date"
                  placeholder="Date"
                  required
                  onChange={async (value) => {
                    setDate(value.target.value);
                    const data = await initializeTimes(value.target.value);
                    setBookingSlots([...data]);
                  }}
                />
              </div>
              {bookingSlots.length > 0 ? (
                <div className="date-view">
                  <label htmlFor="time">Time</label>
                  <select
                    value={time}
                    id="time"
                    name="time"
                    onChange={(value) => {
                      setTime(value.target.value);
                    }}
                  >
                    {bookingSlots.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}
            </div>
            <div>
              <label htmlFor="number-of-diner">Number of Diners</label>
              <input
                value={numberOfDiners}
                id="number-of-diner"
                type="number"
                placeholder="Number of Diners"
                required
                onChange={(value) => {
                  setNumberOfDiners(value.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                value={occasion}
                id="occasion"
                name="occasion"
                onChange={(value) => {
                  setOccasion(value.target.value);
                }}
              >
                <option value="birthday">Birthday</option>
                <option value="wedding">Wedding</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="reservation-radio">
              <input
                type="radio"
                id="indoor"
                name="indoor"
                value="Indoor"
                checked={type === "Indoor"}
                onChange={(value) => {
                  setType(value.target.value);
                }}
              />
              <label className="reservation-radio-label" htmlFor="indoor">
                Indoor
              </label>
              <input
                type="radio"
                id="outdoor"
                name="outdoor"
                value="Outdoor"
                checked={type === "Outdoor"}
                onChange={(value) => {
                  setType(value.target.value);
                }}
              />
              <label className="reservation-radio-label" htmlFor="outdoor">
                Outdoor
              </label>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="first-name">First Name</label>
              <input
                value={firstName}
                id="first-name"
                type="text"
                placeholder="First Name"
                required
                onChange={(value) => {
                  setFirstName(value.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label>
              <input
                value={lastName}
                id="last-name"
                type="text"
                placeholder="Last Name"
                required
                onChange={(value) => {
                  setLastName(value.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="contact-number">Contact Number</label>
              <input
                value={phone}
                id="contact-number"
                type="tel"
                placeholder="Contact Number"
                required
                onChange={(value) => {
                  setPhone(value.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <h2 className="reservation-payment">Payment</h2>
        <div className="reserve-form-section">
          <div>
            <div>
              <label
                className="reservation-card-number-label"
                htmlFor="card-number"
              >
                Card Number
              </label>
              <input
                value={cardNumber}
                id="card-number"
                type="number"
                placeholder="0000 0000 0000 0000"
                maxLength={16}
                required
                onChange={(value) => {
                  setCardNumber(value.target.value);
                }}
              />
            </div>
            <div className="reservation-date">
              <div className="card-cvv-view">
                <label htmlFor="CVV">CVV</label>
                <input
                  value={cvv}
                  id="CVV"
                  type="number"
                  placeholder="CVV"
                  maxLength={3}
                  required
                  onChange={(value) => {
                    setCVV(value.target.value);
                  }}
                />
              </div>
              <div className="card-expiry-view">
                <label htmlFor="expiry-date">Expiry Date</label>
                <input
                  value={expiry}
                  id="expiry-date"
                  type="text"
                  placeholder="MM/YYYY"
                  maxLength={4}
                  required
                  onChange={(value) => {
                    setExpiry(value.target.value);
                  }}
                />
              </div>
            </div>
            <button className="reserve-button">Reserve</button>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default ReserveForm;

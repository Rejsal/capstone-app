import { useState } from "react";

const ReserveForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfDiners, setNumberOfDiners] = useState("");
  const [occasion, setOccasion] = useState("");
  const [type, setType] = useState("Indoor");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiry, setExpiry] = useState("");

  return (
    <form className="reserve-form">
      <h1>Book your table</h1>
      <div className="reserve-form-section">
        <div>
          <div className="reservation-date">
            <div className="date-view">
              <label for="date">Date</label>
              <input
                value={date}
                id="date"
                type="date"
                placeholder="Date"
                required
                onChange={(value) => {
                  setDate(value.target.value);
                }}
              />
            </div>
            <div className="date-view">
              <label for="time">Time</label>
              <input
                value={time}
                id="time"
                type="time"
                placeholder="Time"
                required
                onChange={(value) => {
                  setTime(value.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <label for="number-of-diner">Number of Diners</label>
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
            <label for="occasion">Occasion</label>
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
            <label className="reservation-radio-label" for="indoor">
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
            <label className="reservation-radio-label" for="outdoor">
              Outdoor
            </label>
          </div>
        </div>
        <div>
          <div>
            <label for="first-name">First Name</label>
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
            <label for="last-name">Last Name</label>
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
            <label for="contact-number">Contact Number</label>
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
            <label className="reservation-card-number-label" for="card-number">
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
              <label for="CVV">CVV</label>
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
              <label for="expiry-date">Expiry Date</label>
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
          <button onClick={() => {}} className="reserve-button">
            Reserve
          </button>
        </div>
        <div></div>
      </div>
    </form>
  );
};

export default ReserveForm;

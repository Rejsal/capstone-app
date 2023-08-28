import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "./components/Reservation";
import ReserveForm, {
  initializeTimes,
  updateTimes,
} from "./components/ReserveForm";

describe("Reservation", () => {
  test("renders heading text", () => {
    render(<Reservation />);
    const heading = screen.getByText("Book your table");
    expect(heading).toBeInTheDocument();
  });
});

describe("BookingForm component", () => {
  it("renders the ReserveForm components", () => {
    render(<ReserveForm />);
    const button = screen.getByText("Reserve");
    expect(button).toBeInTheDocument();
    const firstName = screen.getByText("First Name");
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByText("Last Name");
    expect(lastName).toBeInTheDocument();
    const phoneNumber = screen.getByText("Contact Number");
    expect(phoneNumber).toBeInTheDocument();
    const date = screen.getByText("Date");
    expect(date).toBeInTheDocument();
  });
});

describe("JavaScript validation tests", () => {
  test("validates input field", () => {
    render(<ReserveForm />);
    const firstNameInput = screen.getByLabelText("First Name");

    // test for valid input
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput.value).toBe("John");

    const lastNameInput = screen.getByLabelText("Last Name");

    // test for valid input
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    expect(lastNameInput.value).toBe("Doe");
  });
});

jest.mock("./helper/Api.js", () => ({
  fetchAPI: (data) => Promise.resolve(["17:00 PM", "19:00 PM", "21:00 PM"]),
}));

describe("updateTimes", () => {
  it("check whether fetchAPI success", async () => {
    const data = await updateTimes("2023-05-05");
    expect(data).toMatchObject(["17:00 PM", "19:00 PM", "21:00 PM"]);
  });
});

describe("initializeTimes", () => {
  it("check whether fetchAPI success", async () => {
    const data = await initializeTimes("2023-05-05");
    expect(data).toMatchObject(["17:00 PM", "19:00 PM", "21:00 PM"]);
  });
});

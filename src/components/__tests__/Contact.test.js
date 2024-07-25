import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  it("Should load Contact us Component", () => {
    render(<Contact />); // rendered on the jsdom

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load Button inside Contact Component", () => {
    render(<Contact />); // rendered on the jsdom

    const button = screen.getByRole("button");
    //   or
    //   const button = screen.getByText("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact Component", () => {
    render(<Contact />); // rendered on the jsdom

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should  load 2 input boxes  on the contact component", () => {
    render(<Contact />);

    //   Querying
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
    //   expect(inputBoxes.length).not.toBe(3);
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../app";

test("renders learn react link", () => {
  render(<App />);
  let linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
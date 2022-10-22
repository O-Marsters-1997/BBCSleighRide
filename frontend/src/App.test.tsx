import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("All basic react tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders learn react link", () => {
    const linkElement = screen.getByText("hello world");
    expect(linkElement).toBeInTheDocument();
  });
});

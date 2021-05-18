import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockColors } from "../helpers/getColors";

jest.mock("../helpers/getColors");

const testData = {
  color: "blue",
  code: { hex: "#8a2be2" },
};

test("Renders BubblePage without errors", async () => {
  // Finish this test
  mockColors.mockResolvedValueOnce({ data: [] });
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  mockColors.mockResolvedValueOnce(testData);
  render(<BubblePage />);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading

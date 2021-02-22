import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { getColors as mockColors } from "../helpers/getColors";
import BubblePage from "./BubblePage";

jest.mock("../helpers/getColors");
let colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
];

test("Renders BubblePage without errors", async () => {
  mockColors.mockResolvedValueOnce({
    data: colors,
  });

  render(<BubblePage />);
  const { getByText } = screen;
  await waitFor(() => {
    expect(getByText("aliceblue")).toBeInTheDocument();
  });

  // Finish this test
});

test("Fetches data and renders the bubbles on mounting", async () => {
  mockColors.mockResolvedValueOnce({
    data: colors,
  });

  render(<BubblePage />);
  const { getByText } = screen;
  await waitFor(() => {
    expect(getByText("limegreen")).toBeInTheDocument();
  });

  // Finish this test
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading

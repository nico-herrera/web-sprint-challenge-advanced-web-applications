import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import Login from "./Login";
import { history } from "../history";
import userEvent from "@testing-library/user-event";

test("Renders BubblePage without errors", async () => {
  try {
    render(<Login />);

    UserEvent.type(screen.getByTestId("test-username"), "Lambda School");
    expect(screen.getByTestId("test-username")).toHaveValue("Lambda School");

    UserEvent.type(screen.getByTestId("test-password"), "i<3Lambd4");
    expect(screen.getByTestId("test-password")).toHaveValue("i<3Lambd4");

    userEvent.click(screen.getByRole("button"));
    localStorage.setItem(
      "token",
      "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
    );
    jest.spyOn(localStorage, "getItem");
    expect(localStorage.getItem).toBeCalledWith("token");

    await waitFor(() => expect(history.location.pathname).toBe("/bubble-page"));

    const colors = await waitFor(() => screen.getByTestId("color-test"));
    console.log("finished");
    expect(colors).toHaveValue("colors");
  } catch (err) {
    console.log(err);
  }

  // Finish this test
});

test("Fetches data and renders the bubbles on mounting", () => {
  try {
    render(<Login />);

    UserEvent.type(screen.getByTestId("test-username"), "Lambda School");
    expect(screen.getByTestId("test-username")).toHaveValue("Lambda School");

    UserEvent.type(screen.getByTestId("test-password"), "i<3Lambd4");
    expect(screen.getByTestId("test-password")).toHaveValue("i<3Lambd4");

    userEvent.click(screen.getByRole("button"));
    localStorage.setItem(
      "token",
      "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
    );
    jest.spyOn(localStorage, "getItem");
    expect(localStorage.getItem).toBeCalledWith("token");

    await waitFor(() => expect(history.location.pathname).toBe("/bubble-page"));

    const colors = await waitFor(() => screen.getByTestId("color-test"));
    console.log("finished");
    expect(colors).toHaveValue("colors");
  } catch (err) {
    console.log(err);
  }
  // Finish this test
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading

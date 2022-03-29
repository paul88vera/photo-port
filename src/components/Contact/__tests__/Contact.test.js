/*esline-disable*/
import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Contact from "..";

afterEach(cleanup);

describe("h1 are visible", () => {
 it("inserts text into the h1", () => {
   //Arrange
   const { getByTestId } = render(<Contact />);
   expect(getByTestId("con")).toHaveTextContent("Contact me");
   expect(getByTestId("sub")).toHaveTextContent("Submit");
 });
});
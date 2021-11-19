import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MemeThunbmail from "./MemeThumbnail";

describe("<MemeThunbmail />", () => {
  test("it should mount", () => {
    render(<MemeThunbmail />);

    const memeThunbmail = screen.getByTestId("MemeThunbmail");

    expect(memeThunbmail).toBeInTheDocument();
  });
});

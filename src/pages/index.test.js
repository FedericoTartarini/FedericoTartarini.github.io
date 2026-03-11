import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

jest.mock("@site/src/components/HomepageHeader", () => function MockHomepageHeader() {
  return <div data-testid="homepage-header">Header</div>;
});

jest.mock("@site/src/components/HomepageFeatures", () => function MockHomepageFeatures() {
  return <div data-testid="homepage-features">Features</div>;
});

describe("Home page", () => {
  it("renders inside Layout with expected metadata", () => {
    render(<Home />);

    const layout = screen.getByTestId("layout");
    expect(layout).toHaveAttribute("data-title", "Dr Federico Tartarini personal website");
    expect(layout).toHaveAttribute(
      "data-description",
      "This is the personal website of Dr Federico Tartarini, in the landing page I describe my role and skills"
    );
  });

  it("renders homepage header and feature sections", () => {
    render(<Home />);

    expect(screen.getByTestId("homepage-header")).toBeInTheDocument();
    expect(screen.getByTestId("homepage-features")).toBeInTheDocument();
  });

  it("renders decorative top and bottom SVG waves", () => {
    render(<Home />);

    expect(document.querySelectorAll("svg").length).toBeGreaterThanOrEqual(2);
  });
});

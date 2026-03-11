import React from "react";
import { render, screen } from "@testing-library/react";
import HomepageFeatures from "./index";

describe("HomepageFeatures", () => {
  it("renders all feature headings", () => {
    render(<HomepageFeatures />);

    expect(screen.getByRole("heading", { name: /my research/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tools/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /youtube/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /latex/i })).toBeInTheDocument();
  });

  it("renders links to key categories", () => {
    render(<HomepageFeatures />);

    expect(screen.getByRole("link", { name: /my research/i })).toHaveAttribute(
      "href",
      "docs/category/my-research"
    );
    expect(screen.getByRole("link", { name: /^tools$/i })).toHaveAttribute(
      "href",
      "docs/category/tools"
    );
    expect(screen.getByRole("heading", { name: /^latex$/i }).closest("a")).toHaveAttribute(
      "href",
      "docs/category/latex"
    );
  });

  it("renders descriptive content about pythermalcomfort", () => {
    render(<HomepageFeatures />);

    expect(screen.getByRole("link", { name: /pythermalcomfort/i })).toHaveAttribute(
      "href",
      "docs/tools/pythermalcomfort"
    );
  });
});

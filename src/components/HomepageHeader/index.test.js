import React from "react";
import { render, screen } from "@testing-library/react";
import HomepageHeader from "./index";

jest.mock("../animatedSvg", () => function MockAnimatedSvg() {
  return <div data-testid="animated-svg" />;
});

describe("HomepageHeader", () => {
  it("renders site title and role heading", () => {
    render(<HomepageHeader />);

    expect(screen.getByRole("heading", { name: /dr federico tartarini/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /senior lecturer \| horizon fellow \| engineer \| youtuber/i,
      })
    ).toBeInTheDocument();
  });

  it("renders the about me call-to-action", () => {
    render(<HomepageHeader />);

    expect(screen.getByRole("link", { name: /about me/i })).toHaveAttribute(
      "href",
      "/docs/about_me/intro"
    );
  });

  it("renders profile image and social links", () => {
    render(<HomepageHeader />);

    expect(screen.getByRole("img", { name: /federico tartarini/i })).toBeInTheDocument();
    const links = screen.getAllByRole("link");
    expect(
      links.some((link) => link.getAttribute("href") === "https://github.com/FedericoTartarini")
    ).toBe(true);
    expect(
      links.some((link) => link.getAttribute("href") === "https://www.youtube.com/c/FedericoTartarini")
    ).toBe(true);
    expect(screen.getByRole("link", { name: /about me/i })).toHaveAttribute(
      "href",
      "/docs/about_me/intro"
    );
  });
});

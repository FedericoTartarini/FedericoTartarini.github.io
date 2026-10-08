import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card";
import contact from "@site/src/data/contact.json";

jest.mock(
  "@docusaurus/Head",
  () =>
    function MockHead({ children }) {
      return <>{children}</>;
    },
  { virtual: true },
);

describe("Card page", () => {
  it("shows name, role and organization", () => {
    render(<Card />);

    expect(screen.getByRole("heading", { name: "Dr Federico Tartarini" })).toBeInTheDocument();
    expect(screen.getByText(/Senior Lecturer \| Horizon Fellow/)).toBeInTheDocument();
    expect(screen.getByText(/The University of Sydney/)).toBeInTheDocument();
  });

  it("links the save-contact button to the vCard file", () => {
    render(<Card />);

    expect(screen.getByRole("link", { name: /Save contact/ })).toHaveAttribute(
      "href",
      "/federico-tartarini.vcf",
    );
  });

  it("links to the work email and every profile", () => {
    render(<Card />);

    expect(screen.getByRole("link", { name: contact.email })).toHaveAttribute(
      "href",
      `mailto:${contact.email}`,
    );
    contact.links.forEach(({ label, href }) => {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute("href", href);
    });
  });

  it("shows the QR code on a direct visit", async () => {
    window.history.pushState({}, "", "/card");
    render(<Card />);

    expect(await screen.findByAltText(/QR code linking to/)).toHaveAttribute(
      "src",
      "/img/card-qr.svg",
    );
  });

  it("hides the QR code from people who arrived by scanning it", async () => {
    window.history.pushState({}, "", "/card?src=qr");
    render(<Card />);

    await screen.findByRole("heading", { name: "Dr Federico Tartarini" });
    expect(screen.queryByAltText(/QR code linking to/)).not.toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "./test-util";
import LeaseList from "../components/LeaseList";
const tenantData = [
  { id: "lease-e", tenant: "matilda" },
  { id: "lease-f", tenant: "piccaso" },
  { id: "lease-g", tenant: "denee" },
];

it("Renders the LeaseList app with initialState", () => {
  render(<LeaseList />, { initialState: { leaseList: tenantData } });
  const items = screen.getAllByRole("row");
  expect(screen.getAllByRole("row")).toHaveLength(4);
});

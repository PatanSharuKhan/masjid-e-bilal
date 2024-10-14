import React from "react"
import { render, screen } from "@testing-library/react"
import UpcomingTime from "./upcomingTIme"

describe("UpcomingTime", () => {
  test("shoyld display the time name", () => {
    render(<UpcomingTime />)

    const timeName = screen.getByText("Fajr")
    expect(timeName).toBeInTheDocument()
  })
})

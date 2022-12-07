import Accordion from "./Accordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="hello">
        <h3>My content</h3>
        <p>some description</p>
      </Accordion>
    );
  });

  test("should show title all the time", () => {
    expect(screen.getByText("hello")).toBeDefined();
  });

  test("should not show content at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test('Should show content when clicking on "Open" button', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test('Should hide content when clicking on "Close" button', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent,act} from "@testing-library/react";
import {Button} from "./Button";

describe("<Button />", () => {
  it("should pass", () => {
    render(<Button label="Test" />);
    const buttonAction = screen.getByText("Test");
    expect(buttonAction).toBeInTheDocument();
  });

  it("should call onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonAction = screen.getByText("Click Me");
    await act(() => {
      fireEvent.click(buttonAction);
    }); 
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
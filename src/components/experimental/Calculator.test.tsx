import { describe, it, expect} from "vitest";
import { Calculator } from "./Calculator";
import { render, screen } from "@testing-library/react";

describe("<Calculator />", () => {
 const useCasesTest = [
    { a: 5, b: 3, operation: 'add', expected: 8 },
    { a: 5, b: 3, operation: 'subtract', expected: 2 },
    { a: 5, b: 3, operation: 'multiply', expected: 15 },
    { a: 6, b: 3, operation: 'divide', expected: 2 },
  ];
  it.each(useCasesTest)('should correctly perform $operation on $a and $b', ({ a, b, operation, expected }) => {
    render(<Calculator a={a} b={b} operation={operation} />);
    const result = screen.getByText("Result: " + expected);
    expect(result).toBeInTheDocument();
  });
});
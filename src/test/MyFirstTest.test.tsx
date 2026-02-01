import { describe, it, expect } from 'vitest';

describe('MyFirstTest', () => {
  it('should pass this simple test', () => {
    expect(1 + 1).toBe(2);
  });
  it('two text equal', () => {
    const text1 = 'Hello, World!';
    const text2 = 'Hello, World!';
    expect(text1).toBe(text2);
  
  });

});
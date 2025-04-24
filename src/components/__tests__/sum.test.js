import { sum } from "../sum";

test("should return 10 for sum(3, 7)", () => {
    expect(sum(3, 7)).toBe(10);
});

test("should return 12 for sum(5, 7)", () => {
    expect(sum(5, 7)).toBe(12);
});

test("should return -5 for sum(-2, -3)", () => {
    expect(sum(-2, -3)).toBe(-5);
});

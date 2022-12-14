import Triangle from "../src/Triangle";

test('test value input null', () => {
    let a = null;
    let b = null;
    let c = null;

    let expected = 'This is not a triangle';
    let triangle = new Triangle(a, b, c);

    let actual = triangle.check();
    expect(actual).toBe(expected);
})

test('test value input b = null and c = null', () => {
    let a = 10;
    let b = null;
    let c = null;

    let expected = 'This is not a triangle';
    let triangle = new Triangle(a, b, c);

    let actual = triangle.check();
    expect(actual).toBe(expected);
})

test('test value input b = null and c = null', () => {
    let a = 10;
    let b = 5;
    let c = null;

    let expected = 'This is not a triangle';
    let triangle = new Triangle(a, b, c);

    let actual = triangle.check();
    expect(actual).toBe(expected);
})

test('test is right triangle', () => {
    let a = 3;
    let b = 4;
    let c = 5;

    let expected = 'This is a right triangle';
    let triangle = new Triangle(a, b, c);

    let actual = triangle.check();
    expect(actual).toBe(expected);
})

test('test is equilateral triangle', () => {
    let a = 4;
    let b = 4;
    let c = 4;

    let expected = 'This is a equilateral triangle';
    let triangle = new Triangle(a, b, c);

    let actual = triangle.check();
    expect(actual).toBe(expected);
})

test('test is not a triangle', () => {
    let a = 10;
    let b = 2;
    let c = 3;

    let expected = 'This is not a triangle';
    let triangle = new Triangle(a, b, c);

    let actual = triangle.check();
    expect(actual).toBe(expected);
})

test('test is isosceles triangle', () => {
    let a = 4;
    let b = 4;
    let c = 3;

    let expected = 'This is a isosceles triangle';
    let triangle = new Triangle(a, b, c);

    let actual = triangle.check();
    expect(actual).toBe(expected);
})

test('test is a triangle', () => {
    let a = 3;
    let b = 4;
    let c = 6;

    let expected = 'This is a triangle';
    let triangle = new Triangle(a, b, c);

    let actual = triangle.check();
    expect(actual).toBe(expected);
})

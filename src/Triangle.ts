class Triangle {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    check() {

        if (this.isValueNull()) {
            return "This is not a triangle"
        }

        if (this.notTriangle()) {
            return "This is not a triangle"
        }

        if (this.isRightTriangle()) {
            return "This is a right triangle";
        }

        if (this.isEquilateralTriangle()) {
            return "This is a equilateral triangle"
        }

        if (this.isIsoccelesTriangle()) {
            return "This is a isosceles triangle"
        }

        return "This is a triangle"
    }

    private isValueNull() {
        return this.a == null || this.b == null || this.c == null;
    }

    private isIsoccelesTriangle() {
        return this.a == this.b || this.b == this.c || this.c == this.a;
    }

    private isEquilateralTriangle() {
        return this.a == this.b && this.b == this.c;
    }

    private isRightTriangle() {
        return (Math.pow(this.a, 2) + Math.pow(this.b, 2)) === Math.pow(this.c, 2);
    }

    private notTriangle() {
        return this.a >= this.b + this.c
            || this.b >= this.c + this.a ||
            this.c >= this.a + this.b;
    }
}

export default Triangle;

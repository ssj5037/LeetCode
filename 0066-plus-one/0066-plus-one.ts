function plusOne(digits: number[]): number[] {
    if (digits[digits.length-1] < 9) {
        digits[digits.length-1]++;
    } else {
        let newDigits: number[] = [1];
        if (digits.length > 1) {
            newDigits = plusOne(digits.slice(0, digits.length-1));
        }
        digits = [...newDigits, 0];
    }
    return digits;
};
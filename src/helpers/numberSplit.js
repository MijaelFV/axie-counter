function numberSplit(value, index) {
    var num = value;

    var digits = [];            
    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse()

    if (digits.length === 1) {
        digits[1] = digits[0]
        digits[0] = 0;
    }

    return digits[index]
}

export default numberSplit

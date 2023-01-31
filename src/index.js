module.exports = function toReadable(number) {
    const a = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const b = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let result = "";

    if (number.toString().length === 3) {
        result += a[Math.trunc(number / 100)] + " hundred";
        number -= Math.trunc(number / 100) * 100;
        if (number === 0) {
            return result;
        }
    }

    if (number.toString().length === 2) {
        if (number < 20) {
            result += " " + a[number];
            return result.trim();
        } else {
            result += " " + b[Math.trunc(number / 10) - 2];
            number -= Math.trunc(number / 10) * 10;
            if (number === 0) {
                return result.trim();
            }
        }
    }

    if (number.toString().length === 1) {
        result += " " + a[number];
        return result.trim();
    }
};

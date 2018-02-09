module.exports = (number) => {

    if (typeof number !== 'number' || number < 1 || number > 3999 || !Number.isInteger(number)) {
        throw new Error();
    }

    const RomanNumeralGenerator = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    }, keys = Object.keys(RomanNumeralGenerator).reverse();

    let result = "";

    keys.forEach(key => {
        while (number >= key) {
            number -= key
            result += RomanNumeralGenerator[key]
        }
    });

    return result;
}

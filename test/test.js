const roman_numeral_generator = require('../roman_numeral_generator');
describe(' Inputs and outputs sample', () => {
    test('1 = "I"' , () => {
       expect(roman_numeral_generator(1)).toBe("I")
    })

    test('5 = "V"' , () => {
         expect(roman_numeral_generator(5)).toBe("V")
    })
    test('10 = "X"' , () => {
        expect(roman_numeral_generator(10)).toBe("X")
    })

    test('20 = "XX"' , () => {
        expect(roman_numeral_generator(20)).toBe("XX")
    })

    test('3999 = "MMMCMXCIX"' , () => {
        expect(roman_numeral_generator(3999)).toBe("MMMCMXCIX")
    })

})

describe('Caveat:', () => {
    test('Numbers below or above 3999 throws an empty string', () => {
        expect(() => {roman_numeral_generator(-1)}).toThrow()
    })

    test('A string throws an exception', () => {
        expect(() => {roman_numeral_generator("Throw error")}).toThrow();
    })

    test('undefined throws an exception', () => {
        expect(() => {roman_numeral_generator(undefined)}).toThrow();
    })

    test('boolean throws an exception', () => {
        expect(() => {roman_numeral_generator(true)}).toThrow();
    })

    test('float doit lever une exception', () => {
        expect(() => {roman_numeral_generator(1.3)}).toThrow();
    })
})

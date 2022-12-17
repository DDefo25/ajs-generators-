import canIterate from "../canIterate";

test.each([
    ["Map is iterable", new Map(), true],
    ["Set is iterable", new Set(), true],
    ["null is not iterable", null, false],
    ["Number is not iterable", 10, false],
    ["String is iterable", "Netology", true],
])(
    ("%s"),
    (_, obj, expectings) => {
        const result = canIterate(obj);
        expect(result).toBe(expectings);
    },
);

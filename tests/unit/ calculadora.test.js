const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 deve ser igual a 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("Somar 5 + 100 deve ser igual a 105", () => {
  expect(calculadora.somar(5, 100)).toBe(105);
});

test("Somar 'Banana' + 100 deveria retornar 'ERRO'", () => {
  expect(calculadora.somar("Banana", 100)).toBe("ERRO");
});

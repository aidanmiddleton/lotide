const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);
assertEqual(eqArrays([1, 2, '5'], [1, 2, '5']), true);
assertEqual(eqArrays([1, 2, '5'], [1, 2, '4']), true);
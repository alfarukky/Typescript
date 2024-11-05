type combinable = number | string;
type conversionDiscriptor = 'as-number' | 'as-text';
function combine(
  input1: combinable,
  input2: combinable,
  resultConversion: conversionDiscriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combineAges = combine(20, 36, 'as-number');
console.log(combineAges);
const combineStringAges = combine('20', '36', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Tammy', 'kola', 'as-text');
console.log(combineNames);

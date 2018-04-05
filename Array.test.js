
/* 1. Array.prototype.includes
includes is a simple instance method on the Array and helps to easily find if an item is in the Array (including NaN unlike indexOf).
*/
const arr = [2,4,5,NaN,undefined];

test('index_of does not find an array value of NaN', function(){
  expect(arr.indexOf(NaN)).toEqual(-1);
});
test('index_of *does* find an array value of undefined', function(){
  expect(arr.indexOf(undefined)).toEqual(4);
});

test('includes *does* find an array value of NaN', function(){
  expect(arr.includes(NaN)).toEqual(true);
});

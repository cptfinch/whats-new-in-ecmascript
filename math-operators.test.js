

// 2. In ECMA2016, the ** operator was introduced
test('the infix ** operator does the same thing, since ecma2016, as Math.pow()', function(){
  expect(7**2).toEqual(Math.pow(7,2));
});
// 3. In ECMA 2017, can get the values of a dictionary object rather than just the keys
test('ECMA2017: Object.values instead of Object.keys.map(key=>Object[key])', function(){
  const animals={'cow':'moo', 'dog':'woof'};
  expect(Object.values(animals)).toEqual(Object.keys(animals).map(key=>animals[key]));
});

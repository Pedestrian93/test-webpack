function add(_a, _b) {
  const maxLen = Math.max(_a.length, _b.length);
  const a = _a.padStart(maxLen, '0');
  const b = _b.padStart(maxLen, '0');
  const result = ''.padStart(maxLen, '0').split('');
  let i = maxLen;
  let x = 0;
  while (i > 0) {
    const aa = +a[i - 1];
    const bb = +b[i - 1];
    const sum = aa + bb + x;
    const j = sum % 10;
    result[i - 1] = j;
    x = sum >= 10 ? 1 : 0;
    // eslint-disable-next-line no-plusplus
    i--;
  }
  if (x) {
    result.shift(x);
  }
  console.log(result.join(''));
}

add('1212', '3456789'); // expect 3458001

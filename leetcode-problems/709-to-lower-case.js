toLowerCase = str => {
  let res = '';

  str.split('').forEach((s, index) => {
    let code = str.charCodeAt(index);

    if (code >= 65 && code < 97) {
      code += 32;
    }

    res += String.fromCharCode(code);
  });

  return res;
};

console.log(toLowerCase('HeLlo'));

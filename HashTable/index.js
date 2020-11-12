const hash = (key, arrayLen) => {
  let total = 0;
  for (let ch of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let ch = key[i];
      let value = ch.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    const index = this._hash(key);
    console.log(index);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }

  keys() {
    let keysArr = [];
    this.keyMap.forEach((each) => {
      if (each) {
        each.forEach((key) => {
          if (!keysArr.includes(key[0])) {
            keysArr.push(key[0]);
          }
        });
      }
    });
    return keysArr;
  }

  values() {
    let valuesArr = [];
    this.keyMap.forEach((each) => {
      if (each) {
        each.forEach((val) => {
          if (!valuesArr.includes(val[1])) {
            valuesArr.push(val[1]);
          }
        });
      }
    });
    return valuesArr;
  }
}

let ht = new HashTable();

ht.set('yellow', 'goodbye');
ht.set('hello world', 'another');
ht.set('hello world', 'another');
let val = ht.get('yellow');
console.log(val);
console.log(ht.keys());
console.log(ht.keyMap);

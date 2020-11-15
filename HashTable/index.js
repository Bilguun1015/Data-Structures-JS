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

  keys() {}

  values() {
    let valuesArr = [];
    this.keyMap.forEach((each) => {
      if (each) {
        each.forEach((val) => valuesArr.push(val));
      }
    });
    return valuesArr;
  }
}

let ht = new HashTable();

ht.set('yellow', 'goodbye');
ht.set('orange', 'something');
// ht.set('hello world', 'another');
// ht.set('hello world', 'another');
let val = ht.get('yellow');
console.log(val);
console.log(ht.values());
console.log(ht.keyMap);

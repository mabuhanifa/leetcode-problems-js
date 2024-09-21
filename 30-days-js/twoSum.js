function findTarget(a, t) {
  const hash = new Map();
  for (let i = 0; i < a.length; i++) {
    if (hash.has(t - a[i])) {
      return [hash.get(t - a[i]), i];
    }
    hash.set(a[i], i);
  }
  return null;
}

// console.log(findTarget([1, 2, 3, 4, 5, 6], 5));

function findTarget2(a, t) {
  const hash = {};
  for (let i = 0; i < a.length; i++) {
    const need = [t - a[i]];
    if (hash[need]) {
      return [hash[need], i];
    }
    hash[a[i]] = i;
  }
  return null;
}

// console.log(findTarget2([1, 2, 3, 4, 5, 6], 7));

function findTarget3(array, target) {
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    const need = target - array[i];
    if (hash[need]) {
      return [hash[need], i];
    }
    hash[array[i]] = i;
  }
  return null;
}

// console.log(findTarget3([1, 2, 3, 4, 5, 6], 8));

function findTarget4(array, target) {
  const hash = [];
  for (let i = 0; i < array.length; i++) {
    const need = target - array[i];
    if (hash.includes(need)) {
      return [hash.findIndex((h) => h === need), i];
    }
    hash.push(array[i]);
  }
  return null;
}

// console.log(findTarget4([1, 2, 3, 4, 5, 6], 5));

function findTarget5(a, t) {
  const storage = {};
  for (const [i, e] of a.entries()) {
    if (storage[t - e]) {
      return [storage[t - e], i];
    }
    storage[e] = i;
    console.log({ t: t - e, need: storage[t - e], i, storage });
  }
  return null;
}

console.log(findTarget5([1, 2, 3, 4, 5, 6], 7));

// function findTarget6(a, t) {
//   const storage = new Map();
//   for (const [i, e] of a.entries()) {
//     if (storage.has(t - e)) {
//       return [storage.get(t - e), i];
//     }
//     storage.set(e, i);
//   }
//   return null;
// }

// console.log(findTarget6([1, 2, 4, 5, 6], 7));

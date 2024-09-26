function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    let results = new Array(functions.length);
    let completedPromises = 0;

    functions.forEach((fn, index) => {
      fn()
        .then((result) => {
          results[index] = result;
          completedPromises++;

          if (completedPromises === functions.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

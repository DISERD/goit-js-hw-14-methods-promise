// Порівняння

const delayedPromise = (value, delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = [
  delayedPromise("Перше значення", 1000),
  delayedPromise("Друге значення", 2500),
  delayedPromise("Третє значення", 1500),
  delayedPromise("Четверте значення", 3000),
  delayedPromise("П'яте значення", 500)
];

Promise.all(promises)
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.log(error);
  });
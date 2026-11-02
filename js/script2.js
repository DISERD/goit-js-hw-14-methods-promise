//змагання

const randomDelay = value => {
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ value, delay });
    }, delay);
  });
};

const values = ["Значення 1", "Значення 2", "Значення 3", "Значення 4", "Значення 5"];
const promises = values.map(value => randomDelay(value));

Promise.race(promises)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
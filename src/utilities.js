/*
** utilities.js
*/
export const isOdd = (int) => (int & 1) === 1;

export const isEven = (int) => (int & 1) === 0;

export const isoDate = (new Date()).toISOString().split('T')[0];

export const toFcap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const toFahrenheit = (celsius) => celsius * 9 / 5 + 32;

export const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

export const toGallons = (liter) => liter / 3.785411784;

export const toLiter = (gallon) => gallon * 3.785411784;

export const toJSON = (data) => {
  let obj = {};
  for (let key of data.keys()) {
    obj[key] = data.get(key);
  }
  return JSON.stringify(obj);
}

export const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

export const average = (...args) => args.reduce((a, b) => a + b) / args.length;

export const randBool = () => Math.random() >= 0.5;

export const randNum = (min=0, max=1, integer=true) => {
  let r = Math.random() * (max - min + 1) + min;
  return integer ? r|0 : r
}

export const randHex = (n=32) => [...Array(n)].map(i=>(~~(Math.random()*16)).toString(16)).join('');

export const randString = (n=32) => [...Array(n)].map(i=>(~~(Math.random()*36)).toString(36)).join('');

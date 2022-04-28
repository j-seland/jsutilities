/**
 * utilities.js
 */
export const isOdd = (int) => (int & 1) === 1;

export const isEven = (int) => (int & 1) === 0;

export const ymdDate = () => new Date().toISOString().split('T')[0];

export const toAverage = (...args) => args.reduce((a, b) => a + b) / args.length;

export const toFcap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

export const toFahrenheit = (celsius) => celsius * 9 / 5 + 32;

export const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

export const toGallons = (liter) => liter / 3.785411784;

export const toLiter = (gallon) => gallon * 3.785411784;

export const toKilo = (ounce) => ounce / 35.274;

export const toGram = (grain) => grain / 15.432;

export const toCalories = (grams) => grams * 7.716179;

export const toJSON = (data) => {
  let obj = {};
  for (let key of data.keys()) {
    obj[key] = data.get(key);
  }
  return JSON.stringify(obj);
}

export const rndString = (n=32) => [...Array(n)].map(i=>(~~(Math.random()*36)).toString(36)).join('');

export const rndHex = (n=32) => [...Array(n)].map(i=>(~~(Math.random()*16)).toString(16)).join('');

export const rndBool = () => Math.random() >= 0.5;

export const rndNum = (min=0, max=1, integer=true) => {
  let r = Math.random() * (max - min + 1) + min;
  return integer ? r|0 : r
}

export const notZero = (n) => {
  n = +n;
  return !n ? false : true
}

export const maxDays = (days=1) => 60 * 60 * 24 * days;

export const maxHours = (hours=1) => 60 * 60 * hours;

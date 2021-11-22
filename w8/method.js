// forEach
const array = [1, 2, 3, 4, 5]
array.forEach(item => { 
  console.log(item*2);
});

// concat
const fruits = ['apel', 'banana', 'mango']
const number = [1, 2, 3]
const newArray = fruits.concat(number);
console.log(newArray);

// include
console.log(fruits.includes('apel'));

// reverse
fruits.reverse()
console.log(fruits);

// tostring
const text = fruits.toString();
console.log(text);

// push
const angka = [1,2,3,4]
angka.push(5)
console.log(angka);

// filter
const angkaLagi = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const genap = angkaLagi.filter(item => item % 2 === 0);
console.log(genap)

// find
const temukan = angkaLagi.find(index => index > 3)
console.log(temukan);

// slice 
const lagiAngka = [1,2,3,4,5,6,7,8,9]
const potong = lagiAngka.slice(1,3)
console.log(potong);

// sort 
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);


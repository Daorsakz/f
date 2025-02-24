// Объекты №1
// function countProperties(obj) { 
//     return Object.keys(obj).length; // Получаем массив ключей и возвращаем его длину
// }

// // Проверка работы функции
// const user = { name: "Steve", age: 25, city: "Moscow", Gender: "Unknown" };
// console.log(countProperties(user)); // 3

// const objWithProto = Object.create({ inherited: "value" });
// objWithProto.ownProp = "ownValue";
// console.log(countProperties(objWithProto)); // 1 (считает только собственные свойства)


// Объекты №2
// function hasProperty(obj, key) {
//     return obj.hasOwnProperty(key); // Проверяет, является ли свойство собственным
// }

// // Проверка работы функции
// const user = { name: "Bob", age: 30 };
// console.log(hasProperty(user, "age")); // true
// console.log(hasProperty(user, "city")); // false

// // Проверяем унаследованное свойство
// const objWithProto = Object.create({ inherited: "value" });
// objWithProto.ownProp = "ownValue";
// console.log(hasProperty(objWithProto, "ownProp")); // true (собственное свойство)
// console.log(hasProperty(objWithProto, "inherited")); // false (унаследованное свойство)


// Объекты №3
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 }; // Объединяем объекты с приоритетом значений из obj2
// }

// // Проверка работы функции
// const person = { firstName: "John", age: 40 };
// const details = { age: 45, country: "Canada" };

// console.log(mergeObjects(person, details));
// // { firstName: "John", age: 45, country: "Canada" }


// Объекты №4
// function getObjectKeys(obj) {
//     return Object.keys(obj); // Получаем массив ключей объекта
// }

// // Проверка работы функции
// const laptop = { brand: "Dell", model: "XPS 15", year: 2024 };

// console.log(getObjectKeys(laptop)); 
// // ["brand", "model", "year"]


// // Объекты №5
// function removeProperty(obj, key) {
//     if (key in obj) { // Проверяем, есть ли ключ в объекте
//         delete obj[key]; // Удаляем свойство
//     }
// }

// // Проверка работы функции
// const movie = { title: "Inception", director: "Christopher Nolan", year: 2010 };

// removeProperty(movie, "year");
// removeProperty(movie, "director");
// console.log(movie); 
// // { title: "Inception", director: "Christopher Nolan" }



//Функции №1
// function factorial(n) {
//     if (n < 0) return undefined; // Факториал отрицательного числа не определен
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// // Проверка работы функции
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(3)); // 6


// Функция №2
// const isPrime = (n) => {
//     if (n < 2) return false; // Числа меньше 2 не являются простыми
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false; // Если делится без остатка, то составное
//     }
//     return true; // Если ни на что не делится, значит простое
// };

// // Проверка работы функции
// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false
// console.log(isPrime(2));  // true
// console.log(isPrime(1));  // false
// console.log(isPrime(19)); // true
// console.log(isPrime(25)); // false


// Функция №3
// function sumAll(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }
// // Проверка работы функции
// console.log(sumAll(1, 2, 3, 4)); // 10
// console.log(sumAll(5, 10, 15));  // 30
// console.log(sumAll());           // 0
// console.log(sumAll(7, -3, 8, 2)); // 14


//Функция №4
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// // Проверка работы функции
// console.log(reverseString("hello"));      // "olleh"
// console.log(reverseString("JavaScript")); // "tpircSavaJ"
// console.log(reverseString("12345"));      // "54321"
// console.log(reverseString(""));           // ""

//Функция №5
// function formatName(name) {
//     if (!name) return ""; // Проверка на пустую строку
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

// // Проверка работы функции
// console.log(formatName("aLiCe")); // "Alice"
// console.log(formatName("BOB"));   // "Bob"
// console.log(formatName("john"));  // "John"
// console.log(formatName("eVa"));   // "Eva"


//Массивы №1
// function findMax(arr) {
// if (arr.length === 0) return undefined; 
// return Math.max(...arr);
// }

// // Проверка работы функции
// console.log(findMax([3, 7, 2, 9, 5]));  // 9
// console.log(findMax([-10, -3, -5, -1])); // -1
// console.log(findMax([]));


//Массивы №2
// function filterEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// // Проверка работы функции
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));  // [2, 4, 6]
// console.log(filterEvenNumbers([7, 9, 11]));         // []
// console.log(filterEvenNumbers([12, 14, 15, 17]));  // [12, 14]


//Массивы №3
// function mergeUnique(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])];
// }

// // Проверка работы функции
// console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(mergeUnique([7, 8], [8, 9, 10]));   // [7, 8, 9, 10]
// console.log(mergeUnique([], [1, 2, 3]));       // [1, 2, 3]
// console.log(mergeUnique([5, 5, 6], [6, 7, 8])); // [5, 6, 7, 8]
// console.log(mergeUnique([], []));             // []


//Массивы №4
// function reverseArray(arr) {
//     return arr.slice().reverse();
// }

// // Проверка работы функции
// console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
// console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]
// console.log(reverseArray([true, false, true])); // [true, false, true]
// console.log(reverseArray([])); // []
// console.log(reverseArray([42])); // [42]


//Массивы №5
function findIndex(arr, value) {
    return arr.indexOf(value);
}

// Проверка работы функции
console.log(findIndex([10, 20, 30, 40], 30)); // 2
console.log(findIndex(["apple", "banana", "cherry"], "banana")); // 1
console.log(findIndex([1, 2, 3, 4], 4)); // 3
console.log(findIndex([], 5)); // -1
console.log(findIndex(["a", "b", "c"], "b")); // -1

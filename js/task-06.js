import users from './users.js';

console.log('=== Задание 6 ===');

const getUsersWithAge = (users, min, max) => users.filter(({ age }) => age >= min && age <= max);

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

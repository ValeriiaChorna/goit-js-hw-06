import users from './users.js';

console.log('=== Задание 2 ===');


const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);


console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

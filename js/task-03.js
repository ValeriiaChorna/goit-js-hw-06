import users from './users.js';

console.log('=== Задание 3 ===');

const getUsersWithGender = (users, gender) => users.filter(users => users.gender === gender).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

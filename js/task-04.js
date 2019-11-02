import users from './users.js';

console.log('=== Задание 4 ===');

const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

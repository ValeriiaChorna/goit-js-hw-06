import users from './users.js';

console.log('=== Задание 10 ===');

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => users
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((el, indx, arr) => arr.indexOf(el) === indx)
    .sort(); // или sort((a, b) => a.localeCompare(b), "en")

console.table(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

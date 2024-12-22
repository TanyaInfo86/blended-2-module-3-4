// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
function updateObject(obj, ...args) {
    const newObj = {};
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (!args.includes(key)) {
            newObj[key] = obj[key]   
        }
    }
        return newObj;
    }
 console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'));
 
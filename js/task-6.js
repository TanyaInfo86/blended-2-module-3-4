// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]
function removeItems(array1, array2) {
    const result = [];
    for (const item of array1) {
        if (!array2.includes(item)) {
            result.push(item)
        }
    }
    return result;
}
console.log(removeItems([1, 2, 3, 1, 2,5,6], [1, 2]))
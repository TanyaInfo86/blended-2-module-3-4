// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

function foo(arr) {
  const arr1 = [];
  for (const item of arr) {
    if (item) {
      arr1.push(item);
    }
  }
  return arr1;
}

console.log(foo([0, 1, false, 2, undefined, "", 3, null]));
console.log([0, 1, false, 2, undefined, "", 3, null].filter((item) => item));

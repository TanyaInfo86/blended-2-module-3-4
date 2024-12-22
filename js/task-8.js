// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
const arrNumber = [ 11, 9, 2, 1 ]
function reverseArr(arr){
    const newArr =[];
    for (let i =arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArr(arrNumber))
console.log(arrNumber.toReversed())
"use strict"

//* Функція відповідно до алгоритму бінарного пошуку */
function binSort(arr) {

  let arrSize = arr.length;               //витягую довжину вхідного масиву;
  let arrSort = [arrSize];                //резервую місце в пам'яті під новий масив із довжиною вхідного;

  for (let i = 0; i < arrSize; i++) {
    for (let j = i; j < arrSize; j++) {
      if (arr[i] > arr[j]) {

        // //* for debug mode*/
        // console.log("i: " + i);
        // console.log("j: " + j);
        // console.log("arr[i] before: " + arr[i]);
        // console.log("arr[j] before: " + arr[j]);
        // //* end debug mode/

        //* part for swap*/
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        //* end swap*/

        // //* for debug mode*/
        // console.log("arr[i] after: " + arr[i]);
        // console.log("arr[j] after: " + arr[j]);
        // //* end debug mode/
      }
    }
    arrSort[i] = arr[i];
  }
  return arrSort;
}

//* Функція відповідно до алгоритму бінарного пошуку */
//* Щось типу методу "Половинного ділення" */
function binFind(arr, item, maxItt) {
  let arrS = 0;
  let arrF = arr.length - 1;

  if (arr[arrS] === item)
    return arrS;
  if (arr[arrF] === item)
    return arrF;

  for (let i = 0; i < maxItt; i++) {
    let temp = Math.ceil((arrS + arrF) / 2);

    // //* for debug mode*/
    // let index = "[Console] ";
    // console.log(index + "Itt: " + (++i));
    // console.log(index + "arr[arrS]: " + arr[arrS]);
    // console.log(index + "arr[arrF]: " + arr[arrF]);
    // console.log(index + "temp: " + temp);
    // console.log(index + "arr[temp]: " + arr[temp]);
    // console.log();
    // index = null;
    // //* end debug mode/

    if (arr[temp] === item)
      return temp;
    else if (item > arr[temp]) {
      arrS = temp;
    }
    else if (item < arr[temp]) {
      arrF = temp;
    }
  }
  return null;
}

//* Факторіал через рекурсію */
function fakt(num) {
  if (num > 1) {
    return num * (fakt(num - 1));
  }
  else if (num === 1 || num === 0) {
    return 1;
  }
  else {
    return 0;
  }
}

//* Сума усіх елементів масиву з допомогою циклу */
function sumArr(arr) {
  let arrSize = arr.length;
  let sum = 0;
  for (let i = 0; i < arrSize; i++) {
    sum += arr[i];
  }
  return sum;
}

//* Сума усіх елементів масиву з допомогою циклу */
function sumArrFakt(arr, sp = 0) {
  let arrSize = arr.length;
  if (arrSize - 1 === (sp)) {
    return arr[sp];
  } else {
    return arr[sp] + sumArrFakt(arr, sp + 1);
  }
}

//* Пошук мінімального|максимального елемента масиву
//* і опевернення індексу цього елемента */
//! Одина із найпримітивніших реалізацій */
function findArrInd(arr, type = "min") {
  let arrSize = arr.length;
  let elIn = 0;
  let el = arr[0];

  if (type === "min") {
    for (let i = 0; i < arrSize; i++) {
      if (el > arr[i]) {
        el = arr[i];
        elIn = i;
      } else {
        continue;
      }
    }
  } else if (type === "max") {
    for (let i = 0; i < arrSize; i++) {
      if (el < arr[i]) {
        el = arr[i];
        elIn = i;
      } else {
        continue;
      }
    }
  } else {
    console.log("Undefined value \"type\"")
  }
  return elIn;
}
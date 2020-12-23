/*
//task1 сумма квадратов массива
arr = [2,1,-3,-4,6,0];
function sumSq () {
  return arr.reduce((prevValue, item) => prevValue + item**2, 0);
}
console.log(sumSq(arr));
*/

/*
//task3 самое длинное слово в предложении и его индекс
let a = "самое длинное слово в предложении и его индекс";
function longWord(arr) {
  let max = 0,
    ind = 0,
    word = "";
  arr.split(" ").forEach((item, index) => {
    if (item.length > max) {
      max = item.length;
      ind = index;
      word = item;
    }
  });
  return [word, ind];
}
let r = longWord(a);
console.log(`Самое длинное слово - ${r[0]}, индекс: ${r[1]}`);
*/


//task2 вывести индексы нулевых элементов массива, удалить нули
/* //var1 
arr = [2,1,-3,-4,6,0,6,9,2,0,-43,2,0];
function zero (arr) {
  arr.map((item, index) => {
    if (item == 0) {
    console.log(index);
    arr.splice (index, 1);
                    }
  });
  return arr; 
};
console.log(zero(arr));

  //var2
arr = [2,1,-3,-4,6,0,6,9,2,0,-43,2,0];
function zero (arr) {
  let zeroIndex = [];
  arr.forEach((item, index) => {
    if (item == 0) {zeroIndex.push(index)}
  });
  console.log(zeroIndex);
  zeroIndex.reverse().forEach((item) => arr.splice (item, 1));
 return arr;
};
console.log(zero(arr));
*/
/*
//task4 средняя длина слова в предложении
let str ="средняя длина слова в предложении";
function middleLang (str) {
  let arr = str.split(" ");
  let result = arr.reduce((sum, item) => sum + item.length, 0);
  return Math.round(result / arr.length);
}
console.log(`Cредняя длина слова в предложении = ${middleLang (str)}`);
*/
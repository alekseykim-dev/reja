


//E - task

// enginx messages for users, [Jan 1, 2023 19:54:00]:
// ...📌  E-Task: shunday function tuzing nomi calculator, u mos ravishda number, string, number qabul qilsin va javob return qilsin.

// 📩 New message from group : 

// 📌  Masalan: calculator(8, "+", 2) return 10, calculator(4, "*", 2) return 8, calculator(4, "/", 2) return 2. Qoshimcha shart agar sonlar kiritilmasa yoki mahraj 0 kiritilsa 'not valid to operate' stringni return qilsin.

// const calculator = function(num1, action, num2) {
//     if(num1 ===  null || num1 % 1 !== 0 || num2 ===  null || num2 % 1 !== 0){
//         return 'not valid to operate'
//     }
//     if(action === '+') {
//         return num1 + num2
//     } else if( action === '-') {
//         return num1 - num2
//     } else if(action === '*') {
//         return num1 * num2
//     } else if(action === '/') {
//         if(num1 === 0 || num2 === 0){
//             return 'not valid to operate'
//         } else if(num1 / num2 % 1 !==0){
//             return parseFloat(num1 / num2).toFixed(1)
//         } else{
//             return num1 / num2
//         }
//     }  

// }
// console.log(calculator(10, '+', 2));
// console.log(calculator(10, '-', 2));
// console.log(calculator(10, '*', 2));
// console.log(calculator(10, '/', 2));


// console.log(calculator(10, '/', 3));


// console.log(calculator(1 , '+', 0.5));
// console.log(calculator(0.5 , '+', 1));
// console.log(calculator(  '+', 1));
// console.log(calculator(1 ,'+', ));
// console.log(calculator(2 ,'+', 2/4));
// console.log(calculator(2/4 ,'+', 2));
// console.log(calculator(10, '/', 0));
// console.log(calculator(0, '/', 10));















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NodeJS event loop and Callback Function 

console.log('Jack Ma maslahatlari');

const list = [
    'be a good student',    //0-20
    'choose the right path and make mistakes', // 20-30
    'start working for yourself',  // 30-40
    'do what you are good at',      // 40-50
    'invest in youth',              // 50-60
    'take it easy now, it is not worth it', // 60
];


function maslahatBering(a, callback) {          // callback = err, data
    if(typeof a !== 'number') callback('please input number', null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]); // null=err; list=data
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else{
        setTimeout(function() {
            callback(null, list[5]);
        }, 5000)
    }
}

// maslahatBering(10, (err, data) => {
//     if(err) console.log('ERROR', err);
//     console.log('javob:', data);
// })
// maslahatBering(25, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// })
// maslahatBering(55, (err, data) => {
//     if(err) console.log('ERROR', err);
//     console.log('javob:', data);
// })
// maslahatBering('hi', (err, data) => {
//     if(err) console.log('ERROR', err);
//     console.log('javob:', data);
// })

console.log('passed here 0')

maslahatBering(65, (err, data) => {
    if(err) console.log('ERROR', err);
    else  console.log('javob:', data);

})

console.log('pessed here 1')










// enginx messages for users, [Jan 6, 2023 11:06:42]:
// ...
// 📌  F-Task: findDoubler functionini tuzing, unga string pass bolib, function bu stringda ketma ket ikkita bir hil string qatnashgan bolsa true aks holda false return qilish kerak.

// 📩 New message from group : 

// 📌  Masalan: findDoubler('hello') return true, yoki findDoubler('helola') return false yoki findDoubler('robert5') return false.



let findDoubler = (word) => {
    
    let set = new Set();

    for(let i in word){
     if(word[i] !== ' '){
      if(set.has(word[i])) return true;
        else set.add(word[i]);
      }
    } 
    return false;
  }

  console.log(findDoubler('hello'))     // true
  console.log(findDoubler('alex'))      // flase
  console.log(findDoubler('sleeping'))  // true
  console.log(findDoubler('coding'))    // false
  
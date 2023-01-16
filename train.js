


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

// sync

// console.log('Jack Ma maslahatlari');

// const list = [
//     'be a good student',    //0-20
//     'choose the right path and make mistakes', // 20-30
//     'start working for yourself',  // 30-40
//     'do what you are good at',      // 40-50
//     'invest in youth',              // 50-60
//     'take it easy now, it is not worth it', // 60
// ];


// function maslahatBering(a, callback) {          // callback = err, data
//     if(typeof a !== 'number') callback('please input number', null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]); // null=err; list=data
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else{
        // setTimeout(function() {
//             callback(null, list[5]);
//         }, 1000)
//     }
// }



// console.log('passed here 0')

// maslahatBering(70, (err, data) => {
//     if(err) console.log('ERROR', err);
//     else{
//      console.log(data)
//     }    
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

// console.log('passed here 0')

// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR', err);
//     else  console.log('javob:', data);

// })

// console.log('pessed here 1')












////////////////////////////////////////////////////////////////////////////////////////////////
// CALLBACK Functions
// const list = [
//     'be a good student',    //0-20
//     'choose the right path and make mistakes', // 20-30
//     'start working for yourself',  // 30-40
//     'do what you are good at',      // 40-50
//     'invest in youth',              // 50-60
//     'take it easy now, it is not worth it', // 60
// ];


// function maslahatBering(a, callback) {          // callback = err, data
//     if(typeof a !== 'number') callback('please input number', null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]); // null=err; list=data
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else{
//         setInterval(function() {
//             callback(null, list[5]);
//         }, 1000)
//     }
// }



// console.log('passed here 0')

// maslahatBering(70, (err, data) => {
//     if(err) console.log('ERROR', err);
//     else{
//      console.log(data)
//     }    
// })


// console.log('pessed here 1')






// [10]Asynchronous Functions

// const list = [
//     'be a good student',    //0-20
//     'choose the right path and make mistakes', // 20-30
//     'start working for yourself',  // 30-40
//     'do what you are good at',      // 40-50
//     'invest in youth',              // 50-60
//     'take it easy now, it is not worth it', // 60
// ];


// async function maslahatBering(a) {          // throw
//     if(typeof a !== 'number') throw new Error('please input number');
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1]; // no need for callback
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else{
//         return new Promise((resolve, reject) => {           // Promise can have setTIme out
//             setInterval(() => { // promise implements set interval only once since there is no response from 'javob'
//                 resolve(list[5]);
//             }, 1000)
//         });

//         // setTimeout(function() {          // NO setTimeout in async
//         //     return list[5];
//         // }, 5000)
//     }
// };

// call with then(data) => catch(err)
// console.log('passed here 0')
// maslahatBering(25)                
//     .then(data => {
//         console.log('javob:', data);
//     })
//     .catch(err => {
//         console.log('ERROR:'. err);
//     });


// // console.log('passed here 1')



// // call with async . await            // awoids promice hell
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();











// enginx messages for users, [Jan 6, 2023 11:06:42]:
// ...
// 📌  F-Task: findDoubler functionini tuzing, unga string pass bolib, function bu stringda ketma ket ikkita bir hil string qatnashgan bolsa true aks holda false return qilish kerak.

// 📩 New message from group : 

// 📌  Masalan: findDoubler('hello') return true, yoki findDoubler('helola') return false yoki findDoubler('robert5') return false.


  
// function findDoubler(word){
//     for (let i in word) {
//         if (word[i-1] === word[i]) return true;
//     }
//     return false;
// }
//   console.log(findDoubler('hello'))    
//   console.log(findDoubler('helola'))      
//   console.log(findDoubler('robert5'))  
//   console.log(findDoubler('success'))    




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ... G-Task: Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexsini qaytarsin.


// 📌  Masalan: findBig([4, 5, 9, 12,  3]) return qilishi kerak 3ni, yoki findBig([0, 100, 5]) return 1


// // 1. Math max apply
// const num = [2, 90, 5, 88, 90, 70 ]

// let max = Math.max.apply(Math, num)

// const index = (el) => el === max

// console.log(num.findIndex(index))


// //2. Math max spread operator
// const arr = [2, 90, 5, 88, 90, 70 ]

// const max1 = Math.max(...arr);

// const index1 = arr.indexOf(max1);

// console.log(index1);


// function findBig(arr) {
//     if (arr.length === 0) return -1;

//     let max = arr[0];
//     let maxIndex = 0;

//     for (let i in arr) {
//         if (arr[i] > max) {
//             maxIndex = i;
//             max = arr[i];
//         }
//     }
//     return maxIndex;
// }
// console.log(findBig([2, 90, 5, 88, 90, 70 ]))






// async function number(num) {
//     if(typeof num !== 'number') throw new Error('not a number');
//     else if (num > 20) return '20dan katta';
//     else if (num > 30) return '30dan katta';
//     else if (num > 40) return '40dan katta';
//     else if (num > 50) return '50dan katta';
//     else return '100dan katta';
    
// }
// number(20).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })





// const numb = ['100dan kam', '100dan kop']

// function checkk(a, callback) {
//     if (typeof a !== 'number') callback ('not a number', null)
//     else if(a < 100) callback(null, numb[0])
//     else  callback(null, numb[1])

// }



// checkk(100, (err, data) => {
//     if(err) {
//         console.log('ERROR', err)
//     }
//     else{
//      console.log('result:', data)
//     }    
// })





// 📌  H-Task: Kiritilgan stringni teskari qilib chiqaradigan function tuzing, masalan: reverseString("javascript") return qilishi kerak "tpircsavaj".


// function reverseString(word) {
//     return word.split('').reverse().join('')
// }

// console.log(reverseString('JavaScript'))





// 📌  I-Task: Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive yani noldan yuqori qiymatlarni arrayda return qilsin

// 📩 New message from group : 

// 📌  Masalan: getPositive([0, -15, 5, -3, 2, -8, 9, -11]) return qilishi kerak [5, 2, 9]


function getPositive(arr) {
  return arr.filter((a) => a > 0)
}
console.log(getPositive([0, -15, 5, -3, 2, -8, 9, -11]));


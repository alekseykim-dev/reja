






//E - task

// enginx messages for users, [Jan 1, 2023 19:54:00]:
// ...📌  E-Task: shunday function tuzing nomi calculator, u mos ravishda number, string, number qabul qilsin va javob return qilsin.

// 📩 New message from group : 

// 📌  Masalan: calculator(8, "+", 2) return 10, calculator(4, "*", 2) return 8, calculator(4, "/", 2) return 2. Qoshimcha shart agar sonlar kiritilmasa yoki mahraj 0 kiritilsa 'not valid to operate' stringni return qilsin.

const calculator = function(num1, action, num2) {
    if(num1 ===  null || num1 % 1 !== 0 || num2 ===  null || num2 % 1 !== 0){
        return 'not valid to operate'
    }
    if(action === '+') {
        return num1 + num2
    } else if( action === '-') {
        return num1 - num2
    } else if(action === '*') {
        return num1 * num2
    } else if(action === '/') {
        return num1 / num2
    }  
}
console.log(calculator(10, '+', 2));
console.log(calculator(10, '-', 2));
console.log(calculator(10, '*', 2));
console.log(calculator(10, '/', 2));
console.log(calculator(1 , '+', 0.6));
console.log(calculator(  '+', 1));
console.log(calculator(2 ,'+', 3/4));

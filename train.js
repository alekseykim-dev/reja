






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
        if(num1 === 0 || num2 === 0){
            return 'not valid to operate'
        } else if(num1 / num2 % 1 !==0){
            return parseFloat(num1 / num2).toFixed(1)
        } else{
            return num1 / num2
        }
    }  

}
console.log(calculator(10, '+', 2));
console.log(calculator(10, '-', 2));
console.log(calculator(10, '*', 2));
console.log(calculator(10, '/', 2));


console.log(calculator(10, '/', 3));


console.log(calculator(1 , '+', 0.5));
console.log(calculator(0.5 , '+', 1));
console.log(calculator(  '+', 1));
console.log(calculator(1 ,'+', ));
console.log(calculator(2 ,'+', 2/4));
console.log(calculator(2/4 ,'+', 2));
console.log(calculator(10, '/', 0));
console.log(calculator(0, '/', 10));


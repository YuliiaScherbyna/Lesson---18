let salary = prompt('Enter first month salary', "1");
let salary2 = prompt('Enter second month salary', "2");
salary = Number(salary);
salary2 = Number(salary2);
let salary3 = salary + salary2;
alert(`Your month salary : ${salary3}`);
let bonus = 1;
alert(`You have extra bonus! Your total salary was: ${salary3}$  it's increased for ${bonus}$ and now it is: ${salary3 + bonus}$`);
let minSalary = 2000;
// result = salary3 + bonus >= minSalary;
// alert(`Will you work next? ${result} `); завдання номер 3
let result = salary3 + bonus >= minSalary ? "Ready to work" : "I'm out";
alert(result);

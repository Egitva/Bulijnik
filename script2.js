danila = document.getElementById('danila');
danila2 = document.getElementById('danila2');
danila3 = document.getElementById('danila3');
danila4 = document.getElementById('danila4');
danila5 = document.getElementById('danila5');
danila6 = document.getElementById('danila6');
danila.onclick = function() {
    // 1
let userName = prompt("Введите ваше имя:");
alert(`Привет, ${userName}!`);

// 2
const CURRENT_YEAR = 2025;
let birthYear = parseInt(prompt("Введите год вашего рождения:"));
let age = CURRENT_YEAR - birthYear;
alert(`Вам ${age} лет.`);

// 3
let sideLength = parseFloat(prompt("Введите длину стороны квадрата:"));
let perimeter = 4 * sideLength;
alert(`Периметр квадрата: ${perimeter}`);

// 4
let radius = parseFloat(prompt("Введите радиус окружности:"));
let area = Math.PI * Math.pow(radius, 2);
alert(`Площадь окружности: ${area.toFixed(2)}`);

// 5
let distance = parseFloat(prompt("Введите расстояние между городами (в км):"));
let time = parseFloat(prompt("Введите время, за которое хотите добраться (в часах):"));
let speed = distance / time;
alert(`Необходимая скорость: ${speed.toFixed(2)} км/ч`);

// 6
const EXCHANGE_RATE = 0.93; 
let dollars = parseFloat(prompt("Введите сумму в долларах:"));
let euros = dollars * EXCHANGE_RATE;
alert(`Сумма в евро: ${euros.toFixed(2)}`);

// 7
let flashDriveSizeGB = parseFloat(prompt("Введите объем флешки (в Гб):"));
let fileSizeMB = 820;
let flashDriveSizeMB = flashDriveSizeGB * 1024;
let filesCount = Math.floor(flashDriveSizeMB / fileSizeMB);
alert(`Количество файлов: ${filesCount}`);

// 8
let walletMoney = parseFloat(prompt("Введите сумму денег в кошельке:"));
let chocolatePrice = parseFloat(prompt("Введите цену одной шоколадки:"));
let chocolatesCount = Math.floor(walletMoney / chocolatePrice);
let change = walletMoney % chocolatePrice;
alert(`Вы можете купить ${chocolatesCount} шоколадок. Ваша сдача: ${change.toFixed(2)}`);

// 9
let number = parseInt(prompt("Введите трехзначное число:"));
let reversedNumber = (number % 10) * 100 + Math.floor((number % 100) / 10) * 10 + Math.floor(number / 100);
alert(`Число задом наперед: ${reversedNumber}`);

// 10
let userNumber = parseInt(prompt("Введите целое число:"));
let isEven = (userNumber % 2 === 0);
alert(`Число ${userNumber} является ${isEven ? "четным" : "нечетным"}.`);
}

//2 pract
danila2.onclick = function() {
    let number = parseFloat(prompt("Введите число:"));
let result = Math.pow(number, 2);
alert("Результат: " + result);

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let average = (num1 + num2) / 2;
alert("Среднее арифметическое: " + average);

let side = parseFloat(prompt("Введите длину стороны квадрата:"));
let area = side * side;
alert("Площадь квадрата: " + area);

const milesInKilometer = 0.621371;
let kilometers = parseFloat(prompt("Введите расстояние в километрах:"));
let miles = kilometers * milesInKilometer;
alert("Расстояние в милях: " + miles);

let a = parseFloat(prompt("Введите первое число:"));
let b = parseFloat(prompt("Введите второе число:"));
alert(`Результаты:
Сложение: ${a + b}
Вычитание: ${a - b}
Умножение: ${a * b}
Деление: ${a / b}`);

let a2 = parseFloat(prompt("Введите значение a:"));
let b2 = parseFloat(prompt("Введите значение b:"));
let x = b2 / a2;
alert("Значение x: " + x);

let hours = parseInt(prompt("Введите текущее количество часов:"));
let minutes = parseInt(prompt("Введите текущее количество минут:"));
let totalMinutes = hours * 60 + minutes;
let minutesUntilNextDay = 1440 - totalMinutes;
let hoursLeft = Math.floor(minutesUntilNextDay / 60);
let minutesLeft = minutesUntilNextDay % 60;
alert(`До следующего дня осталось: ${hoursLeft} часов и ${minutesLeft} минут`);

let number2 = parseInt(prompt("Введите трехзначное число:"));
let secondDigit = Math.floor((number2 % 100) / 10);
alert("Вторая цифра: " + secondDigit);

let number3 = prompt("Введите пятизначное число:");
let lastDigit = number3.slice(-1);
let newNumber = lastDigit + number3.slice(0, -1);
alert("Новое число: " + newNumber);

let sales = parseFloat(prompt("Введите общую сумму продаж за месяц:"));
let salary = 250 + (sales * 0.1);
alert("Зарплата работника: $" + salary.toFixed(2));
}

danila3.onclick = function() {
    let number = prompt("Введите число:");
    if (number > 0) {
        alert("Число положительное");
    } 
    else if (number < 0) {
        alert("Число отрицательное");
    } 
    else {
        alert("Число равно нулю");
    }
    let age = prompt("Введите ваш возраст:");
    if (age >= 0 && age <= 120) {
        alert("Возраст корректен");
    } 
    else {
        alert("Возраст некорректен");
    }
    let number2 = prompt("Введите число:");
    let absoluteValue = Math.abs(number2);
    alert("Модуль числа: " + absoluteValue);
    let hours = prompt("Введите часы:");
    let minutes = prompt("Введите минуты:");
    let seconds = prompt("Введите секунды:");
 
    if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60) {
        alert("Время корректно");
    } 
    else {
        alert("Время некорректно");
    }
    let x = prompt("Введите координату x:");
    let y = prompt("Введите координату y:");
 
    if (x > 0 && y > 0) {
        alert("Точка находится в первой четверти");
    } 
    else if (x < 0 && y > 0) {
        alert("Точка находится во второй четверти");
    } 
    else if (x < 0 && y < 0) {
        alert("Точка находится в третьей четверти");
    } 
    else if (x > 0 && y < 0) {
        alert("Точка находится в четвертой четверти");
    } 
    else if (x == 0 && y != 0) {
        alert("Точка находится на оси Y");
    } 
    else if (y == 0 && x != 0) {
        alert("Точка находится на оси X");
    } 
    else {
        alert("Точка находится в начале координат");
    }

    //switch  

    let monthNumber = prompt("Введите номер месяца (1-12):");
    switch (monthNumber) {
        case "1":
            alert("Январь");
            break;
        case "2":
            alert("Февраль");
            break;
        case "3":
            alert("Март");
            break;
        case "4":
            alert("Апрель");
            break;
        case "5":
            alert("Май");
            break;
        case "6":
            alert("Июнь");
            break;
        case "7":
            alert("Июль");
            break;
        case "8":
            alert("Август");
            break;
        case "9":
            alert("Сентябрь");
            break;
        case "10":
            alert("Октябрь");
            break;
        case "11":
            alert("Ноябрь");
            break;
        case "12":
            alert("Декабрь");
            break;
        default:
            alert("Некорректный номер месяца");
    }
    
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
    let operator = prompt("Введите знак операции (+, -, *, /):");
 
    switch (operator) {
        case "+":
            alert("Результат: " + (num1 + num2));
            break;
        case "-":
            alert("Результат: " + (num1 - num2));
            break;
        case "*":
            alert("Результат: " + (num1 * num2));
            break;
        case "/":
            alert("Результат: " + (num1 / num2));
            break;
        default:
            alert("Некорректный оператор");
    }
    
    let num11 = prompt("Введите первое число:");
    let num21 = prompt("Введите второе число:");
    let largerNumber = (num11 > num21) ? num11 : num21;
    alert("Большее число: " + largerNumber);

    //dfkwo

    let number3 = prompt("Введите число:");
    let isMultipleOf5 = (number3 % 5 === 0) ? "Кратно 5" : "Не кратно 5";
    alert(isMultipleOf5);
    
    let planet = prompt("Введите название планеты:").toLowerCase();
    let greeting = (planet === "земля") ? "Привет, землянин!" : "Привет, инопланетянин!";
    alert(greeting); 
}
danila4.onclick = function() {
    let count0 = parseInt(prompt("Введите количество символов #:"));
let i = 0;
while (i < count0) {
    alert("# ");
    i++;
}
    let number = parseInt(prompt("Введите число:"));
while (number >= 0) {
    alert(number + " ");
    number--;
}
let num0 = parseFloat(prompt("Введите число:"));
let power = parseInt(prompt("Введите степень:"));
let result = 1;
let i1 = 0;
while (i1 < power) {
    result *= num0;
    i1++;
}
alert(`Результат: ${result}`);
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));
let min = Math.min(num1, num2);
let i2 = 1;
alert(`Общие делители ${num1} и ${num2}: `);
while (i2 <= min) {
    if (num1 % i2 === 0 && num2 % i2 === 0) {
        alert(i2 + " ");
    }
    i2++;
}
let num3 = parseInt(prompt("Введите число:"));
let factorial = 1;
let i3 = 1;
while (i3 <= num3) {
    factorial *= i3;
    i3++;
}
alert(`Факториал ${num3} равен ${factorial}`);
//

let answer;
do {
    answer = parseInt(prompt("Решите пример: 2 + 2 * 2 ="));
    if (answer !== 6) {
        alert("Неверно! Попробуйте еще раз.");
    }
} while (answer !== 6);
alert("Правильно!");
let num = 1000;
let count = 0;
do {
    num /= 2;
    count++;
} while (num >= 50);
alert(`Результат: ${num}, количество делений: ${count}`);
let divisor = parseInt(prompt("Введите число:"));
alert(`Числа от 1 до 100, кратные ${divisor}: `);
for (let i = 1; i <= 100; i++) {
    if (i % divisor === 0) {
        alert(i + " ");
    }
}
let num5 = parseInt(prompt("Введите число:"));
let isPrime = true;
if (num5 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num5); i++) {
        if (num5 % i === 0) {
            isPrime = false;
            break;
        }
    }
}
alert(`${num5} ${isPrime ? "является" : "не является"} простым числом`);
}
danila5.onclick = function() {
    // 1. Функция, которая возвращает меньшее из двух чисел
function getMin(a, b) {
    return a < b ? a : b;
}

// 2. Функция возведения числа в степень
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// 3. Функция калькулятора
function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return NaN;
    }
}

// 4. Функция проверки числа на простоту
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// 5. Функция вывода таблицы умножения
function multiplicationTable(n) {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${n} * ${i} = ${n * i}\n`;
    }
    return table;
}

// 6. Функция остатка от деления без использования %
function modulus(a, b) {
    return a - Math.floor(a / b) * b;
}

// 7. Функция суммы от 1 до 5 чисел
function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// 8. Функция возвращающая максимальное из 1-5 чисел
function getMax(...numbers) {
    return Math.max(...numbers);
}

// 9. Функция вывода четных/нечетных чисел в диапазоне
function printEvenOdd(start, end, isEven) {
    let result = '';
    for (let i = start; i <= end; i++) {
        if ((i % 2 === 0) === isEven) {
            result += i + ' ';
        }
    }
    return result;
}

// 10. Функция для определения високосного года
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

// 10. Функция получения следующей даты
function getNextDate(day, month, year) {
    const daysInMonth = [
        31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 
        31, 31, 30, 31, 30, 31
    ];
    
    day++;
    if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    }
    
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

alert('1. Минимальное: ' + getMin(parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру"))));
alert('2. в степени: ' + power(parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру"))));
alert('3. сумма: ' + calculate(parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), '+'));
alert('4. Число простое? ' + isPrime(parseInt(prompt("введите цифру"))));
alert('5. Таблица умножения:\n' + multiplicationTable(parseInt(prompt("введите цифру"))));
alert('6. Остаток от деления: ' + modulus(parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру"))));
alert('7. Сумма чисел: ' + sumNumbers(parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру"))));
alert('8. Максимальное: ' + getMax(parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру"))));
alert('9. Четные числа от: ' + printEvenOdd(parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), true));
alert('10. Следующий день после: ' + getNextDate(parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру")), parseInt(prompt("введите цифру"))));

for (let i = 2; i <= 9; i++) {
    alert(`Таблица умножения для ${i}:\n${multiplicationTable(i)}`);
}
}
danila6.onclick = function() {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    
    const num1 = parseInt(prompt("Введите число для вычисления факториала:"));
    alert(`Факториал числа ${num1} равен ${factorial(num1)}`);
    function printRangeAsc(start, end) {
        if (start > end) {
            return;
        }
        alert(start);
        printRangeAsc(start + 1, end);
    }
    
    function printRangeDesc(start, end) {
        if (start > end) {
            return;
        }
        printRangeDesc(start + 1, end);
        alert(start);
    }
    
    const start = parseInt(prompt("Введите начало диапазона:"));
    const end = parseInt(prompt("Введите конец диапазона:"));
    
    alert("Числа в прямом порядке:");
    printRangeAsc(start, end);
    
    alert("Числа в обратном порядке:");
    printRangeDesc(start, end);
    function reverseNumber(n, reversed = 0) {
        if (n === 0) {
            return reversed;
        } else {
            return reverseNumber(Math.floor(n / 10), reversed * 10 + n % 10);
        }
    }
    
    const num2 = parseInt(prompt("Введите число для разворота:"));
    alert(`Число ${num2} задом наперед: ${reverseNumber(num2)}`);
    function sumDigits(n) {
        if (n === 0) {
            return 0;
        } else {
            return n % 10 + sumDigits(Math.floor(n / 10));
        }
    }
    
    const num3 = parseInt(prompt("Введите число для подсчета суммы цифр:"));
    alert(`Сумма цифр числа ${num3} равна ${sumDigits(num3)}`);
    function nestedParentheses(n) {
        if (n === 0) {
            return "";
        } else {
            return "(" + nestedParentheses(n - 1) + ")";
        }
    }
    
    const num4 = parseInt(prompt("Введите количество вложенных скобок:"));
    alert(`Вложенные скобки: ${nestedParentheses(num4)}`);
    function nestedParentheses(n) {
        if (n === 0) {
            return "";
        } else {
            return "(" + nestedParentheses(n - 1) + ")";
        }
    }
    
    const num = parseInt(prompt("Введите количество вложенных скобок:"));
    alert(`Вложенные скобки: ${nestedParentheses(num)}`);
}
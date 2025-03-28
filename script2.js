danila = document.getElementById('danila');
danila2 = document.getElementById('danila2');
danila3 = document.getElementById('danila3');
danila4 = document.getElementById('danila4');
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
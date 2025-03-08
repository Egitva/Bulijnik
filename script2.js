danila = document.getElementById('danila');
danila2 = document.getElementById('danila2');
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
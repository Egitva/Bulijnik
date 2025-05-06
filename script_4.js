danila = document.getElementById('danila');
danila2 = document.getElementById('danila2');
danila3 = document.getElementById('danila3');
danila4 = document.getElementById('danila4');

class Marker {
    constructor(color, inkPercentage) {
        this.color = color;
        this.inkPercentage = inkPercentage;
    }

    print(text) {
        let output = '';
        for (const char of text) {
            if (this.inkPercentage <= 0) break;
            
            if (char !== ' ') {
                this.inkPercentage -= 0.5;
                if (this.inkPercentage < 0) break;
            }
            output += char;
        }
        console.log(`%c${output}`, `color: ${this.color}`);
        alert(`Printed text in ${this.color}: ${output}\nRemaining ink: ${this.inkPercentage}%`);
    }
}

class RefillableMarker extends Marker {
    refill(inkAmount) {
        this.inkPercentage = Math.min(100, this.inkPercentage + inkAmount);
        alert(`Marker refilled. Current ink: ${this.inkPercentage}%`);
    }
}

danila.onclick = function() {
    const simpleMarker = new Marker('blue', 10);
simpleMarker.print("Hello World!");

const refillMarker = new RefillableMarker('red', 5);
refillMarker.print("This is a test");
refillMarker.refill(20);
refillMarker.print("This is another test");
}

class ExtendedDate extends Date {
    constructor(...args) {
        super(...args);
    }

    toText() {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFuture() {
        const now = new Date();
        return this >= now;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    nextDate() {
        const next = new ExtendedDate(this);
        next.setDate(next.getDate() + 1);
        return next;
    }
}

danila2.onclick = function() {
const dateInput = prompt("Enter a date (YYYY-MM-DD format):");
const extendedDate = new ExtendedDate(dateInput);
}
alert(`Date in text: ${extendedDate.toText()}\n` +
      `Is future date: ${extendedDate.isFuture()}\n` +
      `Is leap year: ${extendedDate.isLeapYear()}\n` +
      `Next date: ${extendedDate.nextDate().toLocaleDateString()}`);

      class Employee {
        constructor(name, position, department) {
            this.name = name;
            this.position = position;
            this.department = department;
        }
    }
    
    class EmpTable {
        constructor(employees) {
            this.employees = employees;
        }
    
        getHtml() {
            let html = '<table border="1"><tr><th>Name</th><th>Position</th><th>Department</th></tr>';
            
            for (const emp of this.employees) {
                html += `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.department}</td></tr>`;
            }
            
            html += '</table>';
            return html;
        }
    }
    
    const employees = [];
    const count = parseInt(prompt("How many employees to add?"));
    
    for (let i = 0; i < count; i++) {
        const name = prompt(`Enter employee ${i+1} name:`);
        const position = prompt(`Enter employee ${i+1} position:`);
        const department = prompt(`Enter employee ${i+1} department:`);
        employees.push(new Employee(name, position, department));
    }
danila3.onclick = function() {    
    const empTable = new EmpTable(employees);
    document.write("Employee Table HTML:\n" + empTable.getHtml());
}
    class StyledEmpTable extends EmpTable {
        getStyles() {
            return `<style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-family: Arial, sans-serif;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    text-align: left;
                }
                td {
                    padding: 8px;
                    border-bottom: 1px solid #ddd;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
                tr:hover {
                    background-color: #ddd;
                }
            </style>`;
        }
    
        getHtml() {
            return this.getStyles() + super.getHtml();
        }
    }
    
danila4.onclick = function() {
    const styledTable = new StyledEmpTable(employees);
    alert("Styled Employee Table HTML:\n" + styledTable.getHtml());
}
//Map example

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers are: ", doubled); // [2, 4, 6, 8, 10]

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];  

let employeeNames = employees.map(function (emp) {
    emp.gender == "male" ? emp.sal = emp.sal + 500 : emp.sal = emp.sal + 1000;
    emp.gender == "female" ? emp.name = "Ms. " + emp.name : emp.name = "Mr. " + emp.name;
    
    
    return emp;
});
console.log("Updated Employee Salaries: ", employeeNames);
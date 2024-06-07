// Parent object - employee
let employee = {
    employeeName: "John Doe",
    employeeId: "E123",
    salary: 50000
};

// Child object - manager inheriting from employee
let manager = Object.create(employee);
manager.managerName = "Jane Smith";
manager.branch = "New York";

// Displaying all properties
console.log("Employee Name:", manager.employeeName);
console.log("Employee ID:", manager.employeeId);
console.log("Salary:", manager.salary);
console.log("Manager Name:", manager.managerName);
console.log("Branch:", manager.branch);

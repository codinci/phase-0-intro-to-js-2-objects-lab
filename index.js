// Write your solution in this file!
const employee = { };
employee.name;
employee.streetAddress;

// const obj = {
//     fName: "Bob",
//     street: "Nairobi"
// }

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

// console.log(updateEmployeeWithKeyAndValue(obj,"street", "Mombasa"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// console.log(destructivelyUpdateEmployeeWithKeyAndValue(obj, "fName", "Lemuel"));

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

// console.log(deleteFromEmployeeByKey(obj, "fName"));

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// console.log(destructivelyDeleteFromEmployeeByKey(obj, 'street'));

module.exports = function report(functionName) {
  const employees = [
    { name: "Max", age: 17 },
    { name: "Sepp", age: 18 },
    { name: "Nina", age: 15 },
    { name: "Mike", age: 51 }
  ];

  let suitableEmployees = [];
  if (functionName === "listAbove18") {
    employees.forEach(employee => {
      if (employee.age >= 18) {
        suitableEmployees.push(employee.name);
      }
    });
    return suitableEmployees;
  }

  if (functionName === "sortByName") {
    const sortedEmployees = employees.sort(compare);
    sortedEmployees.forEach(employee => {
      suitableEmployees.push(employee.name);
    });
    return suitableEmployees;
  }

  if (functionName === "sortNameInDescendingOrder") {
    const sortedEmployees = employees.sort(compareInDescent);
    sortedEmployees.forEach(employee => {
      suitableEmployees.push(employee.name);
    });
    return suitableEmployees;
  }

  if (functionName === "capitalizeNames") {
    employees.forEach(employee => {
      suitableEmployees.push(employee.name.toUpperCase());
    });
    return suitableEmployees;
  }

  function compare(employeeOne, employeeTwo) {
    const nameOne = employeeOne.name;
    const nameTwo = employeeTwo.name;

    let comparison = 0;
    if (nameOne > nameTwo) {
      comparison = 1;
    } else if (nameOne < nameTwo) {
      comparison = -1;
    }
    return comparison;
  }

  function compareInDescent(employeeOne, employeeTwo) {
    const nameOne = employeeOne.name;
    const nameTwo = employeeTwo.name;

    let comparison = 0;
    if (nameOne > nameTwo) {
      comparison = -1;
    } else if (nameOne < nameTwo) {
      comparison = 1;
    }
    return comparison;
  }
};

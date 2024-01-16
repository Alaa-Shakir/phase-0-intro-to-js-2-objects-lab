// Write your solution in this file!
const employee = {
  name: "Alaa",
  streetAddress: "hasan harayn",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = { ...employee };

  newObj["streetAddress"] = "11 Broadway";

  return newObj;
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee["streetAddress"] = "12 Broadway";

    return employee;
  }

  function deleteFromEmployeeByKey(employee, key){ 
    const newObj = {...employee};
    delete newObj.name;
    return newObj;
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyDeleteFromEmployeeByKey(employee, key){ 
    delete employee.name;
    return employee;
  }
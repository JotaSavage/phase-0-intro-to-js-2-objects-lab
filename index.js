
const employee = {
    name: 'John',
    age: 30,
    role: 'Developer',
  };
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

   function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Deletes a specified key from the original employee destructively and returns the modified employee.
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object with the properties of the original employee and the updated key-value pair
    const updatedEmployee = { ...employee, [key]: value };
    return updatedEmployee;
  }
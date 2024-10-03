// server/controllers/employeeController.js
const Employee = require('../models/Employee');

// Get all employees with sorting, filtering, pagination
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .sort({ f_Name: 1 }) // Sort by name
      .skip(parseInt(req.query.skip) || 0)
      .limit(parseInt(req.query.limit) || 10);

    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
  const { f_Id, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course } = req.body;

  try {
    const emailExists = await Employee.findOne({ f_Email });
    if (emailExists) return res.status(400).json({ message: 'Email already exists' });

    const employee = new Employee({
      f_Id,
      f_Name,
      f_Email,
      f_Mobile,
      f_Designation,
      f_gender,
      f_Course,
    });

    await employee.save();
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update employee details
exports.updateEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

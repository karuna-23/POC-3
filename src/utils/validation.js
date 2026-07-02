// Student Name

export function validateName(name) {
  if (!name.trim()) {
    return "Student name is required.";
  }

  if (name.length < 3) {
    return "Name should be at least 3 characters.";
  }

  return "";
}

// Department

export function validateDepartment(dept) {
  if (!dept) {
    return "Department is required.";
  }

  return "";
}

// Year

export function validateYear(year) {
  if (!year) {
    return "Year is required.";
  }

  return "";
}

// Status

export function validateStatus(status) {
  if (!status) {
    return "Status is required.";
  }

  return "";
}

// Complete Validation

export function validateStudent(student) {
  const errors = {};

  errors.name = validateName(student.name);
  errors.dept = validateDepartment(student.dept);
  errors.year = validateYear(student.year);
  errors.status = validateStatus(student.status);

  return errors;
}
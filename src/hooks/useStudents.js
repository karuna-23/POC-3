import { useState } from "react";
import studentData from "../data/students";

function useStudents() {
  const [students, setStudents] = useState(studentData);

  // Add Student
  function addStudent(student) {
    setStudents([
      ...students,
      {
        ...student,
        id: "STU-" + Math.floor(Math.random() * 10000),
      },
    ]);
  }

  // Delete Student
  function deleteStudent(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  }

  // Edit Student
  function editStudent(updatedStudent) {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );
  }

  return {
    students,
    setStudents,
    addStudent,
    deleteStudent,
    editStudent,
  };
}

export default useStudents;
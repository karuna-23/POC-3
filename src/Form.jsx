import { useState } from "react";

export default function RegisterStudent({ closeModal }) {
  const initialState = {
    studentId: "",
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    department: "",
    year: "",
    address: "",
    status: "",
  };

  const [student, setStudent] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !student.studentId ||
      !student.fullName ||
      !student.email ||
      !student.phone
    ) {
      alert("Please fill all required fields");
      return;
    }

    console.log(student);

    alert("Student Registered Successfully");

    setStudent(initialState);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl w-[700px] max-h-[90vh] overflow-y-auto p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">
            Register new student
          </h2>

          <button
            onClick={closeModal}
            className="text-3xl text-gray-500 hover:text-red-500"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >

          <div>
            <label className="font-semibold">Student ID</label>

            <input
              type="text"
              name="studentId"
              value={student.studentId}
              onChange={handleChange}
              placeholder="STU-2041"
              className="w-full mt-2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="font-semibold">Full Name</label>

            <input
              type="text"
              name="fullName"
              value={student.fullName}
              onChange={handleChange}
              placeholder="Aanya Sharma"
              className="w-full mt-2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>

            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="name@gmail.com"
              className="w-full mt-2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="font-semibold">Phone</label>

            <input
              type="tel"
              name="phone"
              value={student.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full mt-2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="font-semibold">Gender</label>

            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Date of Birth</label>

            <input
              type="date"
              name="dateOfBirth"
              value={student.dateOfBirth}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Department</label>

            <select
              name="department"
              value={student.department}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3"
            >
              <option value="">Select</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>Electrical</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Academic Year</label>

            <select
              name="year"
              value={student.year}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3"
            >
              <option value="">Select</option>
              <option>Year 1</option>
              <option>Year 2</option>
              <option>Year 3</option>
              <option>Year 4</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="font-semibold">Address</label>

            <textarea
              rows="4"
              name="address"
              value={student.address}
              onChange={handleChange}
              placeholder="Street, City"
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Status</label>

            <select
              name="status"
              value={student.status}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3"
            >
              <option value="">Select</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="col-span-2 flex justify-end gap-4 mt-5">

            <button
              type="button"
              onClick={closeModal}
              className="border px-6 py-3 rounded-lg hover:bg-blue-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800"
            >
              Register Student
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

function AddStudentModal({
  isOpen,
  onClose,
  fetchStudents,
}) {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    dept: "",
    year: "",
    address: "",
    status: "ACTIVE",
  });

  if (!isOpen) return null;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await axios.get("http://localhost:3001/students");

    const students = response.data;

    const lastStudent = students[students.length - 1];

    const nextStudentId = lastStudent
      ? Number(lastStudent.studentId.split("-")[1]) + 1
      : 1001;

    const newStudent = {
      ...formData,
      studentId: `STU-${nextStudentId}`,
    };

    await axios.post(
      "http://localhost:3001/students",
      newStudent
    );

    fetchStudents();


    onClose();

    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
      gender: "Female",
      dob: "",
      dept: "",
      year: "",
      address: "",
      status: "ACTIVE",
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white w-[750px] max-h-[90vh] overflow-y-auto rounded-xl p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Register New Student
          </h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div className="grid grid-cols-2 gap-5">

            <div>

              <label className="font-semibold">
                Student ID
              </label>

              <input
                type="text"
                name="id"
                placeholder="STU-2041"
                value={formData.id}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Aanya Sharma"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="name@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Date of Birth
              </label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                Department
              </label>

              <select
                name="dept"
                value={formData.dept}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option value="">Select</option>
                <option>Computer Science</option>
                <option>Mechanical</option>
                <option>Electrical</option>
                <option>IT</option>
                <option>Business Administration</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Academic Year
              </label>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option value="">Select</option>
                <option>Year 1</option>
                <option>Year 2</option>
                <option>Year 3</option>
                <option>Year 4</option>
              </select>

            </div>

          </div>

          <div>

            <label className="font-semibold">
              Address
            </label>

            <textarea
              rows="4"
              name="address"
              placeholder="Street, City"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          <div className="w-1/2">

            <label className="font-semibold">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            >
              <option>ACTIVE</option>
              <option>INACTIVE</option>
            </select>

          </div>

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="border px-6 py-3 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#8B2635] text-white px-8 py-3 rounded-lg hover:bg-[#73212c]"
            >
              Register Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddStudentModal;
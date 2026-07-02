import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";

function EditStudentModal({
    isOpen,
    onClose,
    selectedStudent,
    fetchStudents,
}) {
    const [formData, setFormData] = useState({
        studentId: "",
        name: "",
        dept: "",
        year: "",
        gender: "",
        status: "ACTIVE",
    });
    // Load selected student data into form
    useEffect(() => {
        if (selectedStudent) {
            setFormData(selectedStudent);
        }
    }, [selectedStudent]);

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

    try {
        await axios.put(
            `http://localhost:3001/students/${selectedStudent.id}`,
            formData
        );

        fetchStudents(); // Refresh table

        onClose();
    } catch (error) {
        console.error(error);
    }
}
    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white w-[500px] rounded-xl shadow-lg p-6">

                {/* Header */}

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">
                        Edit Student
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    {/* Student ID */}

                    <div>

                        <label className="block mb-1 font-medium">
                            Student ID
                        </label>

                        <input
                            type="text"
                            value={formData.studentId}
                            disabled
                            className="w-full border rounded-lg p-3 bg-gray-100"
                        />

                    </div>

                    {/* Name */}

                    <div>

                        <label className="block mb-1 font-medium">
                            Student Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#8B2635] outline-none"
                        />

                    </div>

                    {/* Department */}

                    <div>

                        <label className="block mb-1 font-medium">
                            Department
                        </label>

                        <select
                            name="dept"
                            value={formData.dept}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >
                            <option>Computer Science</option>
                            <option>Mechanical</option>
                            <option>Electrical</option>
                            <option>Business Administration</option>
                            <option>IT</option>
                        </select>

                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Gender
                        </label>

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Year */}

                    <div>

                        <label className="block mb-1 font-medium">
                            Year
                        </label>

                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >
                            <option>Year 1</option>
                            <option>Year 2</option>
                            <option>Year 3</option>
                            <option>Year 4</option>
                        </select>

                    </div>

                    {/* Status */}

                    <div>

                        <label className="block mb-1 font-medium">
                            Status
                        </label>

                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >
                            <option>ACTIVE</option>
                            <option>INACTIVE</option>
                        </select>

                    </div>

                    {/* Buttons */}

                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="border px-5 py-2 rounded-lg hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-[#8B2635] text-white px-5 py-2 rounded-lg hover:bg-[#6f1f2b]"
                        >
                            Save Changes
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default EditStudentModal;
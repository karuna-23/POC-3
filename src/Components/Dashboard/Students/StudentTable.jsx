import { useState } from "react";
import { Plus, Search, SlidersHorizontal } from "lucide-react";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";
import StatusBadge from "./StatusBadge";
import IdTag from "./IdTag";
import ActionButtons from "./ActionButtons";
import AddStudentModal from "../../Modals/AddStudentModal";
import EditStudentModal from "../../Modals/EditStudentModal";
import ViewStudentModal from "../../Modals/ViewStudentModal";
import DeleteModal from "../../Modals/DeleteModal";


function StudentTable({ students, fetchStudents }) {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("");
    const [status, setStatus] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");


    // Search + Filter

    const filteredStudents = students.filter((student) => {
        return (
            (student.name.toLowerCase().includes(search.toLowerCase()) ||
                student.id.toLowerCase().includes(search.toLowerCase()) ||
                student.dept.toLowerCase().includes(search.toLowerCase())) &&

            (department === "" || student.dept === department) &&

            (year === "" || student.year === year) &&

            (gender === "" || student.gender === gender) &&

            (status === "" || student.status === status)
        );
    });

    // Pagination

    const studentsPerPage = 5;

    const totalPages = Math.ceil(
        filteredStudents.length / studentsPerPage
    );

    const lastIndex = currentPage * studentsPerPage;

    const firstIndex = lastIndex - studentsPerPage;

    const currentStudents = filteredStudents.slice(
        firstIndex,
        lastIndex
    );

    // Action Functions

    function handleView(student) {
        setSelectedStudent(student);
        setIsViewOpen(true);
    }

    function handleEdit(student) {
        setSelectedStudent(student);
        setIsEditOpen(true);
    }

    function handleDelete(student) {
        setSelectedStudent(student);
        setIsDeleteOpen(true);
    }

    return (
        <div>

            {/* Student Management Header */}

            <div className="flex justify-between items-start mb-6">

                <div>

                    <h1 className="text-4xl font-bold text-gray-900">
                        Student Management
                    </h1>

                    <p className="text-gray-500 mt-1">
                        {filteredStudents.length} of {students.length} students shown
                    </p>

                </div>

                <button
                    onClick={() => setIsAddOpen(true)}
                    className="bg-[#8B2635] hover:bg-[#741f2d] text-white px-6 py-3 rounded-xl flex items-center gap-2"
                >
                    <Plus size={20} />
                    Add Student
                </button>

            </div>

            {/* Search */}

            <div className="flex items-center gap-3 mb-5">

                <div className="relative flex-1 max-w-md">

                    <Search
                        className="absolute left-4 top-3 text-gray-400"
                        size={20}
                    />

                    <input
                        type="text"
                        placeholder="Search by name, ID, email, or phone"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#8B2635]"
                    />

                </div>

                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="bg-[#1C2333] text-white px-6 py-3 rounded-xl flex items-center gap-2"
                >
                    <SlidersHorizontal size={18} />
                    Filters
                </button>

            </div>

            {/* Filter Section */}

            {showFilters && (

                <div className="bg-white border rounded-2xl p-6 mb-6">

                    <div className="grid grid-cols-5 gap-4 items-end">

                        <div>

                            <label className="font-semibold mb-2 block">
                                Department
                            </label>

                            <select
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className="w-full border rounded-xl p-3"
                            >
                                <option value="">All</option>
                                <option>Computer Science</option>
                                <option>Mechanical</option>
                                <option>Electrical</option>
                                <option>Business Administration</option>
                                <option>IT</option>
                            </select>

                        </div>

                        <div>

                            <label className="font-semibold mb-2 block">
                                Academic Year
                            </label>

                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="w-full border rounded-xl p-3"
                            >
                                <option value="">All</option>
                                <option value="Year 1">Year 1</option>
                                <option value="Year 2">Year 2</option>
                                <option value="Year 3">Year 3</option>
                                <option value="Year 4">Year 4</option>
                            </select>

                        </div>

                        <div>

                            <label className="font-semibold mb-2 block">
                                Gender
                            </label>

                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full border rounded-xl p-3"
                            >
                                <option value="">All</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>

                        </div>

                        <div>

                            <label className="font-semibold mb-2 block">
                                Status
                            </label>

                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full border rounded-xl p-3"
                            >
                                <option value="">All</option>
                                <option>ACTIVE</option>
                                <option>INACTIVE</option>
                            </select>

                        </div>

                        <div>

                            <button
                                onClick={() => {
                                    setSearch("");
                                    setDepartment("");
                                    setStatus("");
                                }}
                                className="text-[#8B2635] font-semibold mt-7"
                            >
                                Clear all
                            </button>

                        </div>

                    </div>

                </div>

            )}

            {/* Table */}

            <div className="bg-white rounded-xl shadow border overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="px-5 py-4 text-left">ID</th>

                            <th className="px-5 py-4 text-left">Name</th>

                            <th className="px-5 py-4 text-left">Department</th>

                            <th className="px-5 py-4 text-left">Year</th>

                            <th className="px-5 py-4 text-left">Status</th>

                            <th className="px-5 py-4 text-center">Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {currentStudents.map((student) => (

                            <tr
                                key={student.id}
                                className="border-t hover:bg-gray-50"
                            >

                                <td className="px-5 py-4">
                                    <IdTag id={student.studentId} />
                                </td>

                                <td className="px-5 py-4 font-semibold">
                                    {student.name}
                                </td>

                                <td className="px-5 py-4">
                                    {student.dept}
                                </td>

                                <td className="px-5 py-4">
                                    {student.year}
                                </td>

                                <td className="px-5 py-4">
                                    <StatusBadge status={student.status} />
                                </td>

                                <td className="px-5 py-4 text-center">
                                    <ActionButtons
                                        student={student}
                                        onView={handleView}
                                        onEdit={handleEdit}
                                        onDelete={handleDelete}
                                    />
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Pagination */}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
            <AddStudentModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                fetchStudents={fetchStudents}
            />

            <EditStudentModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                selectedStudent={selectedStudent}
                fetchStudents={fetchStudents}
            />
            <ViewStudentModal
                isOpen={isViewOpen}
                onClose={() => setIsViewOpen(false)}
                selectedStudent={selectedStudent}
            />

            <DeleteModal
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                selectedStudent={selectedStudent}
                fetchStudents={fetchStudents}
            />
        </div>
    );
}

export default StudentTable;
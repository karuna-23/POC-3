import { X } from "lucide-react";

function ViewStudentModal({
  isOpen,
  onClose,
  selectedStudent,
}) {
  if (!isOpen || !selectedStudent) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-lg w-[450px]">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-5">

          <h2 className="text-2xl font-bold">
            Student Details
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-4">

          <div>
            <p className="text-gray-500">Student ID</p>
            <h3 className="font-semibold">
              {selectedStudent.studentId}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Name</p>
            <h3 className="font-semibold">
              {selectedStudent.name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Department</p>
            <h3 className="font-semibold">
              {selectedStudent.dept}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Year</p>
            <h3 className="font-semibold">
              {selectedStudent.year}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Status</p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold

              ${
                selectedStudent.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {selectedStudent.status}
            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t p-5 flex justify-end">

          <button
            onClick={onClose}
            className="bg-[#8B2635] text-white px-5 py-2 rounded-lg"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default ViewStudentModal;
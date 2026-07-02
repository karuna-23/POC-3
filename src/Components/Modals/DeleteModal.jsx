import { Trash2 } from "lucide-react";
import axios from "axios";

function DeleteModal({
   isOpen,
  onClose,
  selectedStudent,
  fetchStudents,  
}) {
  if (!isOpen || !selectedStudent) return null;

  async function handleDelete() {
    try {
        await axios.delete(
            `http://localhost:3001/students/${selectedStudent.id}`
        );

        fetchStudents(); // Refresh table

        onClose();
    } catch (error) {
        console.error(error);
    }
}

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-lg w-[420px] p-6">

        <div className="flex justify-center mb-4">

          <div className="bg-red-100 p-4 rounded-full">

            <Trash2
              size={35}
              className="text-red-600"
            />

          </div>

        </div>

        <h2 className="text-2xl font-bold text-center">

          Delete Student

        </h2>

        <p className="text-center text-gray-500 mt-3">

          Are you sure you want to delete

          <span className="font-semibold">

            {" "}{selectedStudent.name}

          </span>

          ?

        </p>

        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;
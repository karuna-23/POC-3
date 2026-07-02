import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

function ActionButtons({
  student,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex items-center justify-center gap-3">

      {/* View */}

      <button
        onClick={() => onView(student)}
        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
      >
        <Eye size={18} />
      </button>

      {/* Edit */}

      <button
        onClick={() => onEdit(student)}
        className="p-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition"
      >
        <Pencil size={18} />
      </button>

      {/* Delete */}

      <button
        onClick={() => onDelete(student)}
        className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}

export default ActionButtons;
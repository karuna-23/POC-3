import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-between items-center mt-6">

      <p className="text-gray-600">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex gap-3">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
          className="flex items-center gap-2 px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-100"
        >
          <ChevronLeft size={18} />

          Previous
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
          className="flex items-center gap-2 px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-100"
        >
          Next

          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}

export default Pagination;
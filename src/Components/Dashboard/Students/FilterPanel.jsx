import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

function FilterPanel({
  department,
  setDepartment,
  year,
  setYear,
  gender,
  setGender,
  status,
  setStatus,
}) {

  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>

      {/* Filter Button */}

      <button
        onClick={() => setShowFilters(!showFilters)}
        className="
        bg-[#1E293B]
        text-white
        px-6
        py-4
        rounded-xl
        flex
        items-center
        gap-3"
      >

        <SlidersHorizontal size={20} />

        Filters

      </button>

      {/* Filter Card */}

      {showFilters && (

        <div className="mt-6 bg-white border rounded-2xl p-6 shadow">

          <div className="grid grid-cols-2 gap-6">

            {/* Department */}

            <div>

              <label className="font-semibold block mb-2">
                Department
              </label>

              <select
                value={department}
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              >
                <option value="">All</option>
                <option>Computer Science</option>
                <option>Mechanical</option>
                <option>Electrical</option>
                <option>IT</option>
                <option>Business Administration</option>
              </select>

            </div>

            {/* Academic Year */}

            <div>

              <label className="font-semibold block mb-2">
                Academic Year
              </label>

              <select
                value={year}
                onChange={(e) =>
                  setYear(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              >
                <option value="">All</option>
                <option>Year 1</option>
                <option>Year 2</option>
                <option>Year 3</option>
                <option>Year 4</option>
              </select>

            </div>

            {/* Gender */}

            <div>

              <label className="font-semibold block mb-2">
                Gender
              </label>

              <select
                value={gender}
                onChange={(e) =>
                  setGender(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              >
                <option value="">All</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            {/* Status */}

            <div>

              <label className="font-semibold block mb-2">
                Status
              </label>

              <div className="flex items-center gap-4">

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                  className="flex-1 border rounded-xl p-3"
                >
                  <option value="">All</option>
                  <option>ACTIVE</option>
                  <option>INACTIVE</option>
                </select>

                <button
                  onClick={() => {
                    setDepartment("");
                    setYear("");
                    setGender("");
                    setStatus("");
                  }}
                  className="text-[#8B2635] font-semibold"
                >
                  Clear all
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default FilterPanel;
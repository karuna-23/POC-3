import StatusBadge from "./Students/StatusBadge";

function RecentStudents({ students }) {
  return (
    <div className="bg-white rounded-xl shadow border mt-8">

      <div className="border-b px-6 py-4">

        <h2 className="text-xl font-semibold">
          Recently Added Students
        </h2>

      </div>

      <div>

        {students.map((student) => (

          <div
            key={student.id}
            className="flex justify-between items-center px-6 py-4 border-b last:border-none hover:bg-gray-50"
          >

            <div>

              <h3 className="font-semibold">
                {student.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {student.dept} • {student.year}
              </p>

            </div>

            <StatusBadge status={student.status} />

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentStudents;
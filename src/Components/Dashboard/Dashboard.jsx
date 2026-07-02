import {
  Users,
  UserCheck,
  UserX,
  Building2,
} from "lucide-react";

import StatCard from "./StatCard";
import RecentStudents from "./RecentStudents";

function Dashboard({ students }) {

  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "ACTIVE"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "INACTIVE"
  ).length;

  const departmentCount = [
    ...new Set(
      students.map((student) => student.dept)
    ),
  ].length;

  const recentStudents = [...students]
    .slice(-5)
    .reverse();

  return (
    <div>

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Overview of Student Management System
        </p>

      </div>

      {/* Stat Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={Users}
          bgColor="bg-blue-500"
        />

        <StatCard
          title="Active Students"
          value={activeStudents}
          icon={UserCheck}
          bgColor="bg-green-500"
        />

        <StatCard
          title="Inactive Students"
          value={inactiveStudents}
          icon={UserX}
          bgColor="bg-red-500"
        />

        <StatCard
          title="Departments"
          value={departmentCount}
          icon={Building2}
          bgColor="bg-yellow-500"
        />

      </div>

      {/* Recent Students */}

      <RecentStudents students={recentStudents} />

    </div>
  );
}

export default Dashboard;
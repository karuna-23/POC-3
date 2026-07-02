import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import StudentTable from "./Components/Dashboard/Students/StudentTable";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [students, setStudents] = useState([]);

  // Load students from JSON Server
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3001/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-8">
          {activePage === "dashboard" && (
            <Dashboard students={students} />
          )}

          {activePage === "students" && (
            <StudentTable
              students={students}
              setStudents={setStudents}
              fetchStudents={fetchStudents}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
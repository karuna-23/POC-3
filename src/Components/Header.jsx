import {
  Search,
  Bell,
  Settings,
} from "lucide-react";

function Header() {
  return (
    <div className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Student Management
        </h1>

        <p className="text-gray-500 mt-1">
          Manage all students from one place
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-72 border rounded-lg outline-none focus:ring-2 focus:ring-[#8B2635]"
          />

        </div>

        {/* Notification */}

        <button className="p-2 rounded-lg hover:bg-gray-100">

          <Bell />

        </button>

        {/* Settings */}

        <button className="p-2 rounded-lg hover:bg-gray-100">

          <Settings />

        </button>

        {/* Profile */}

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />

      </div>

    </div>
  );
}

export default Header;
import { LayoutDashboard, Users, GraduationCap } from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const menus = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "students",
      title: "Students",
      icon: Users,
    },
  ];

  return (
    <div className="w-64 bg-[#1C2333] text-white flex flex-col justify-between min-h-screen">

      {/* Logo */}

      <div>

        <div className="flex items-center gap-3 p-6 border-b border-gray-700">

          <div className="bg-[#8B2635] p-2 rounded-lg">

            <GraduationCap size={24} />

          </div>

          <div>

            <h1 className="text-xl font-bold">
              StudentHub
            </h1>

            <p className="text-xs text-gray-400">
              Student Management
            </p>

          </div>

        </div>

        {/* Menu */}

        <div className="mt-8 space-y-2 px-4">

          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <button
                key={menu.id}
                onClick={() => setActivePage(menu.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition

                ${
                  activePage === menu.id
                    ? "bg-[#8B2635] text-white"
                    : "hover:bg-gray-700 text-gray-300"
                }
                `}
              >
                <Icon size={20} />

                {menu.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}

      <div className="p-5 border-t border-gray-700">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold">

            A

          </div>

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-gray-400">
              karunaluffy@gmail.com
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;
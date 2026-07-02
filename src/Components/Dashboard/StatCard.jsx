function StatCard({ title, value, icon: Icon, bgColor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 flex justify-between items-center hover:shadow-md transition">

      <div>
        <p className="text-gray-500 text-sm font-medium">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2 text-gray-800">
          {value}
        </h2>
      </div>

      <div className={`${bgColor} p-4 rounded-xl text-white`}>
        <Icon size={28} />
      </div>

    </div>
  );
}

export default StatCard;
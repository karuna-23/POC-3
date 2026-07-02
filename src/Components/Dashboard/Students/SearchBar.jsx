import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative flex-1">

      <Search
        size={20}
        className="absolute left-5 top-4 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search by name, ID, email, or phone"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
        w-full
        pl-14
        pr-4
        py-4
        rounded-xl
        border
        bg-white
        outline-none
        text-lg
        focus:ring-2
        focus:ring-[#8B2635]"
      />

    </div>
  );
}

export default SearchBar;
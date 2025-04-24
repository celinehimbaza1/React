// Header.jsx
export default function Header() {
    return (
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-300 to-blue-200 px-6 py-4 shadow text-gray-700 ">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button className=" border-slate-300 text-white bg-slate-600 hover:bg-slate-400 hover:text-white px-3 py-2 rounded-full transition duration-300 ease-in-out">
  Sign Out
</button>

      </div>
    );
  }
  
import Header from "./Header";
import SideBar from "./SideBar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <SideBar />

      {/* Right section: Header + content */}
      <div className="flex flex-col flex-1">
        {/* Header goes here */}
        <Header />

        {/* Main content goes here */}
        <div className="flex-1 p-6 bg-gray-100">
          <p className="text-slate-700 text-xl font-medium">Welcome to the Employee Leave Management</p>
        </div>
      </div>
    </div>
  );
}

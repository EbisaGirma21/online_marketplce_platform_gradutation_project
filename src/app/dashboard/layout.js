import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "This the admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full px-8">
        <Navbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

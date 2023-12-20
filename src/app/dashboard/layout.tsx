import { Sidebar } from "../component";


export default function DashboardLayout({ children }: {  children: React.ReactNode; }) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
    <div className="flex ">
     <Sidebar />
    
      <div id="content" className="flex-1 min-h-screen p-10 text-slate-900  transition duration-500 ease-in-out  ">
      {children}

      </div>


    </div>
  </div>
  );
}
import React, { useState } from 'react';
import { Header } from './Header'; // Tu componente Header
import { Sidebar } from './Sidebar'; // Tu componente Sidebar

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* SIDEBAR: Controlamos el ancho dinámicamente */}
      <div className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-72' : 'w-0 -ml-72 md:ml-0 md:w-20'}`}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onToggle={toggleSidebar} />
        <main className="p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
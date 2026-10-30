import  { useState } from 'react';
import { Header } from './Header'; // Tu componente Header
import { Sidebar } from './Sidebar'; // Tu componente Sidebar
import { LayoutProps } from '../../interfaces/IUI';


const DashboardLayout = ({ children }:LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth >= 1024);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* SIDEBAR: Controlamos el ancho dinámicamente */}
      <div className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-0 lg:w-72' : 'w-0 lg:w-20'}`}>
        {isSidebarOpen && <button aria-label="Cerrar menú" className="fixed inset-0 bg-slate-900/30 z-40 lg:hidden" onClick={toggleSidebar}/>}
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
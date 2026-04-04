import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">
      <Sidebar isOpen={isSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto transition-all duration-300">
        <Header onToggle={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
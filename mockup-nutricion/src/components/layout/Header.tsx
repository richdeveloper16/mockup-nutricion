import React from 'react';
import { Menu } from 'lucide-react';

export const Header = ({ onToggle }) => (
  <header className="h-20 bg-white/80 backdrop-blur-md border-b border-blue-50 sticky top-0 z-40 px-8 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <button onClick={onToggle} className="p-2 hover:bg-slate-100 rounded-xl text-slate-600">
        <Menu size={24} />
      </button>
      <h2 className="text-lg font-bold text-slate-700 hidden md:block">Panel de Nutrición</h2>
    </div>
    
    <div className="flex items-center gap-4">
      <div className="text-right hidden sm:block">
        <p className="text-sm font-bold text-slate-800">Dr. Ricardo</p>
        <p className="text-xs text-blue-500 font-medium">Especialista</p>
      </div>
      <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full text-white flex items-center justify-center font-bold">R</div>
    </div>
  </header>
);
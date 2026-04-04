import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, User, Calendar, Settings, LogOut, Droplets,BookText  } from 'lucide-react';

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Inicio', path: '/dashboard' },
  { icon: <User size={20} />, label: 'Perfil Nutriologo', path: '/perfil-nutriologo' },
  { icon: <User size={20} />, label: 'Perfil Recepcionista', path: '/perfil-recepcionista' },
   { icon: <User size={20} />, label: 'Perfil Paciente', path: '/perfil-paciente' },
  { icon: <Settings size={20} />, label: 'Admisnitrador', path: '/perfil-administrador' },
    { icon: <BookText  size={20} />, label: 'Reportes', path: '/menu-reportes' },
];

export const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-blue-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
      <div className="h-full flex flex-col p-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">NutriCloud</span>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 space-y-2 overflow-y-auto">
          {menuItems.map((item, i) => {
            // Verificamos si la ruta actual coincide con el path del item
            const isActive = location.pathname === item.path;

            return (
              <Link 
                key={i} 
                to={item.path}
                className={`
                  w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-blue-500'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className={`transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`}>
                    {item.icon}
                  </span>
                  <span className={`font-semibold text-sm transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 group-hover:text-blue-500'}`}>
                    {item.label}
                  </span>
                </div>
                
                {/* Indicador de círculo derecho solo si está activo */}
                {isActive && (
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer - Cerrar Sesión */}
        <div className="pt-6 border-t border-slate-50">
          <Link 
            to="/login" 
            className="flex items-center gap-3 p-4 text-slate-400 hover:text-red-500 transition-colors font-bold text-sm group"
          >
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span>Cerrar Sesión</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};
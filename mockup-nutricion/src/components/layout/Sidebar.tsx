import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, User, Settings, 
  LogOut, Droplets, BookText, ShieldCheck, 
  UserCircle, Users2
} from 'lucide-react';

const menuItems = [
  { icon: <LayoutDashboard size={22} />, label: 'Inicio', path: '/dashboard' },
  { icon: <Users2 size={22} />, label: 'Perfil Nutriólogo', path: '/perfil-nutriologo' },
  { icon: <User size={22} />, label: 'Perfil Recepcionista', path: '/perfil-recepcionista' },
  { icon: <UserCircle size={22} />, label: 'Perfil Paciente', path: '/perfil-paciente' },
  { icon: <ShieldCheck size={22} />, label: 'Administrador', path: '/perfil-administrador' },
  { icon: <BookText size={22} />, label: 'Reportes', path: '/menu-reportes' },
];

export const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-50 bg-white border-r border-blue-50 
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-72 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'}
        lg:sticky lg:top-0 lg:h-screen
      `}
    >
      <div className="h-full flex flex-col p-4">
        
        {/* Logo Section */}
        <div className={`flex items-center gap-3 mb-10 px-2 transition-all ${!isOpen && 'justify-center px-0'}`}>
          <div className="min-w-[40px] h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 flex-shrink-0">
            <Droplets className="text-white w-6 h-6" />
          </div>
          {isOpen && (
            <span className="text-xl font-black text-slate-800 tracking-tight whitespace-nowrap overflow-hidden transition-all duration-300">
              Nutri<span className="text-blue-600">Cloud</span>
            </span>
          )}
        </div>

        {/* Navigation List */}
        <nav className="flex-1 space-y-2 overflow-y-auto no-scrollbar">
          {menuItems.map((item, i) => {
            const isActive = location.pathname === item.path;

            return (
              <Link 
                key={i} 
                to={item.path}
                className={`
                  flex items-center rounded-2xl transition-all duration-200 group
                  ${isOpen ? 'p-4 justify-between' : 'p-4 justify-center'}
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-blue-500'}
                `}
                title={!isOpen ? item.label : ""} // Tooltip cuando está cerrado
              >
                <div className="flex items-center gap-3">
                  <span className={`transition-colors flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`}>
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className={`font-bold text-sm whitespace-nowrap transition-opacity duration-300 ${isActive ? 'text-blue-600' : 'text-slate-600 group-hover:text-blue-500'}`}>
                      {item.label}
                    </span>
                  )}
                </div>
                
                {/* Indicador solo si está abierto y activo */}
                {isOpen && isActive && (
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
            className={`flex items-center gap-3 p-4 text-slate-400 hover:text-red-500 transition-colors font-black text-xs uppercase tracking-widest group ${!isOpen && 'justify-center'}`}
          >
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform flex-shrink-0" /> 
            {isOpen && <span className="whitespace-nowrap">Salir</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
};
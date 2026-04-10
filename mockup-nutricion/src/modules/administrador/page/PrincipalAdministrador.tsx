
import { Link } from 'react-router-dom';
import { 
  Users, DollarSign, Tag, BarChart3, 
  ArrowUpRight, UserPlus, 
  Settings, Activity, Target
} from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const PrincipalAdmin = () => {
  // Datos simulados para las métricas rápidas
  const stats = [
    { label: 'Pacientes Totales', value: '1,284', icon: <Users size={20} />, color: 'bg-blue-50 text-blue-600', trend: '+12%' },
    { label: 'Ingresos Mensuales', value: '$45,200', icon: <DollarSign size={20} />, color: 'bg-green-50 text-green-600', trend: '+8.5%' },
    { label: 'Promos Activas', value: '14', icon: <Tag size={20} />, color: 'bg-orange-50 text-orange-600', trend: 'Pausadas: 2' },
  ];

  const quickActions = [
    { title: 'Registrar Personal', desc: 'Añadir médicos o staff', icon: <UserPlus />, link: '/registrar-empleado', color: 'hover:border-blue-200' },
    { title: 'Gestionar Cobros', desc: 'Ver facturas y caja', icon: <DollarSign />, link: '/administrar-cobros', color: 'hover:border-green-200' },
    { title: 'Promociones', desc: 'Crear ofertas y descuentos', icon: <Tag />, link: '/registrar-promociones', color: 'hover:border-orange-200' },
    { title: 'Reportes Globales', desc: 'Analítica de rendimiento', icon: <BarChart3 />, link: '/menu-reportes', color: 'hover:border-indigo-200' },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/30 p-8 font-sans">
        
        {/* Header con Perfil de Admin */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-800 tracking-tighter italic">
              Panel de <span className="text-blue-600">Control</span>
            </h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mt-1">
              Administración Central NutriCloud
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-2 pr-6 rounded-[2rem] shadow-sm border border-blue-50">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black shadow-lg shadow-blue-200">
              R
            </div>
            <div>
              <p className="text-xs font-black text-slate-800 leading-none">Ricardo Admin</p>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter">Super Usuario</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Métricas y Acciones */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Grid de Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[2.5rem] border border-blue-50 shadow-sm group hover:scale-[1.02] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-4 rounded-2xl shadow-inner ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                      {stat.trend}
                    </span>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-3xl font-black text-slate-800 mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Grid de Acciones Rápidas */}
            <div>
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 ml-4">Acciones Frecuentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickActions.map((action, idx) => (
                  <Link 
                    key={idx} 
                    to={action.link}
                    className={`bg-white p-8 rounded-[3rem] border border-transparent shadow-sm flex items-center gap-6 transition-all group ${action.color} hover:shadow-xl hover:shadow-blue-100/50`}
                  >
                    <div className="p-5 bg-slate-50 text-slate-400 rounded-[1.5rem] group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {action.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-slate-800 tracking-tight text-lg leading-none mb-1">{action.title}</h3>
                      <p className="text-xs text-slate-400 font-medium">{action.desc}</p>
                    </div>
                    <ArrowUpRight className="ml-auto text-slate-200 group-hover:text-blue-500 transition-colors" size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Actividad y Estado */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[3.5rem] border border-blue-50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-blue-600">
                <Activity size={80} />
              </div>
              
              <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center gap-2">
                <Target size={18} className="text-blue-600" /> Estado del Sistema
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-bold text-slate-600 flex-1">Servidor Cloud Activo</p>
                  <span className="text-[10px] font-black text-slate-300">99.9%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-xs font-bold text-slate-600 flex-1">Base de Datos Postgre</p>
                  <span className="text-[10px] font-black text-slate-300">Sync</span>
                </div>
                
                {/* Banner sutil de recordatorio */}
                <div className="mt-10 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2rem] border border-blue-100">
                  <p className="text-[11px] text-blue-800/70 font-bold leading-relaxed">
                    Tienes 3 solicitudes de registro de personal pendientes de aprobación.
                  </p>
                  <button className="mt-3 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">
                    Revisar ahora →
                  </button>
                </div>
              </div>
            </div>

            {/* Tarjeta de Configuración Rápida */}
            <div className="bg-slate-900 p-8 rounded-[3rem] shadow-2xl shadow-slate-400 overflow-hidden relative">
              <Settings className="absolute -bottom-4 -left-4 text-white/5 w-24 h-24" />
              <h3 className="text-white font-black text-lg mb-2 italic">Ajustes Globales</h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Mantenimiento de clínica</p>
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                Ir a Configuración
              </button>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default PrincipalAdmin;
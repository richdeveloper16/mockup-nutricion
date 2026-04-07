import React from 'react';
import { 
  Users, DollarSign, TrendingUp, UserCheck, 
  BarChart3, ShieldCheck, Download, FileText,Settings,
  ArrowUpRight, ArrowDownRight, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/layout/DashboardLayout';

// --- Sub-componente: StatCard ---
const AdminStat = ({ title, value, trend, icon: Icon, isPositive }) => (
  <div className="bg-white p-6 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}%
      </div>
    </div>
    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{title}</p>
    <h3 className="text-3xl font-black text-slate-800 mt-1">{value}</h3>
  </div>
);

const PrincipalAdmin = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/50 p-4 font-sans">
        
        {/* Header con Acciones de Reporte */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Panel Administrativo</h1>
            <p className="text-slate-500 font-medium">Control global de NutriCloud.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-blue-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm">
            <Download size={18} /> Exportar Reporte Mensual
          </button>
        </header>

        <main className="space-y-8">
          
          {/* 1. KPIs de Alto Nivel */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdminStat title="Ingresos Totales" value="$128,430" trend="12.5" icon={DollarSign} isPositive={true} />
            <AdminStat title="Nuevos Pacientes" value="48" trend="8.2" icon={UserCheck} isPositive={true} />
            <AdminStat title="Citas Realizadas" value="312" trend="2.4" icon={Activity} isPositive={false} />
            <AdminStat title="Retención" value="94%" trend="5.1" icon={TrendingUp} isPositive={true} />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 2. Gráfico de Rendimiento (Placeholder Visual) */}
            <section className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-blue-50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <BarChart3 className="text-blue-500" size={20} /> Flujo de Ingresos
                </h3>
                <select className="bg-slate-50 border-none rounded-xl text-xs font-bold text-slate-500 p-2 focus:ring-2 focus:ring-blue-100">
                  <option>Últimos 7 días</option>
                  <option>Último mes</option>
                </select>
              </div>
              {/* Espacio para la librería de gráficos (Chart.js / Recharts) */}
              <div className="h-64 w-full bg-slate-50 rounded-3xl border border-dashed border-slate-200 flex items-center justify-center">
                <p className="text-slate-400 font-medium italic text-sm text-center px-10">
                  Visualización de ingresos y gastos operativos (Gráfico de Área)
                </p>
              </div>
            </section>

            {/* 3. Gestión de Personal y Seguridad */}
            <section className="space-y-6">
              
              {/* Tarjeta: Control de Accesos */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                <ShieldCheck className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-2">Seguridad y Roles</h3>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                  Gestiona permisos de nutriólogos, recepcionistas y auditoría de cambios.
                </p>
                <Link to="/registrar-empleado" className="block w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-2xl font-bold text-xs text-center hover:bg-white hover:text-slate-900 transition-all">
                  Registro Personal
                </Link>
              </div>

              {/* Tarjeta: Herramientas de Admin */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
                <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                  Administración
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: 'Gestión promociones', icon: <Users size={18} />, path: '/admin/personal' },
                    { label: 'Configuración Sistema', icon: <Settings size={18} />, path: '/admin/config' },
                    { label: 'Reportes', icon: <FileText size={18} />, path: '/admin/fiscal' },
                  ].map((item) => (
                    <Link 
                      key={item.label}
                      to={item.path}
                      className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-all group"
                    >
                      <div className="text-slate-400 group-hover:text-blue-500">
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-600 group-hover:text-blue-600 uppercase tracking-wider">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </section>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default PrincipalAdmin;
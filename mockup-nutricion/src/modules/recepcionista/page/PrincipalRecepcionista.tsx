
import { 
  Search, Plus, Calendar, 
  MoreVertical, UserPlus, FileText, Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const PrincipalRecepcion = () => {
  // Datos simulados de citas para el día actual
  const citasHoy = [
    { id: 1, paciente: 'Elena Martínez', hora: '09:00 AM', nutriologo: 'Dr. Rivera', estado: 'Completado' },
    { id: 2, paciente: 'Carlos Ruiz', hora: '10:30 AM', nutriologo: 'Dra. Vega', estado: 'En Espera' },
    { id: 3, paciente: 'Sofía Vega', hora: '11:45 AM', nutriologo: 'Dr. Rivera', estado: 'Pendiente' },
    { id: 4, paciente: 'Lucía Méndez', hora: '13:00 PM', nutriologo: 'Dra. Vega', estado: 'Pendiente' },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/50 p-4 font-sans">
        
        {/* Header con Buscador Global */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Panel de Recepción</h1>
            <p className="text-slate-500 font-medium">Gestión de flujo de pacientes y agenda.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar paciente por nombre o ID..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-blue-50 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Citas del Día (Tabla principal) */}
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-blue-50">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <Calendar className="text-blue-600 w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Citas de Hoy</h3>
                </div>
                <span className="text-xs font-bold bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
                  03 de Abril, 2026
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-slate-400 text-xs uppercase tracking-widest border-b border-slate-50">
                      <th className="pb-4 font-bold">Hora</th>
                      <th className="pb-4 font-bold">Paciente</th>
                      <th className="pb-4 font-bold">Nutriólogo</th>
                      <th className="pb-4 font-bold">Estado</th>
                      <th className="pb-4 font-bold text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {citasHoy.map((cita) => (
                      <tr key={cita.id} className="group hover:bg-blue-50/30 transition-colors">
                        <td className="py-5 font-bold text-slate-700">{cita.hora}</td>
                        <td className="py-5">
                          <p className="font-bold text-slate-800">{cita.paciente}</p>
                        </td>
                        <td className="py-5 text-sm text-slate-500 font-medium">{cita.nutriologo}</td>
                        <td className="py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                            cita.estado === 'Completado' ? 'bg-green-50 text-green-600' :
                            cita.estado === 'En Espera' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {cita.estado}
                          </span>
                        </td>
                        <td className="py-5 text-center">
                          <button className="p-2 text-slate-400 hover:text-blue-600">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Columna Derecha: Acciones Rápidas */}
          <section className="space-y-6">
            
            {/* Tarjeta: Nueva Cita (CTA Principal) */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-200 relative overflow-hidden group">
              <Plus className="absolute -right-4 -top-4 w-32 h-32 opacity-10 group-hover:rotate-90 transition-transform duration-700" />
              <h3 className="text-2xl font-bold mb-2">Agendar Cita</h3>
              <p className="text-blue-50 text-sm mb-8 opacity-90">Asigna un espacio en la agenda de forma rápida.</p>
              <Link 
                to="/recepcionista/nueva-cita" 
                className="block w-full bg-white text-blue-600 py-4 rounded-2xl font-black text-sm text-center hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/10 active:scale-95"
              >
                NUEVA CITA
              </Link>
            </div>

            {/* Tarjeta: Herramientas Rápidas */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
                Operaciones
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Registrar Paciente', icon: <UserPlus size={18} />, path: '/registrar-paciente' },
                  { label: 'Ver Agenda', icon: <Calendar size={18} />, path: '/recepcion/agenda' },
                  { label: 'Pagos / Caja', icon: <FileText size={18} />, path: '/recepcion/pagos' },
                  { label: 'Notificar', icon: <Bell size={18} />, path: '/recepcion/notificar' },
                ].map((tool) => (
                  <Link 
                    key={tool.label}
                    to={tool.path}
                    className="p-4 bg-slate-50 rounded-2xl flex flex-col items-center gap-3 hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all group"
                  >
                    <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                      {tool.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase text-center group-hover:text-blue-600">
                      {tool.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default PrincipalRecepcion;
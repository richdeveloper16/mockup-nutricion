
import { 
  ChevronLeft, Scale, Ruler, Activity, 
  Calendar, ArrowUpRight, ArrowDownRight, 
  Download, Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const HistorialMedidas = () => {
  const navigate = useNavigate();

  // Datos simulados del historial
  const historial = [
    { fecha: '10 Abr 2026', peso: '74.5', cintura: '88.1', cuello: '39.0', imc: '24.2', tendencia: 'down' },
    { fecha: '12 Mar 2026', peso: '76.2', cintura: '90.5', cuello: '39.5', imc: '24.8', tendencia: 'down' },
    { fecha: '15 Feb 2026', peso: '77.8', cintura: '92.0', cuello: '40.0', imc: '25.3', tendencia: 'up' },
    { fecha: '10 Ene 2026', peso: '77.0', cintura: '91.5', cuello: '39.8', imc: '25.1', tendencia: 'none' },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen max-w-5xl mx-auto p-4 pb-20 font-sans">
        
        {/* Header de navegación */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 shadow-sm transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <div>
              <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-1">Evolución Corporal</p>
              <h1 className="text-3xl font-black text-slate-800 italic uppercase tracking-tighter">Histórico de <span className="text-blue-600">Medidas</span></h1>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 shadow-sm transition-all">
              <Filter size={20} />
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              <Download size={18} /> Exportar
            </button>
          </div>
        </header>

        {/* Card de Resumen (Último Registro) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Peso Actual', value: '74.5', unit: 'kg', icon: Scale, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Cintura', value: '88.1', unit: 'cm', icon: Ruler, color: 'text-cyan-500', bg: 'bg-cyan-50' },
            { label: 'Cuello', value: '39.0', unit: 'cm', icon: Activity, color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { label: 'IMC', value: '24.2', unit: 'idx', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-white shadow-sm flex flex-col items-center text-center">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-3 shadow-inner`}>
                <stat.icon size={24} />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800 italic">{stat.value}<span className="text-xs not-italic text-slate-400 ml-1">{stat.unit}</span></h3>
            </div>
          ))}
        </div>

        {/* Tabla de Historial */}
        <div className="bg-white rounded-[2.5rem] border border-white shadow-xl shadow-blue-100/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Fecha de Registro</th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Peso (kg)</th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Cintura (cm)</th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Cuello (cm)</th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">IMC</th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tendencia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {historial.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-500 group-hover:bg-white transition-colors">
                          <Calendar size={16} />
                        </div>
                        <span className="font-bold text-slate-700">{row.fecha}</span>
                      </div>
                    </td>
                    <td className="p-6 font-black text-slate-800">{row.peso}</td>
                    <td className="p-6 font-bold text-slate-600">{row.cintura}</td>
                    <td className="p-6 font-bold text-slate-600">{row.cuello}</td>
                    <td className="p-6">
                       <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase">
                         {row.imc}
                       </span>
                    </td>
                    <td className="p-6">
                      {row.tendencia === 'down' ? (
                        <div className="flex items-center gap-1 text-emerald-500 font-bold text-xs">
                          <ArrowDownRight size={16} /> Bajando
                        </div>
                      ) : row.tendencia === 'up' ? (
                        <div className="flex items-center gap-1 text-rose-500 font-bold text-xs">
                          <ArrowUpRight size={16} /> Subiendo
                        </div>
                      ) : (
                        <span className="text-slate-400 font-bold text-xs">Estable</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer de la tabla */}
          <div className="p-6 bg-slate-50/30 text-center border-t border-slate-50">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              Mostrando los últimos 4 meses de seguimiento
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HistorialMedidas;
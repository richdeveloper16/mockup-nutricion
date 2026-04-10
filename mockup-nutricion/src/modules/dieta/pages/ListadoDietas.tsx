
import { Calendar, Apple, ChevronRight,  Plus } from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const ListaDietas = () => {
  const dietas = [
    { id: 1, nombre: "Plan Definición Pro", fecha: "12 Abr 2026", kcal: 1800, status: "Activa" },
    { id: 2, nombre: "Volumen Limpio", fecha: "01 Mar 2026", kcal: 2800, status: "Finalizada" },
    { id: 3, nombre: "Protocolo Ayuno", fecha: "15 Feb 2026", kcal: 2100, status: "Finalizada" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 italic">
              Historial de <span className="text-blue-600">Dietas</span>
            </h1>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">Paciente: Ricardo Rich</p>
          </div>
          <button className="p-4 bg-blue-600 text-white rounded-[1.5rem] shadow-lg shadow-blue-200 hover:scale-105 transition-all">
            <Plus size={24} />
          </button>
        </header>

        <div className="space-y-4">
          {dietas.map((dieta) => (
            <div key={dieta.id} className="group bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${dieta.status === 'Activa' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <Apple size={28} />
                </div>
                <div>
                  <h3 className="font-black text-slate-800 text-lg">{dieta.nombre}</h3>
                  <div className="flex gap-4 mt-1">
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase">
                      <Calendar size={14} /> {dieta.fecha}
                    </span>
                    <span className="text-xs font-black text-blue-500 uppercase italic">{dieta.kcal} kcal</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${dieta.status === 'Activa' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                  {dieta.status}
                </span>
                <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ListaDietas;
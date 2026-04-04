import DashboardLayout from '../../../components/layout/DashboardLayout';
import { StatCard } from '../../../components/dashboard/StatCard';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard label="Pacientes" value="124" gradient="from-cyan-400 to-blue-500" />
        <StatCard label="Citas Hoy" value="8" gradient="from-blue-500 to-indigo-500" />
        <StatCard label="Progreso" value="+15%" gradient="from-emerald-400 to-cyan-500" />
      </div>

      <div className="bg-white rounded-[2rem] p-8 border border-blue-50 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Gráfica de Pacientes</h3>
        {/* Aquí iría tu componente de gráfica */}
        <div className="h-64 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400">
          Visualización de datos
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
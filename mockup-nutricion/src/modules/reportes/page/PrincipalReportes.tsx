import React from 'react';
import { 
   PieChart,  Download, 
  Users, DollarSign, Calendar, TrendingUp, 
  ChevronRight, FileSpreadsheet, FilePieChart
} from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';

// --- Sub-componente: Tarjeta de Reporte ---
const ReportCard = ({ title, description, icon: Icon, color, stats }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className={`p-4 rounded-2xl ${color.bg} ${color.text}`}>
        <Icon size={28} />
      </div>
      <button className="p-2 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all">
        <Download size={20} />
      </button>
    </div>
    
    <h3 className="text-xl font-black text-slate-800 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 mb-6 leading-relaxed">
      {description}
    </p>

    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Último mes</span>
        <span className={`text-sm font-bold ${color.textStat}`}>{stats}</span>
      </div>
      <button className="flex items-center gap-1 text-blue-600 font-bold text-xs group-hover:gap-2 transition-all">
        Ver Detalle <ChevronRight size={14} />
      </button>
    </div>
  </div>
);

const PantallaReportes = () => {
  const reportes = [
    {
      title: "Rendimiento Financiero",
      description: "Análisis detallado de ingresos brutos, egresos y utilidad neta por sucursal o nutriólogo.",
      icon: DollarSign,
      stats: "+$45,200 MXN",
      color: { bg: "bg-blue-50", text: "text-blue-600", textStat: "text-green-500" }
    },
    {
      title: "Afluencia de Pacientes",
      description: "Estadísticas sobre citas agendadas, cancelaciones y tasa de asistencia de pacientes nuevos vs. recurrentes.",
      icon: Users,
      stats: "324 Pacientes",
      color: { bg: "bg-cyan-50", text: "text-cyan-600", textStat: "text-blue-500" }
    },
    {
      title: "Efectividad de Dietas",
      description: "Seguimiento de objetivos cumplidos por los pacientes. Mide el éxito de los planes nutricionales asignados.",
      icon: TrendingUp,
      stats: "82% Éxito",
      color: { bg: "bg-indigo-50", text: "text-indigo-600", textStat: "text-indigo-500" }
    },
    {
      title: "Inventario y Suplementos",
      description: "Reporte de stock de productos vendidos en clínica y suplementos recomendados con mayor rotación.",
      icon: FileSpreadsheet,
      stats: "12 Productos bajos",
      color: { bg: "bg-slate-100", text: "text-slate-600", textStat: "text-red-400" }
    },
    {
      title: "Productividad del Staff",
      description: "Comparativa de horas de consulta efectivas entre nutriólogos y desempeño de recepción.",
      icon: PieChart,
      stats: "9.2 hrs/día prom.",
      color: { bg: "bg-blue-600", text: "text-white", textStat: "text-blue-100" }
    },
    {
      title: "Encuestas de Satisfacción",
      description: "Nivel de satisfacción del cliente (NPS) y feedback directo tras finalizar las consultas.",
      icon: FilePieChart,
      stats: "4.8/5 Estrellas",
      color: { bg: "bg-emerald-50", text: "text-emerald-600", textStat: "text-emerald-500" }
    }
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/50 p-4 font-sans">
        
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            <h1 className="text-4xl font-black text-slate-800 tracking-tight">Centro de Reportes</h1>
          </div>
          <p className="text-slate-500 font-medium ml-5">
            Analiza los datos clave de <span className="text-blue-600 font-bold">NutriCloud</span> para tomar decisiones inteligentes.
          </p>
        </header>

        {/* Grid de Reportes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reportes.map((reporte, index) => (
            <ReportCard key={index} {...reporte} />
          ))}
        </div>

        {/* Footer de Reportes Programados */}
        <footer className="mt-12 p-8 bg-white rounded-[2.5rem] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
              <Calendar size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Reportes Automáticos</h4>
              <p className="text-xs text-slate-500">Recibe un resumen semanal todos los lunes a las 8:00 AM en tu correo.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
            Configurar Envío
          </button>
        </footer>
      </div>
    </DashboardLayout>
  );
};

export default PantallaReportes;
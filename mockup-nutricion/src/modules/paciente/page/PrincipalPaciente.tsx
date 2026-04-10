import React from 'react';
import { 
  Bell, Utensils, Clock, ChevronRight, 
  MapPin, Scale, Ruler, Zap, Activity 
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Importante para la navegación
import DashboardLayout from '../../../components/layout/DashboardLayout';

// --- COMPONENTE: StatMetric ---
// Mantenemos este componente fuera para limpieza, idealmente podría ir en su propio archivo
const StatMetric = ({ label, value, icon: Icon, color }) => (
  <div className={`p-5 rounded-3xl border ${color.bg} ${color.border} flex items-center gap-4 transition-all hover:shadow-md`}>
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color.bgAlt}`}>
      <Icon className={`${color.text} w-6 h-6`} />
    </div>
    <div>
      <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{label}</p>
      <h3 className="text-3xl font-black text-slate-800 leading-none mt-1">
        {value.v} <span className="text-base font-bold text-slate-400">{value.u}</span>
      </h3>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---
const PrincipalPaciente = () => {
  // Datos simulados de la cita
  const cita = {
    diaNum: '12',
    mes: 'Abr',
    hora: '10:30 AM',
    tipo: 'Check-up Mensual',
    lugar: 'Consultorio Central',
    mapUrl: 'https://goo.gl/maps/xyz'
  };

  // Datos simulados de las métricas (Peso y Medidas)
  const metricas = [
    { label: 'Peso', value: {v: '74.5', u: 'kg'}, icon: Scale, color: {bg: 'bg-white', border: 'border-white', bgAlt: 'bg-blue-50', text: 'text-blue-500'} },
    { label: 'Cintura', value: {v: '88.1', u: 'cm'}, icon: Ruler, color: {bg: 'bg-white', border: 'border-white', bgAlt: 'bg-cyan-50', text: 'text-cyan-500'} },
    { label: 'Cuello', value: {v: '39.0', u: 'cm'}, icon: Activity, color: {bg: 'bg-white', border: 'border-white', bgAlt: 'bg-blue-50/50', text: 'text-blue-400'} },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50 p-2 font-sans">
        
        {/* Header de Bienvenida */}
        <header className="flex justify-between items-end mb-10">
          <div>
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-1">Tu progreso de hoy</p>
            <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">¡Hola, Ricardo! 👋</h1>
          </div>
          <button className="relative p-3 bg-white rounded-2xl shadow-sm border border-blue-50 text-slate-400 hover:text-blue-500 transition-all">
            <Bell size={24} />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </header>

        {/* Grid Principal */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda / Panel Principal (2/3 de ancho) */}
          <section className="lg:col-span-2 space-y-8">
            
            {/* 1. PRÓXIMA CITA */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-blue-100/50 border border-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8 transition-transform hover:scale-[1.01]">
              
              {/* Bloque Calendario */}
              <div className="w-28 h-28 bg-white/70 rounded-3xl border-2 border-blue-100 flex flex-col items-center justify-center shadow-inner text-center p-4">
                <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">{cita.mes}</p>
                <p className="text-5xl font-black text-slate-800 leading-none">{cita.diaNum}</p>
              </div>
              
              {/* Bloque Detalles */}
              <div className="flex-1 space-y-3 w-full sm:w-auto text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Zap size={18} className="text-cyan-400" />
                  <span className="text-sm font-bold uppercase tracking-widest text-cyan-500">Próxima Sesión</span>
                </div>
                <h2 className="text-2xl font-black text-slate-800">{cita.tipo}</h2>
                <div className="text-sm font-medium text-slate-500 flex flex-col sm:flex-row gap-x-6 gap-y-1">
                  <span className="flex items-center justify-center gap-2"><Clock size={16} />{cita.hora}</span>
                  <span className="flex items-center justify-center gap-2"><MapPin size={16} />{cita.lugar}</span>
                </div>
              </div>

              {/* Botón Ver Mapa */}
              <a href={cita.mapUrl} target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <MapPin size={24} />
              </a>
            </div>

            {/* 2. Banner Dieta Semanal */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-lg shadow-blue-200">
              <Utensils className="absolute -right-6 -bottom-6 w-36 h-36 opacity-10 rotate-12 transition-transform group-hover:scale-110 duration-500" />
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-cyan-200" />
                <span className="text-sm font-bold uppercase tracking-wider text-cyan-100">Almuerzo Semanal</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Salmón a la plancha con espárragos</h3>
              <p className="text-blue-50 text-sm mb-6 max-w-md opacity-90 leading-relaxed">
                Recuerda beber dos vasos de agua antes de iniciar para mejorar la digestión.
              </p>
              <Link to="/detalle-dieta" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-2xl font-extrabold text-sm hover:bg-blue-50 transition-all shadow-md active:scale-95">
                Ver Receta Completa
              </Link>
            </div>
          </section>

          {/* Columna Derecha: MÉTRICAS */}
          <section className="space-y-6">
            
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
                  Seguimiento de Medidas
                </h4>
                <Link to="/historial-medidas" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:underline">
                  Historial <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Grid de Medidas */}
              <div className="grid grid-cols-1 gap-4">
                {metricas.map((stat) => (
                  <StatMetric key={stat.label} {...stat} />
                ))}
              </div>
              
              <Link to="/actualizar-medidas" className="mt-6 block w-full py-4 bg-white text-slate-500 border border-slate-100 rounded-xl font-bold text-xs text-center hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all active:scale-95">
                + Actualizar Medidas
              </Link>
            </div>

          </section>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default PrincipalPaciente;
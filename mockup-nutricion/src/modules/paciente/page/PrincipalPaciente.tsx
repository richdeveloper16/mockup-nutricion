
import { 
  Bell, Utensils, Clock, ChevronRight, 
  MapPin, Scale, Ruler, Zap, Activity,
  History, CalendarDays
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { ICard } from '../../../interfaces/IUI';


const StatMetric = ({ label, value, icon: Icon, color }:ICard) => (
  <div className={`p-5 rounded-3xl border ${color.bg} ${color.border} flex items-center gap-4 transition-all hover:shadow-md hover:border-blue-100`}>
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color.bgAlt}`}>
      {Icon && <Icon className={`${color.text} w-6 h-6`} />}
    </div>
    <div>
      <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</p>
      <h3 className="text-3xl font-black text-slate-800 leading-none">
        {value?.v ?? '--'} <span className="text-base font-bold text-slate-400">{value?.u ?? '--'}</span>
      </h3>
    </div>
  </div>
);

const PrincipalPaciente = () => {
  const cita = {
    diaNum: '12',
    mes: 'Abr',
    hora: '10:30 AM',
    tipo: 'Check-up Mensual',
    lugar: 'Consultorio Central',
    mapUrl: '#'
  };

  const metricas = [
    { label: 'Peso', value: {v: '74.5', u: 'kg'}, icon: Scale, color: {bg: 'bg-white', border: 'border-white', bgAlt: 'bg-blue-50', text: 'text-blue-500'} },
    { label: 'Cintura', value: {v: '88.1', u: 'cm'}, icon: Ruler, color: {bg: 'bg-white', border: 'border-white', bgAlt: 'bg-cyan-50', text: 'text-cyan-500'} },
    { label: 'Cuello', value: {v: '39.0', u: 'cm'}, icon: Activity, color: {bg: 'bg-white', border: 'border-white', bgAlt: 'bg-slate-100/50', text: 'text-slate-400'} },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50 p-2 font-sans pb-10">
        
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

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <section className="lg:col-span-2 space-y-8">
            
            {/* 1. PRÓXIMA CITA */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-blue-100/30 border border-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8 transition-all hover:shadow-2xl hover:shadow-blue-100/50">
              <div className="w-28 h-28 bg-white/70 rounded-3xl border-2 border-blue-100 flex flex-col items-center justify-center shadow-inner text-center p-4">
                <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">{cita.mes}</p>
                <p className="text-5xl font-black text-slate-800 leading-none">{cita.diaNum}</p>
              </div>
              
              <div className="flex-1 space-y-3 w-full sm:w-auto text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-cyan-500 font-bold uppercase tracking-widest text-xs">
                  <Zap size={14} /> <span>Próxima Sesión</span>
                </div>
                <h2 className="text-2xl font-black text-slate-800 italic uppercase tracking-tighter">{cita.tipo}</h2>
                <div className="text-sm font-medium text-slate-500 flex flex-col sm:flex-row gap-x-6 gap-y-1">
                  <span className="flex items-center justify-center gap-2"><Clock size={16} className="text-blue-400" />{cita.hora}</span>
                  <span className="flex items-center justify-center gap-2"><MapPin size={16} className="text-blue-400" />{cita.lugar}</span>
                </div>
              </div>

              <a href={cita.mapUrl} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <MapPin size={24} />
              </a>
            </div>

            {/* 2. Banner Dieta Actual */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-lg shadow-blue-200/50">
              <Utensils className="absolute -right-6 -bottom-6 w-40 h-40 opacity-10 rotate-12 transition-transform group-hover:scale-110 duration-500" />
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 bg-white/20 rounded-lg"><Clock size={16} className="text-white" /></span>
                <span className="text-xs font-black uppercase tracking-widest text-white/80">Plan Nutricional Activo</span>
              </div>
              <h3 className="text-3xl font-black mb-2 italic">Salmón a la plancha con espárragos</h3>
              <p className="text-blue-50 text-sm mb-6 max-w-md opacity-90 font-medium italic">"La alimentación es tu combustible. Sigue el protocolo para alcanzar tus objetivos."</p>
              <Link to="/detalle-dieta" className="inline-block bg-white text-blue-600 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-md active:scale-95">
                Ver Detalles
              </Link>
            </div>

        {/* 3. HISTÓRICO DE DIETAS (Solo la anterior) */}
<div className="bg-white rounded-[2.5rem] p-8 border border-white shadow-sm">
  <div className="flex justify-between items-center mb-6">
    <h4 className="font-black text-slate-800 flex items-center gap-2 italic uppercase text-sm tracking-tight">
      <History size={20} className="text-blue-500" />
      Plan Anterior
    </h4>
    <Link to="/dieta/lista-dietas" className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] hover:underline flex items-center gap-1">
      Ver todo <ChevronRight size={12} />
    </Link>
  </div>

  {/* Solo mostramos la última dieta registrada en el historial */}
  <Link 
    to="/dieta/lista-dietas" 
    className="flex items-center gap-5 p-5 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/40 transition-all group"
  >
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-500 shadow-sm transition-colors">
      <CalendarDays size={24} />
    </div>
    
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Marzo 2026</span>
        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
        <span className="text-[10px] font-black text-blue-500 uppercase italic">Finalizado</span>
      </div>
      <h5 className="text-xl font-black text-slate-700 italic uppercase tracking-tighter">Volumen Limpio</h5>
      <p className="text-xs font-bold text-slate-400">Objetivo: Incremento masa muscular <span className="text-blue-500/70 ml-2">2,400 KCAL</span></p>
    </div>

    <div className="p-3 bg-white rounded-xl text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shadow-sm">
      <ChevronRight size={20} />
    </div>
  </Link>
</div>
          </section>

          {/* Columna Derecha: MÉTRICAS */}
          <section className="space-y-6">
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-black text-slate-800 italic uppercase text-sm flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
                  Seguimiento
                </h4>
                <Link to="/historico-medidas" className="text-blue-600 font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 hover:underline">
                  Historial <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {metricas.map((stat) => (
                  <StatMetric key={stat.label} {...stat} />
                ))}
              </div>
              
             {/*  <Link to="/actualizar-medidas" className="mt-8 block w-full py-4 bg-white text-slate-400 border border-slate-100 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] text-center hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95 shadow-sm shadow-blue-50">
                + Nueva Medición
              </Link> */}
            </div>
          </section>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default PrincipalPaciente;
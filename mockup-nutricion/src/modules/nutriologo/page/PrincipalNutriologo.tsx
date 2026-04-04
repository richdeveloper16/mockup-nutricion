import React from 'react';
import { Apple, Calendar, Users, Activity, ChevronRight, Droplets } from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { Link } from 'react-router-dom';
const PrincipalNutriologo = () => {

  // 1. Definimos las herramientas con sus respectivas rutas
const tools = [
  { label: 'Calculadora IMC', path: '/calculadora-imc' },
  { label: 'Registrar Paciente', path: '/registrar-paciente' },
  { label: 'Historial', path: '/historial' },
  { label: 'Recetario', path: '/recetario' },
];
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans p-2">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Bienvenido, <span className="text-blue-600">Nutri</span>
            </h1>
            <p className="text-slate-500 font-medium">Hoy es un gran día para transformar vidas.</p>
          </div>
        </header>

        {/* Grid Principal */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Stats Rápidos y Tabla */}
          <section className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card: Pacientes Activos */}
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-xl shadow-blue-100/50 flex items-center gap-5 transition-transform hover:scale-[1.02]">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <Users className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Pacientes Activos</p>
                  <h3 className="text-3xl font-bold text-slate-800">124</h3>
                </div>
              </div>

              {/* Card: Consultas Hoy */}
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-xl shadow-blue-100/50 flex items-center gap-5 transition-transform hover:scale-[1.02]">
                <div className="p-4 bg-cyan-50 rounded-2xl">
                  <Activity className="text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Consultas hoy</p>
                  <h3 className="text-3xl font-bold text-slate-800">8</h3>
                </div>
              </div>
            </div>

            {/* Tabla de Pacientes Recientes */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-blue-50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-800">Pacientes del día</h3>
                <button className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:underline">
                  Ver todos <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-3">
                {['Elena Martínez', 'Carlos Ruiz', 'Sofía Vega'].map((name, i) => (
                  <div key={i} className="flex justify-between items-center p-4 hover:bg-blue-50/50 rounded-2xl transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-tr from-slate-100 to-slate-200 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-slate-400 font-bold">
                        {name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{name}</p>
                        <p className="text-xs font-medium text-slate-400">Control de peso • 14:00 PM</p>
                      </div>
                    </div>
                         <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                      Confirmado
                    </span>
                    <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                      View
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Columna Derecha: Acciones Rápidas */}
          <section className="space-y-6">
            {/* Banner Nuevo Plan con Degradado Azul */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-200 relative overflow-hidden group">
              <Droplets className="absolute -right-6 -bottom-6 w-36 h-36 opacity-20 rotate-12 transition-transform group-hover:scale-110 duration-500" />
              <h3 className="text-2xl font-bold mb-3">Nuevo Plan</h3>
              <p className="text-blue-50 mb-8 text-sm leading-relaxed opacity-90">
                Genera una dieta personalizada basada en los últimos objetivos de tu paciente.
              </p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-extrabold text-sm hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/10 active:scale-95">
                Crear Dieta
              </button>
            </div>

            {/* Grid de Herramientas */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
                Herramientas Rápidas
              </h3>
              <div className="grid grid-cols-2 gap-4">
               {tools.map((tool) => (
    <Link 
      key={tool.label} 
      to={tool.path}
      className="p-4 text-xs font-bold text-slate-500 bg-slate-50 border border-transparent rounded-2xl hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all text-center flex items-center justify-center min-h-[60px] shadow-sm hover:shadow-md active:scale-95"
    >
      {tool.label}
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

export default PrincipalNutriologo;
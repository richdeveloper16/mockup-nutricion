import React from 'react';
import { Apple, Calendar, Users, Activity, ChevronRight } from 'lucide-react';

const PrincipalNutriologo = () => {
  return (
    <div className="min-h-screen bg-[#F9FBFA] text-slate-800 font-sans p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-[#556B2F]">Bienvenido, Nutri</h1>
          <p className="text-slate-500">Hoy es un gran día para transformar vidas.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white p-2 rounded-full shadow-sm border border-slate-100">
            <Calendar className="w-5 h-5 text-slate-600" />
          </button>
          <div className="w-12 h-12 bg-[#8E9775] rounded-full flex items-center justify-center text-white font-bold">
            R
          </div>
        </div>
      </header>

      {/* Grid Principal */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Columna Izquierda: Stats Rápidos */}
        <section className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl shadow-slate-200/50 flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-2xl">
              <Users className="text-[#8E9775]" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Pacientes Activos</p>
              <h3 className="text-2xl font-bold">124</h3>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl shadow-slate-200/50 flex items-center gap-4">
            <div className="p-4 bg-orange-100 rounded-2xl">
              <Activity className="text-[#E28743]" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Consultas hoy</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </div>

          {/* Tabla de Pacientes Recientes */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Pacientes del día</h3>
              <button className="text-[#8E9775] font-medium flex items-center gap-1">
                Ver todos <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {['Elena Martínez', 'Carlos Ruiz', 'Sofía Vega'].map((name, i) => (
                <div key={i} className="flex justify-between items-center p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-xs text-slate-400">Control de peso • 14:00 PM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-[#8E9775] text-xs font-bold rounded-full">
                    Confirmado
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Columna Derecha: Acciones Rápidas / Plan Nutricional */}
        <section className="space-y-6">
          <div className="bg-[#8E9775] text-white p-8 rounded-[2rem] shadow-lg relative overflow-hidden">
            <Apple className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 rotate-12" />
            <h3 className="text-xl font-bold mb-2">Nuevo Plan</h3>
            <p className="text-green-50 mb-6 text-sm">Genera una dieta personalizada basada en el IMC actual.</p>
            <button className="bg-white text-[#8E9775] px-6 py-3 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all">
              Crear Dieta
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold mb-4">Herramientas</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Calculadora IMC', 'Macronutrientes', 'Historial Clínico', 'Recetario'].map((tool) => (
                <button key={tool} className="p-3 text-sm text-slate-600 bg-slate-50 rounded-xl hover:bg-[#8E9775] hover:text-white transition-all text-center">
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrincipalNutriologo;
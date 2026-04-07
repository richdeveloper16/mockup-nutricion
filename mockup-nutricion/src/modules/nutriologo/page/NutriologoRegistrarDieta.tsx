import React, { useState } from 'react';
import { 
  Plus, Utensils, Trash2, Save, Apple, Info, 
  ChevronLeft, Moon, Sun, Coffee, Search, Flame
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const CrearDieta = () => {
  // 1. Catálogo Maestro de Alimentos
  const catalogoAlimentos = [
    { 
      grupo: "Proteínas", 
      opciones: [
        { nombre: "Pechuga de Pollo", kcal: 165, porcion: "100g", protein: 31, carbs: 0, fat: 3.6 },
        { nombre: "Huevo Cocido", kcal: 78, porcion: "1 pza", protein: 6, carbs: 0.6, fat: 5 },
        { nombre: "Atún en Agua", kcal: 116, porcion: "100g", protein: 26, carbs: 0, fat: 0.8 }
      ]
    },
    { 
      grupo: "Carbohidratos", 
      opciones: [
        { nombre: "Arroz Integral", kcal: 111, porcion: "100g", protein: 2.6, carbs: 23, fat: 0.9 },
        { nombre: "Avena en Hojuelas", kcal: 150, porcion: "1/2 taza", protein: 5, carbs: 27, fat: 2.5 },
        { nombre: "Quinoa Cocida", kcal: 120, porcion: "100g", protein: 4.4, carbs: 21, fat: 1.9 }
      ]
    },
    { 
      grupo: "Grasas", 
      opciones: [
        { nombre: "Aguacate", kcal: 160, porcion: "100g", protein: 2, carbs: 8.5, fat: 14.7 },
        { nombre: "Almendras", kcal: 170, porcion: "10 pzas", protein: 6, carbs: 6, fat: 14 }
      ]
    }
  ];

  // 2. Estado de la Dieta
  const [dietaData, setDietaData] = useState([
    { id: 'desayuno', tiempo: "Desayuno", icon: Sun, items: [] },
    { id: 'colacion1', tiempo: "Colación 1", icon: Coffee, items: [] },
    { id: 'comida', tiempo: "Comida", icon: Utensils, items: [] },
    { id: 'colacion2', tiempo: "Colación 2", icon: Coffee, items: [] },
    { id: 'cena', tiempo: "Cena", icon: Moon, items: [] }
  ]);

  // 3. Lógica para manejar alimentos
  const agregarFilaEdicion = (tiempoId) => {
    const nuevaFila = { id: Date.now(), isEditing: true, nombre: "", kcal: 0 };
    setDietaData(prev => prev.map(t => 
      t.id === tiempoId ? { ...t, items: [...t.items, nuevaFila] } : t
    ));
  };

  const confirmarAlimento = (tiempoId, filaId, alimento) => {
    setDietaData(prev => prev.map(t => 
      t.id === tiempoId ? {
        ...t,
        items: t.items.map(item => 
          item.id === filaId ? { ...alimento, id: filaId, isEditing: false } : item
        )
      } : t
    ));
  };

  const eliminarAlimento = (tiempoId, alimentoId) => {
    setDietaData(prev => prev.map(t => 
      t.id === tiempoId ? { ...t, items: t.items.filter(i => i.id !== alimentoId) } : t
    ));
  };

  // 4. Cálculos para el Sidebar
  const totalKcal = dietaData.reduce((acc, t) => acc + t.items.reduce((s, i) => s + i.kcal, 0), 0);
  const metaKcal = 2200;

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/50 p-4">
        
        {/* Header Superior */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link to="/nutriologo" className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 transition-all shadow-sm">
              <ChevronLeft size={20} />
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight italic">Diseño de Dieta</h1>
          </div>
          <button className="px-8 py-4 bg-blue-600 text-white font-black text-xs rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2 uppercase tracking-widest">
            <Save size={18} /> Asignar Plan
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SECCIÓN DE COMIDAS */}
          <main className="lg:col-span-2 space-y-6">
            {dietaData.map((seccion) => (
              <div key={seccion.id} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-blue-50">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <seccion.icon size={24} />
                    </div>
                    <h3 className="text-xl font-black text-slate-800">{seccion.tiempo}</h3>
                  </div>
                  <button 
                    onClick={() => agregarFilaEdicion(seccion.id)}
                    className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-90"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                <div className="space-y-3">
                  {seccion.items.length === 0 && (
                    <div className="py-8 border-2 border-dashed border-slate-50 rounded-3xl text-center text-slate-300 text-xs font-bold uppercase tracking-widest">
                      Sin alimentos asignados
                    </div>
                  )}
                  
                  {seccion.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white transition-all">
                      {item.isEditing ? (
                        <div className="flex-1 flex items-center gap-3">
                          <Search size={16} className="text-blue-400" />
                          <select 
                            className="flex-1 bg-transparent border-none text-sm font-bold text-slate-600 focus:ring-0 cursor-pointer"
                            onChange={(e) => confirmarAlimento(seccion.id, item.id, JSON.parse(e.target.value))}
                            defaultValue=""
                          >
                            <option value="" disabled>Selecciona del catálogo...</option>
                            {catalogoAlimentos.map(g => (
                              <optgroup key={g.grupo} label={g.grupo}>
                                {g.opciones.map(o => (
                                  <option key={o.nombre} value={JSON.stringify(o)}>{o.nombre} ({o.porcion})</option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm">
                              <Apple size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-700">{item.nombre}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">{item.porcion}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <span className="text-xs font-black text-blue-600">{item.kcal} kcal</span>
                            <button 
                              onClick={() => eliminarAlimento(seccion.id, item.id)}
                              className="text-slate-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </main>

          {/* SIDEBAR: BÚSQUEDA Y CALORÍAS */}
          <aside className="space-y-6">
            {/* Tarjeta Búsqueda Paciente */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Asignar a:</p>
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input type="text" placeholder="Buscar paciente..." className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-3xl border border-blue-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm"><Search size={24} /></div>
                <div>
                  <p className="text-sm font-black text-slate-800">Seleccionar Paciente</p>
                  <p className="text-[10px] font-bold text-blue-400 uppercase">Sin asignar</p>
                </div>
              </div>
            </div>

            {/* Tarjeta Calorías */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50 sticky top-10">
              <div className="text-center p-8 bg-blue-600 rounded-[2rem] shadow-xl shadow-blue-100 mb-8 overflow-hidden relative group">
                <Flame className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-1 relative z-10">Total Diario</p>
                <p className="text-5xl font-black text-white relative z-10">{totalKcal}</p>
                <p className="text-xs font-bold text-blue-100 mt-1 italic relative z-10">kilocalorías</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>Progreso de Meta</span>
                  <span>{Math.round((totalKcal / metaKcal) * 100)}%</span>
                </div>
                <div className="h-3 bg-slate-50 rounded-full overflow-hidden shadow-inner border border-slate-100">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700 ease-out shadow-lg"
                    style={{ width: `${Math.min((totalKcal / metaKcal) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-[11px] font-bold text-slate-400 text-center mt-3 italic">
                  Objetivo: <span className="text-blue-600">{metaKcal} kcal</span>
                </p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default CrearDieta;
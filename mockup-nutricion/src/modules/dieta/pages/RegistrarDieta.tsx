import { useState } from 'react';
import { 
  Plus, Utensils, Trash2, Save, Apple,  
  ChevronLeft, Moon, Sun, Coffee, Search, Flame
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import Alert from '../../../components/ui/Alert'; 
import { IAlimento, ITiempoComida } from '../../../interfaces/IIndex'; 

const CrearDieta = () => {
  const navigate = useNavigate();
  
  // --- ESTADOS PARA LA ALERTA ---
  const [showAlert, setShowAlert] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // 1. Catálogo Maestro de Alimentos (Tipado para evitar errores en el parse)
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
    }
  ];

  // 2. Estado de la Dieta (Tipado con la Interfaz del Index)
  const [dietaData, setDietaData] = useState<ITiempoComida[]>([
    { id: 'desayuno', tiempo: "Desayuno", icon: Sun, items: [] },
    { id: 'colacion1', tiempo: "Colación 1", icon: Coffee, items: [] },
    { id: 'comida', tiempo: "Comida", icon: Utensils, items: [] },
    { id: 'colacion2', tiempo: "Colación 2", icon: Coffee, items: [] },
    { id: 'cena', tiempo: "Cena", icon: Moon, items: [] }
  ]);

  // --- LÓGICA DE GUARDADO ---
  const handleAsignarPlan = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowAlert(true);
      setTimeout(() => { navigate('/perfil-nutriologo'); }, 4000);
    }, 1000);
  };

  // --- MANIPULACIÓN DEL ESTADO CON TIPADO ---
  const agregarFilaEdicion = (tiempoId: string) => {
    const nuevaFila: IAlimento = { 
      id: Date.now().toString(), // ID como string para consistencia con IAlimento
      isEditing: true, 
      nombre: "", 
      kcal: 0 
    };
    setDietaData(prev => prev.map(t => 
      t.id === tiempoId ? { ...t, items: [...t.items, nuevaFila] } : t
    ));
  };

  const confirmarAlimento = (tiempoId: string, filaId: string | number, alimento: IAlimento) => {
    setDietaData(prev => prev.map(t => 
      t.id === tiempoId ? {
        ...t,
        items: t.items.map(item => 
          item.id === filaId ? { ...alimento, id: filaId, isEditing: false } : item
        )
      } : t
    ));
  };

  const eliminarAlimento = (tiempoId: string, alimentoId: string | number) => {
    setDietaData(prev => prev.map(t => 
      t.id === tiempoId ? { ...t, items: t.items.filter(i => i.id !== alimentoId) } : t
    ));
  };

  // Cálculos automáticos
  const totalKcal = dietaData.reduce((acc, t) => acc + t.items.reduce((s, i) => s + (i.kcal || 0), 0), 0);
  const metaKcal = 2200;

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/50 p-4 relative">
        
        {/* MODAL DE ALERTA */}
        {showAlert && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
            <div className="w-full max-w-sm transform scale-110 shadow-2xl">
              <Alert 
                type="success_registration"
                title="¡Plan Asignado!"
                message="La dieta se ha guardado correctamente en NutriCloud."
                onClose={() => setShowAlert(false)}
              />
            </div>
          </div>
        )}

        {/* Header Superior */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link to="/perfil-nutriologo" className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 transition-all shadow-sm">
              <ChevronLeft size={20} />
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight italic">
              Diseño de <span className="text-blue-600">Dieta</span>
            </h1>
          </div>
          
          <button 
            onClick={handleAsignarPlan}
            disabled={isSaving}
            className={`px-8 py-4 bg-blue-600 text-white font-black text-xs rounded-2xl shadow-xl transition-all flex items-center gap-2 uppercase tracking-widest active:scale-95 ${isSaving ? 'opacity-50' : 'hover:bg-blue-700'}`}
          >
            {isSaving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save size={18} />}
            {isSaving ? 'Guardando...' : 'Asignar Plan'}
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
                    className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-90"
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
                            onChange={(e) => confirmarAlimento(seccion.id, item.id!, JSON.parse(e.target.value))}
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
                              onClick={() => eliminarAlimento(seccion.id, item.id!)}
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

          {/* SIDEBAR: CALORÍAS */}
          <aside className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50 sticky top-10">
              <div className="text-center p-8 bg-blue-600 rounded-[2rem] shadow-xl mb-8 relative group overflow-hidden">
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
                <div className="h-3 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
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
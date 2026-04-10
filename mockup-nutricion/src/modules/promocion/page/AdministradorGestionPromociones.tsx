 import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tag, Plus, Search, Flame,   Trash2 
} from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const GestionPromociones = () => {
  const [promociones] = useState([
    { id: 1, nombre: "Paquete Verano", descuento: "20%", estado: "Activo", vigencia: "30 Jun 2026", usos: 45 },
    { id: 2, nombre: "Primera Cita", descuento: "15%", estado: "Activo", vigencia: "31 Dic 2026", usos: 128 },
  ]);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/30 p-8 font-sans">
        
        {/* Header Superior */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight italic">
              Gestión de <span className="text-blue-600">Promociones</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium italic">Control total de ofertas</p>
          </div>
          
          <Link 
            to="/promocion/nueva-promocion"
            className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-black text-xs rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all uppercase tracking-widest active:scale-95"
          >
            <Plus size={18} /> Nueva Promoción
          </Link>
        </header>

        {/* CONTENEDOR GRID: Aquí es donde se dividen las columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* COLUMNA IZQUIERDA (Tarjetas de Analítica) */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Tarjeta de Rendimiento */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-blue-50">
              <h4 className="font-black text-slate-800 mb-6 uppercase text-[10px] tracking-widest flex items-center gap-2">
                <Flame size={16} className="text-orange-500" /> Rendimiento
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-tighter">Más Canjeada</p>
                  <p className="text-lg font-bold text-slate-700">Primera Cita</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl shadow-inner">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Cupones Activos</p>
                  <p className="text-lg font-bold text-slate-700">14 Disponibles</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Buscador */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-blue-50">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={16} />
                <input 
                  type="text" 
                  placeholder="Filtrar promos..." 
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-xs font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner"
                />
              </div>
            </div>
          </aside>

          {/* COLUMNA DERECHA (Listado de Promociones) */}
          <main className="lg:col-span-3 space-y-4">
            {promociones.map((promo) => (
              <div key={promo.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-blue-50 flex items-center justify-between group hover:border-blue-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                    <Tag size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-700">{promo.nombre}</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter italic">Vence: {promo.vigencia}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 uppercase tracking-widest">
                    {promo.descuento} OFF
                  </span>
                  <button className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                    <Trash2 size={18}/>
                  </button>
                </div>
              </div>
            ))}
          </main>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default GestionPromociones;
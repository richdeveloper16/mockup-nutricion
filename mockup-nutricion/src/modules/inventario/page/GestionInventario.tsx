import React, { useState } from 'react';
import { 
  Package, Plus, Search, AlertTriangle, 
  ArrowUpRight, BarChart2, Edit3, Trash2, 
  Archive, RefreshCw, ShoppingCart
} from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const GestionInventario = () => {
  const [productos] = useState([
    { id: 1, nombre: "Proteína Whey Isolada", categoria: "Suplementos", stock: 24, precio: 850, estado: "Disponible" },
    { id: 2, nombre: "Creatina Monohidratada", categoria: "Aminoácidos", stock: 5, precio: 420, estado: "Bajo Stock" },
    { id: 3, nombre: "Multivitamínico Pro", categoria: "Vitaminas", stock: 0, precio: 350, estado: "Agotado" },
  ]);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/30 p-8 font-sans">
        
        {/* Header con Título y Acción Principal */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight italic">
              Control de <span className="text-blue-600">Inventario</span>
            </h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Gestión de Suplementos y Stock</p>
          </div>
          
          <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs rounded-2xl shadow-xl shadow-blue-200 hover:opacity-90 transition-all uppercase tracking-widest active:scale-95">
            <Plus size={18} /> Nuevo Producto
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Izquierdo: Resumen de Almacén */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-blue-50">
              <h4 className="font-black text-slate-800 mb-6 uppercase text-[10px] tracking-widest flex items-center gap-2">
                <BarChart2 size={16} className="text-blue-500" /> Resumen
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-[10px] font-black text-blue-400 uppercase">Valor Total</p>
                  <p className="text-lg font-bold text-slate-700 leading-tight">$12,450.00</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-orange-400 uppercase">Por Agotarse</p>
                    <p className="text-lg font-bold text-slate-700 leading-tight">3 Items</p>
                  </div>
                  <AlertTriangle className="text-orange-400" size={20} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-blue-50">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input 
                  type="text" 
                  placeholder="Buscar producto..." 
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-xs font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner"
                />
              </div>
            </div>
          </aside>

          {/* Listado de Productos (Derecha) */}
          <main className="lg:col-span-3 space-y-4">
            {productos.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white p-5 rounded-[2.5rem] shadow-sm border border-blue-50 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-blue-200 transition-all"
              >
                <div className="flex items-center gap-5 flex-1 w-full">
                  <div className={`p-4 rounded-2xl shadow-inner transition-transform group-hover:rotate-6 ${
                    prod.stock === 0 ? 'bg-red-50 text-red-400' : 'bg-slate-50 text-blue-500'
                  }`}>
                    <Package size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-800 tracking-tight leading-none mb-1">
                      {prod.nombre}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md uppercase">
                        {prod.categoria}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        Precio: ${prod.precio}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-8">
                  {/* Indicador de Stock con Estilo de Capas */}
                  <div className="text-center min-w-[80px]">
                    <p className="text-[10px] font-black text-slate-300 uppercase mb-1">Stock</p>
                    <div className={`px-4 py-1 rounded-full text-xs font-black ${
                      prod.stock > 10 ? 'bg-green-100 text-green-600' : 
                      prod.stock > 0 ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {prod.stock} un.
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm">
                      <RefreshCw size={18} />
                    </button>
                    <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm">
                      <Edit3 size={18} />
                    </button>
                    <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all shadow-sm">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Banner de Inventario Bajo */}
            <div className="mt-8 p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
              <Archive className="absolute -right-4 -bottom-4 opacity-10" size={120} />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h4 className="text-lg font-black italic">¿Necesitas reabastecer?</h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Generar orden de compra automática</p>
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-[10px] rounded-xl uppercase tracking-[0.2em] transition-all flex items-center gap-2">
                  <ShoppingCart size={16} /> Solicitar Pedido
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GestionInventario;
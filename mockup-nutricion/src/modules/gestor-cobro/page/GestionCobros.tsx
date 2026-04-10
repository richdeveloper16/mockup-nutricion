import React, { useState } from 'react';
import { 
  DollarSign, Search, Filter, Calendar, 
  ArrowUpRight, ArrowDownLeft, MoreHorizontal,
  FileText, CheckCircle2, Clock, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

import DashboardLayout from '../../../components/layout/DashboardLayout';

const GestionCobros = () => {
  const [cobros] = useState([
    { id: "FAC-001", paciente: "Laura Méndez", monto: 850, fecha: "07 Abr 2026", estado: "Pagado", metodo: "Tarjeta" },
    { id: "FAC-002", paciente: "Carlos Ruiz", monto: 1200, fecha: "07 Abr 2026", estado: "Pendiente", metodo: "Efectivo" },
    { id: "FAC-003", paciente: "Elena Gómez", monto: 950, fecha: "06 Abr 2026", estado: "Vencido", metodo: "Transferencia" },
  ]);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/30 p-8 font-sans">
        
        {/* Header con Analítica Rápida */}
        <header className="mb-10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight italic">
                Administración de <span className="text-blue-600">Cobros</span>
              </h1>
              <p className="text-slate-500 text-sm font-medium italic">Flujo de caja y facturación</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-black text-xs rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all uppercase tracking-widest">
              <DollarSign size={18} />  <Link 
                to="/registrar-cobro" 
                className="block w-full bg-white text-blue-600 py-4 rounded-2xl font-extrabold text-sm text-center hover:bg-blue-50 transition-all shadow-lg active:scale-95"
              >Registrar Cobro

              </Link>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-blue-50 flex items-center gap-4">
              <div className="p-4 bg-green-50 text-green-500 rounded-2xl shadow-inner"><ArrowDownLeft /></div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ingresos Hoy</p>
                <p className="text-2xl font-black text-slate-800">$4,250.00</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-blue-50 flex items-center gap-4">
              <div className="p-4 bg-orange-50 text-orange-500 rounded-2xl shadow-inner"><Clock /></div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Por Cobrar</p>
                <p className="text-2xl font-black text-slate-800">$1,800.00</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-blue-50">
               <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input 
                  type="text" 
                  placeholder="Buscar factura o paciente..." 
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-xs font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Tabla de Movimientos con Estética NutriCloud */}
        <div className="bg-white rounded-[3rem] shadow-sm border border-blue-50 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">ID Factura</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Paciente</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Monto</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Estado</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {cobros.map((cobro) => (
                <tr key={cobro.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="p-6">
                    <span className="font-bold text-blue-600 text-sm px-3 py-1 bg-blue-50 rounded-lg">{cobro.id}</span>
                  </td>
                  <td className="p-6">
                    <p className="font-bold text-slate-700 text-sm">{cobro.paciente}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{cobro.fecha}</p>
                  </td>
                  <td className="p-6 font-black text-slate-800">${cobro.monto}.00</td>
                  <td className="p-6">
                    <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase px-3 py-1.5 rounded-full w-fit ${
                      cobro.estado === 'Pagado' ? 'bg-green-100 text-green-600' : 
                      cobro.estado === 'Pendiente' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {cobro.estado === 'Pagado' ? <CheckCircle2 size={12}/> : <AlertCircle size={12}/>}
                      {cobro.estado}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GestionCobros;
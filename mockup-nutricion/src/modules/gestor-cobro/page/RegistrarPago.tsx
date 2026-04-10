
import { 
   User, FileText, ChevronLeft, 
   ShieldCheck, Tag 
} from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const RegistrarPago = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/30 p-8 font-sans">
        
        {/* Header Navegación */}
        <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 shadow-sm transition-all active:scale-90">
              <ChevronLeft size={20} />
            </button>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight italic">Nueva <span className="text-blue-600">Transacción</span></h2>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Facturación NutriCloud</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-[3.5rem] shadow-sm border border-blue-50 space-y-10">
          
          {/* Fila 1: Paciente y Concepto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Seleccionar Paciente</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400" size={18} />
                <input type="text" placeholder="Nombre del paciente..." className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-[1.5rem] text-sm font-bold shadow-inner" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Concepto / Servicio</label>
              <div className="relative">
                <FileText className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <select className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-[1.5rem] text-sm font-bold shadow-inner appearance-none">
                  <option>Consulta General</option>
                  <option>Plan Nutricional Pro</option>
                  <option>Seguimiento Mensual</option>
                </select>
              </div>
            </div>
          </div>

          {/* Fila 2: Monto y Promoción */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-50">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Monto Total ($)</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-800 font-black">$</span>
                <input type="number" placeholder="0.00" className="w-full pl-12 pr-6 py-5 bg-slate-50 border-none rounded-[2rem] text-2xl font-black text-slate-800 shadow-inner" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Aplicar Promoción</label>
              <div className="relative">
                <Tag className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500" size={18} />
                <select className="w-full pl-14 pr-6 py-4 bg-blue-50 border-none rounded-[1.5rem] text-sm font-bold text-blue-700 shadow-inner appearance-none">
                  <option>Ninguna</option>
                  <option>Paquete Verano (-20%)</option>
                  <option>Primera Cita (-15%)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Métodos de Pago (Botones Estilizados) */}
          <div className="space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 text-center block">Método de Pago</label>
            <div className="grid grid-cols-3 gap-4">
              {['Efectivo', 'Tarjeta', 'Transferencia'].map((metodo) => (
                <button key={metodo} className="py-4 bg-slate-50 rounded-[1.5rem] text-xs font-black text-slate-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-slate-100">
                  {metodo}
                </button>
              ))}
            </div>
          </div>

          {/* Botón Final */}
          <button className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs rounded-[2rem] shadow-2xl shadow-blue-200 uppercase tracking-[0.3em] flex items-center justify-center gap-3">
            <ShieldCheck size={20} /> Finalizar y Generar Recibo
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RegistrarPago;

import { useNavigate } from 'react-router-dom';
import { 
  Tag, Calendar, Percent, ChevronLeft, 
  Save, Sparkles, Info, FileText 
} from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const CrearPromocion = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/30 p-6 font-sans">
        
        {/* Header de Navegación */}
        <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 shadow-sm transition-all active:scale-90"
              title="Volver"
            >
              <ChevronLeft size={20} />
            </button>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight italic">Configurar <span className="text-blue-600">Oferta</span></h2>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Nueva Campaña NutriCloud</p>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs rounded-2xl shadow-xl shadow-blue-200 hover:opacity-90 transition-all uppercase tracking-[0.2em] flex items-center gap-2">
            <Save size={18} /> Publicar Promo
          </button>
        </div>

        {/* Formulario Estilizado con Estética de Capas */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          
          <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-blue-50 space-y-8 relative overflow-hidden">
            {/* Decoración de fondo sutil */}
            <Sparkles className="absolute -top-4 -right-4 text-blue-50/50 w-32 h-32" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Nombre de la Promo */}
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Nombre de la Promoción</label>
                <div className="relative group">
                  <Tag className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400 transition-transform group-focus-within:scale-110" size={20} />
                  <input 
                    type="text" 
                    placeholder="Ej. Descuento Verano 2026" 
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-none rounded-[1.8rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Valor del Descuento */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Porcentaje (%)</label>
                <div className="relative group">
                  <Percent className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 transition-transform group-focus-within:scale-110" size={20} />
                  <input 
                    type="number" 
                    placeholder="15" 
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-none rounded-[1.8rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Fecha de Expiración */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Fecha de Término</label>
                <div className="relative group">
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 transition-transform group-focus-within:scale-110" size={20} />
                  <input 
                    type="date" 
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-none rounded-[1.8rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Descripción / Condiciones */}
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Condiciones (Opcional)</label>
                <div className="relative group">
                  <FileText className="absolute left-5 top-6 text-slate-300 transition-transform group-focus-within:scale-110" size={20} />
                  <textarea 
                    rows={2}
                    placeholder="Escribe aquí los términos de la promoción..."
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-none rounded-[1.8rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all shadow-inner resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Banner de Info con Estilo Organic Modern */}
            <div className="p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-[2.2rem] border border-blue-100 flex items-start gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-500 flex-shrink-0">
                <Info size={20} />
              </div>
              <p className="text-[11px] text-blue-800/70 font-bold leading-relaxed">
                Esta promoción será aplicada automáticamente al seleccionar el servicio correspondiente en el panel de facturación. Asegúrate de que las fechas sean correctas para evitar errores en caja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CrearPromocion;
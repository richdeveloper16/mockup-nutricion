import{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, CalendarDays, Clock, ChevronLeft, 
  Save, Sparkles, Info, Stethoscope, 
  Search, Video, MapPin 
} from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import Alert from '../../../components/ui/Alert'; 
const CrearCita = () => {
  const navigate = useNavigate();
  // Estado para simular la selección de tipo de cita
  const [tipoCita, setTipoCita] = useState('presencial');

    // --- ESTADOS PARA LA ALERTA ---
  const [showAlert, setShowAlert] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // --- LÓGICA DE GUARDADO CON ALERTA ---
  const handleAsignarPlan = () => {
    setIsSaving(true);
    
    // Simulamos la petición al servidor
    setTimeout(() => {
      setIsSaving(false);
      setShowAlert(true);
      
      // Esperamos a que la barra de la alerta termine (4s) para navegar
      setTimeout(() => {
        navigate('/recepcionista/perfil-recepcionista');
      }, 4000);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/30 p-6 font-sans">
            {/* MODAL ENVOLVENTE PARA ALERT.TSX (Efecto SweetAlert) */}
        {showAlert && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-full max-w-sm transform scale-110 shadow-2xl animate-in zoom-in-95 duration-300">
              <Alert 
                type="success_registration"
                title="¡Cita Asignada!"
                message="La cita se ha guardado correctamente en la base de datos de NutriCloud."
                onClose={() => setShowAlert(false)}
              />
            </div>
          </div>
        )}
        {/* Header de Navegación - Mismo estilo que CrearPromocion */}
        <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 shadow-sm transition-all active:scale-90"
              title="Volver"
            >
              <ChevronLeft size={20} />
            </button>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight italic">Agendar <span className="text-blue-600">Nueva Cita</span></h2>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Registro de consulta NutriCloud</p>
            </div>
          </div>
          
               <button 
            onClick={handleAsignarPlan}
            disabled={isSaving}
            className={`px-8 py-4 bg-blue-600 text-white font-black text-xs rounded-2xl shadow-xl shadow-blue-200 transition-all flex items-center gap-2 uppercase tracking-widest active:scale-95 ${isSaving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          >
            {isSaving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : <Save size={18} />}
            {isSaving ? 'Guardando...' : 'Asignar Plan'}
          </button>
        </div>

        {/* Formulario Estilizado con Estética de Capas */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          
          <div className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-sm border border-blue-50 space-y-10 relative overflow-hidden">
            {/* Decoración de fondo sutil */}
            <Sparkles className="absolute -top-4 -right-4 text-blue-50/50 w-32 h-32" />

            {/* SECCIÓN 1: Selección del Paciente */}
            <div className="space-y-6">
              <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2">
                <User size={18} /> 1. Datos del Paciente
              </h3>
              
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400 transition-transform group-focus-within:scale-110" size={20} />
                <input 
                  type="text" 
                  placeholder="Buscar paciente por nombre o ID (Ej. Juan Pérez)..." 
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border-none rounded-[1.8rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all shadow-inner"
                />
              </div>
              {/* Aquí podría ir un componente de resultados de búsqueda dropdown */}
            </div>

            {/* SECCIÓN 2: Fecha y Hora */}
            <div className="pt-10 border-t border-slate-100 space-y-6">
              <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2">
                <CalendarDays size={18} /> 2. Agenda de la Consulta
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Selector de Fecha */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Fecha</label>
                  <div className="relative group">
                    <CalendarDays className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 transition-transform group-focus-within:scale-110" size={20} />
                    <input 
                      type="date" 
                      className="w-full pl-14 pr-6 py-5 bg-slate-50 border-none rounded-[1.8rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Selector de Hora */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Hora</label>
                  <div className="relative group">
                    <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 transition-transform group-focus-within:scale-110" size={20} />
                    <input 
                      type="time" 
                      step="900" // Incrementos de 15 minutos
                      className="w-full pl-14 pr-6 py-5 bg-slate-50 border-none rounded-[1.8rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all shadow-inner"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN 3: Detalles y Tipo */}
            <div className="pt-10 border-t border-slate-100 space-y-6">
              <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2">
                <Stethoscope size={18} /> 3. Detalles de la Consulta
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tipo de Cita (Presencial vs Online) */}
                <div className="space-y-3 md:col-span-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Modalidad</label>
                  <div className="grid grid-cols-2 gap-3 p-2 bg-slate-50 rounded-[1.8rem] shadow-inner">
                    <button 
                      type="button"
                      onClick={() => setTipoCita('presencial')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-[1.2rem] text-xs font-bold transition-all ${tipoCita === 'presencial' ? 'bg-white text-blue-600 shadow' : 'text-slate-500 hover:text-blue-500'}`}
                    >
                      <MapPin size={16} /> Presencial
                    </button>
                    <button 
                      type="button"
                      onClick={() => setTipoCita('online')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-[1.2rem] text-xs font-bold transition-all ${tipoCita === 'online' ? 'bg-white text-blue-600 shadow' : 'text-slate-500 hover:text-blue-500'}`}
                    >
                      <Video size={16} /> Online
                    </button>
                  </div>
                </div>

                {/* Motivo de Consulta */}
                <div className="space-y-3 md:col-span-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Motivo / Notas Preliminares (Opcional)</label>
                  <div className="relative group">
                    <FileText className="absolute left-5 top-5 text-slate-300 transition-transform group-focus-within:scale-110" size={20} />
                    <textarea 
                      rows="2"
                      placeholder="Ej. Seguimiento mensual, Control de peso..."
                      className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-[1.8rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all shadow-inner resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner de Info con Estilo Organic Modern */}
            <div className="p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-[2.2rem] border border-blue-100 flex items-start gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-500 flex-shrink-0">
                <Info size={20} />
              </div>
              <p className="text-[11px] text-blue-800/70 font-bold leading-relaxed">
                Una vez confirmada, la cita aparecerá en la agenda del nutriólogo especialista y se enviará un recordatorio automático al paciente vía correo electrónico y WhatsApp 24 horas antes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Importación faltante de FileText para usar en el textarea
import { FileText } from 'lucide-react';

export default CrearCita;
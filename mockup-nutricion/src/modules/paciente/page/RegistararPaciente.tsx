import{ useState } from 'react';
import { 
  User,Calendar,  AlertCircle,
  Save, Activity, Zap, Droplet,ChevronLeft
} from 'lucide-react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { Link,useNavigate } from 'react-router-dom';
import Alert from '../../../components/ui/Alert'; 

const NutriologoRegistararPaciente = () => {
const navigate = useNavigate();
  // --- ESTADOS PARA LA ALERTA ---
  const [showAlert, setShowAlert] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // --- LÓGICA DE GUARDADO  ---
  const handleAsignarPlan = () => {
    setIsSaving(true);
    
    // Simulamos la petición al servidor
    setTimeout(() => {
      setIsSaving(false);
      setShowAlert(true);
      
      // Esperamos a que la barra de la alerta termine (4s) para navegar
      setTimeout(() => {
        navigate('/perfil-nutriologo');
      }, 4000);
    }, 1000);
  };

const InputGroup = ({ label, icon: Icon, type = "text", placeholder }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
        <Icon size={18} />
      </div>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all text-slate-700 placeholder:text-slate-300 shadow-inner"
      />
    </div>
  </div>
);
  return (
    <DashboardLayout>
    <div className="min-h-screen bg-slate-50/30 p-4 font-sans">
          {/* MODAL ENVOLVENTE PARA ALERT.TSX (Efecto SweetAlert) */}
        {showAlert && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-full max-w-sm transform scale-110 shadow-2xl animate-in zoom-in-95 duration-300">
              <Alert 
                type="success_registration"
                title="¡Plan Asignado!"
                message="La dieta se ha guardado correctamente en la base de datos de NutriCloud."
                onClose={() => setShowAlert(false)}
              />
            </div>
          </div>
        )}
        
        {/* Header */}
       <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
  <div className="flex items-center gap-5">
    {/* Botón de Retroceso mejorado */}
    <Link 
      to="/perfil-nutriologo" 
      className="p-4 bg-white rounded-[1.2rem] border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm active:scale-90 flex items-center justify-center"
    >
      <ChevronLeft size={22} />
    </Link>

    {/* Títulos alineados */}
    <div>
      <h1 className="text-3xl font-black text-slate-800 tracking-tight italic">
        Registro <span className="text-blue-600">Clínico</span>
      </h1>
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Expediente digital y métricas InBody</p>
    </div>
  </div>

  {/* Botón Guardar con degradado y sombra NutriCloud */}
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
</header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Datos Personales */}
            <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-50 rounded-xl text-blue-500">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Información General</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Nombre" icon={User} placeholder="Nombre completo" />
                <InputGroup label="Usuario" icon={User}    placeholder="usuario" />
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Correo electronico" icon={User} placeholder="correo electronico" />
                <InputGroup label="Contraseña" icon={User} type="password"  placeholder="contraseña" />
                 <InputGroup label="Edad" icon={User} placeholder="telefono" />
                <InputGroup label="Telefono" icon={Calendar} type="number" placeholder="25" />
              </div>
            </section>

            {/* 2. DATOS DE INBODY (Nueva Sección) */}
            <section className="bg-white p-8 rounded-[2.5rem] shadow-md border border-blue-50">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-50 rounded-xl text-cyan-500">
                    <Activity size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Composición Corporal (InBody)</h3>
                </div>
                <span className="text-[10px] font-bold bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full uppercase">Bioimpedancia</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InputGroup label="Masa Muscular" icon={Zap} unit="kg" placeholder="32.5" />
                <InputGroup label="Grasa Corporal" icon={Activity} unit="%" placeholder="18.2" />
                <InputGroup label="Masa Grasa" icon={Activity} unit="kg" placeholder="12.4" />
                <InputGroup label="Agua Corporal" icon={Droplet} unit="L" placeholder="40.5" />
                <InputGroup label="Grasa Visceral" icon={AlertCircle} unit="Nivel" placeholder="5" />
                <InputGroup label="Tasa Metabólica" icon={Zap} unit="kcal" placeholder="1650" />
              </div>
            </section>
          </div>

          {/* Columna Derecha: Resumen de Metas */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-[2.5rem] text-white shadow-xl">
               <h4 className="font-bold mb-4">Meta del Paciente</h4>
               <textarea 
                className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-sm text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all"
                placeholder="Ej: Bajar 5% de grasa en 3 meses..."
                rows={4}
               />
               <div className="mt-6 p-4 bg-white/10 rounded-2xl border border-white/10">
                 <p className="text-[10px] font-black uppercase opacity-70">Último InBody Registrado</p>
                 <p className="text-xs mt-1 italic">No hay registros previos para este paciente.</p>
               </div>
            </div>
          </aside>

        </main>
      </div>
    </DashboardLayout>
  );
};

export default NutriologoRegistararPaciente;
import  { useState } from 'react';
import { 
  Menu, X, User, ChevronRight, Apple, 
  Activity, Clock, MapPin, Phone, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const IndexNutriCloud = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- COMPONENTES INTERNOS ---
  
  const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Apple size={22} />
          </div>
          <span className="text-2xl font-black text-slate-800 tracking-tighter italic">
            Nutri<span className="text-blue-600">Cloud</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#servicios" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Servicios</a>
          <a href="#porciones" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Porciones</a>
          <a href="#consultorio" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Contacto</a>
          
          <Link 
            to="/login" 
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl active:scale-95"
          >
            <User size={16} /> Iniciar Sesión
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-600">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 inline-block">
            Tu bienestar, nuestra nube
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight italic">
            Nutrición de <span className="text-blue-600">Precisión</span> <br /> para tu estilo de vida.
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 font-medium text-lg mb-12 italic">
            "Gestiona tus dietas, monitorea tus métricas InBody y alcanza tus objetivos con tecnología de vanguardia."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              Agendar Cita
            </button>
            <button className="px-10 py-5 bg-white text-slate-600 border border-slate-100 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-sm hover:bg-slate-50 transition-all">
              Saber más
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tighter">Servicios <span className="text-blue-600">Premium</span></h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Planes Personalizados', icon: Apple, desc: 'Dietas adaptadas a tus macros y objetivos específicos.', color: 'text-blue-500', bg: 'bg-blue-50' },
              { title: 'Análisis InBody', icon: Activity, desc: 'Seguimiento detallado de composición corporal y grasa visceral.', color: 'text-cyan-500', bg: 'bg-cyan-50' },
              { title: 'Soporte 24/7', icon: ShieldCheck, desc: 'Acceso digital a tus documentos clínicos en cualquier momento.', color: 'text-emerald-500', bg: 'bg-emerald-50' }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all group">
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-800 mb-4 italic uppercase tracking-tight">{service.title}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PORCIONES (Visual) */}
      <section id="porciones" className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">Guía de Alimentación</span>
              <h2 className="text-4xl font-black mt-4 mb-6 italic tracking-tight">Control de Porciones <br /> Inteligente.</h2>
              <p className="text-slate-400 font-medium mb-10 leading-relaxed italic">
                Aprende a identificar las porciones exactas que tu cuerpo necesita sin necesidad de pesar cada gramo. Nuestro sistema visual te ayuda a ser constante.
              </p>
              <div className="space-y-4">
                {['Proteínas (Palma)', 'Carbohidratos (Puño)', 'Grasas (Pulgar)'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <ChevronRight size={14} className="text-white" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {/* Aquí podrías insertar imágenes o placeholders estéticos */}
               <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center text-blue-400"><Apple size={48} /></div>
               <div className="aspect-square bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20"><Activity size={48} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONSULTORIO / INFO */}
      <section id="consultorio" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tighter">Nuestro <span className="text-blue-600">Consultorio</span></h2>
                <p className="text-slate-400 mt-4 font-medium italic">Visítanos en nuestras instalaciones equipadas con la mejor tecnología nutricional.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                  <div className="text-blue-600"><MapPin /></div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Ubicación</p>
                    <p className="text-slate-700 font-bold">Av. Insurgentes Sur 123, CDMX</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                  <div className="text-blue-600"><Clock /></div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Horarios</p>
                    <p className="text-slate-700 font-bold">Lun - Vie: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                  <div className="text-blue-600"><Phone /></div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Contacto</p>
                    <p className="text-slate-700 font-bold">+52 55 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-inner border border-slate-200 flex items-center justify-center">
              <p className="text-slate-300 font-black uppercase tracking-widest">Mapa de Google Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
          © 2026 NutriCloud - Digital Nutrition Experience
        </p>
      </footer>
    </div>
  );
};

export default IndexNutriCloud;
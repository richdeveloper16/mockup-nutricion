import React from 'react';
import { Flame, Clock, ChevronLeft, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Agregué esto para que el botón volver funcione
import DashboardLayout from '../../../components/layout/DashboardLayout';

const DetalleDieta = () => {
  const navigate = useNavigate();

const handleShareWhatsApp = () => {
  // Datos dinámicos (puedes pasarlos por props o extraerlos del estado)
  const nombrePlan = "Plan Definición Pro";
  const kcal = "1,850";
  const paciente = "Ricardo";
  const urlApp = "https://nutricloud.app/dieta/123"; // Link opcional a la app

  const mensaje = `¡Hola ${paciente}! 👋%0A%0A` +
    `Aquí tienes tu *${nombrePlan}* de NutriCloud 🥑:%0A` +
    `🔥 *Calorías:* ${kcal} kcal%0A` +
    `💪 *Proteína:* 160g%0A%0A` +
    `Puedes ver el detalle completo aquí: ${urlApp}`;

  const whatsappUrl = `https://wa.me/?text=${mensaje}`;
  
  window.open(whatsappUrl, '_blank');
};

const handleDownloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      scale: 2, // Mayor calidad
      useCORS: true, // Para que cargue el logo si viene de una URL externa
      logging: false,
      backgroundColor: '#F8FAFC' // El color de fondo de tu app (slate-50)
    });

    const data = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(data, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save("Dieta_NutriCloud_Paciente.pdf");
  };

  return (
    <DashboardLayout>
      {/* Contenedor principal con min-h para asegurar visibilidad */}
      <div className="min-h-screen max-w-4xl mx-auto p-4 pb-20">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate(-1)} // Funcionalidad de volver
            className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 transition-all shadow-sm active:scale-90"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            <button className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 shadow-sm transition-all active:scale-90">
              <Download size={20} />
            </button>
            <button 
            onClick={handleShareWhatsApp}
            className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 shadow-sm transition-all active:scale-90">
              <Share2 size={20} />
            </button>
          </div>
        </div>



        {/* Hero Card */}
        <div className="bg-blue-600 rounded-[3rem] p-10 text-white relative overflow-hidden mb-10 shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h1 className="text-4xl font-black italic mb-2 tracking-tight">Plan Definición <span className="text-cyan-300">Pro</span></h1>
            <p className="opacity-80 font-bold uppercase text-[10px] tracking-[0.2em]">Asignado por: Nut. Elena Rdz</p>
            
            <div className="flex gap-4 sm:gap-8 mt-8">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 flex-1 sm:flex-none">
                <p className="text-[10px] font-black uppercase opacity-60 mb-1">Energía Total</p>
                <p className="text-2xl font-black italic">1,850 <span className="text-xs not-italic opacity-70">kcal</span></p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 flex-1 sm:flex-none">
                <p className="text-[10px] font-black uppercase opacity-60 mb-1">Proteína</p>
                <p className="text-2xl font-black italic">160 <span className="text-xs not-italic opacity-70">g</span></p>
              </div>
            </div>
          </div>
          {/* Icono de fondo decorativo */}
          <Flame className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 rotate-12 pointer-events-none" />
        </div>

        {/* Timeline de Comidas */}
        <div className="space-y-8 relative before:absolute before:left-6 before:top-0 before:h-full before:w-0.5 before:bg-slate-200/50">
          {[
            { tiempo: '08:30 AM', titulo: 'Desayuno Proteico', desc: 'Claras de huevo con espinaca, acompañadas de una porción de avena en hojuelas.' },
            { tiempo: '01:30 PM', titulo: 'Almuerzo Balanceado', desc: 'Pechuga de pollo a la plancha (150g) con quinoa y vegetales al vapor.' },
            { tiempo: '07:00 PM', titulo: 'Cena Ligera', desc: 'Ensalada de atún en agua con medio aguacate y espinacas baby.' }
          ].map((item, idx) => (
            <div key={idx} className="relative pl-14 group">
              {/* Punto indicador con efecto de pulso */}
              <div className="absolute left-[18px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-50 z-10 transition-all group-hover:scale-150 group-hover:ring-blue-100" />
              
              <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={14} className="text-blue-500" />
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{item.tiempo}</span>
                </div>
                <h4 className="text-xl font-black text-slate-800 mb-1 italic">{item.titulo}</h4>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DetalleDieta;
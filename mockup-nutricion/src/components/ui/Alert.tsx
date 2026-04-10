import  { useEffect, useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react'; // Importamos XCircle
import { IToastProps } from '../../interfaces/IUI';

// 1. Extraemos 'type' de las props
const AlertSweet = ({ title, message, onClose, type, duration = 4000 }: IToastProps) => {
  const [progress, setProgress] = useState(100);

  // 2. Ahora 'type' ya existe y podemos usarlo
  const isError = type === 'error';

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - (100 / (duration / 10))));
    }, 10);
    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
      
      <div className="relative bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl border border-white flex flex-col items-center text-center animate-in zoom-in-95 duration-300 ease-out shadow-blue-200/50">
        
        {/* Icono Principal Dinámico */}
        <div className={`w-20 h-20 ${isError ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'} rounded-full flex items-center justify-center mb-6 relative transition-colors duration-500`}>
          {isError ? (
            <XCircle size={40} strokeWidth={2.5} />
          ) : (
            <CheckCircle2 size={40} strokeWidth={2.5} />
          )}
          {/* Ping animation dinámico */}
          <div className={`absolute inset-0 ${isError ? 'bg-red-400' : 'bg-blue-400'} rounded-full animate-ping opacity-20`}></div>
        </div>

        <div className="space-y-2 mb-8">
          <h3 className="text-2xl font-black text-slate-800 tracking-tight italic">
            {title}
          </h3>
          <p className="text-slate-500 font-bold text-sm leading-relaxed">
            {message}
          </p>
        </div>

        <button 
          onClick={onClose}
          className={`w-full py-4 ${isError ? 'bg-red-600 hover:bg-red-700 shadow-red-200' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'} text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-xs mb-6`}
        >
          Entendido
        </button>

        {/* BARRA DE ESTADO (Color dinámico según el tipo) */}
        <div className="w-full space-y-2 bg-slate-50/50 p-4 rounded-[1.5rem] border border-slate-100 shadow-inner">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Autocierre</span>
            <span className={`text-[9px] font-black ${isError ? 'text-red-500' : 'text-blue-500'}`}>
              {Math.ceil((progress * duration) / 10000)}s
            </span>
          </div>
          
          <div className="relative h-3 w-full bg-white rounded-full p-0.5 shadow-sm border border-slate-100 overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-75 ease-linear relative"
              style={{ 
                width: `${progress}%`,
                background: isError 
                  ? 'linear-gradient(90deg, #ef4444 0%, #f87171 100%)' 
                  : 'linear-gradient(90deg, #3b82f6 0%, #22d3ee 100%)',
                boxShadow: isError 
                  ? '0 0 10px rgba(239, 68, 68, 0.3)' 
                  : '0 0 10px rgba(34, 211, 238, 0.3)'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-[40%] bg-white/20 rounded-full"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full blur-[1px] mr-0.5 shadow-[0_0_5px_#fff]"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AlertSweet;
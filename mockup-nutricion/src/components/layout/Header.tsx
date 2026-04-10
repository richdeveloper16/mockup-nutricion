
import { Menu } from 'lucide-react';
import { Props } from '../../interfaces/IUI';
export const Header = ({ onToggle }:Props) => (
  <header className="h-20 bg-white/80 backdrop-blur-md border-b border-blue-50 sticky top-0 z-40 px-8 flex items-center justify-between">
    <div className="flex items-center gap-4">
      {/* El botón ahora ejecuta la función que viene del padre */}
      <button 
        onClick={onToggle} 
        className="p-2.5 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-slate-500 transition-all active:scale-90"
      >
        <Menu size={24} />
      </button>
      <h2 className="text-lg font-black text-slate-700 hidden md:block tracking-tight">
        Nutri<span className="text-blue-600">Cloud</span>
      </h2>
    </div>
    
    <div className="flex items-center gap-4">
      <div className="text-right hidden sm:block">
        <p className="text-sm font-black text-slate-800">Dr. Ricardo</p>
        <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Especialista</p>
      </div>
      <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-2xl text-white flex items-center justify-center font-bold shadow-lg shadow-blue-100">
        R
      </div>
    </div>
  </header>
);
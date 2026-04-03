import React from 'react';
import { Droplets, Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Elementos decorativos con degradados suaves (Background) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-blue-200 to-cyan-100 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-gradient-to-tr from-sky-200 to-blue-50 rounded-full blur-[80px] opacity-50"></div>

      <div className="w-full max-w-md z-10">
        {/* Card con borde degradado sutil */}
        <div className="bg-white/80 backdrop-blur-2xl p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(186,230,253,0.3)] border border-white/50">
          
          {/* Header con Icono en Degradado */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-200 mb-5 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Droplets className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Bienvenido</h2>
            <p className="text-sky-600/70 text-sm mt-1 font-semibold uppercase tracking-widest">Portal de Nutrición</p>
          </div>

          <form className="space-y-6">
            {/* Input Email */}
            <div className="group">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-400 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="group">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                <input 
                  type="password" 
                  placeholder="Tu contraseña"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-400 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="flex justify-end mt-2">
                <button type="button" className="text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors">¿Olvidaste tu clave?</button>
              </div>
            </div>

            {/* Botón con Degradado Vibrante */}
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all transform active:scale-95 group">
              Acceder al Panel
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Registro */}
          <div className="mt-10 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              ¿No tienes cuenta? 
              <span className="ml-1 font-bold text-sky-600 cursor-pointer hover:underline">Solicitar acceso</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
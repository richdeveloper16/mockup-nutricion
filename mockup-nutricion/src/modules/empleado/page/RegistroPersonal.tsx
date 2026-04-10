import React, { useState } from 'react';
import { 
  User, Mail, Phone, Briefcase, 
  Shield, Lock, Save, ChevronLeft, 
  Camera, MapPin, Fingerprint 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/layout/DashboardLayout';

const RegistrarEmpleado = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50/30 p-4 font-sans">
        
        {/* Header con navegación */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <Link to="/perfil-administrador" className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 shadow-sm transition-all">
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Nuevo Empleado</h1>
              <p className="text-slate-500 text-sm font-medium">Registra un nuevo miembro en el equipo de NutriCloud</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-blue-600 text-white font-black text-xs rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2 uppercase tracking-widest">
            <Save size={18} /> Guardar Registro
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMNA IZQUIERDA: Foto y Perfil de Rol */}
          <section className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full bg-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-300 border-2 border-dashed border-slate-200">
                  <User size={48} />
                </div>
                <button className="absolute -bottom-2 -right-2 p-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:scale-110 transition-transform">
                  <Camera size={18} />
                </button>
              </div>
              <h3 className="font-bold text-slate-800 italic">Fotografía de Perfil</h3>
              <p className="text-xs text-slate-400 mt-2">Formatos aceptados: JPG, PNG. Máx 2MB</p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
              <h4 className="font-black text-slate-800 mb-6 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                <Shield size={16} className="text-blue-500" />
                Rol en el Sistema
              </h4>
              <div className="space-y-3">
                {['Nutriólogo', 'Recepcionista', 'Administrador'].map((rol) => (
                  <label key={rol} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-100 cursor-pointer transition-all group">
                    <input type="radio" name="rol" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
                    <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600">{rol}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* COLUMNA DERECHA: Formulario Detallado */}
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-blue-50">
              
              {/* Sección: Datos Personales */}
              <div className="mb-10">
                <h4 className="font-black text-blue-600 mb-8 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <Fingerprint size={18} /> Información Personal
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2">Nombre Completo</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input type="text" placeholder="Ej. Juan Pérez" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input type="email" placeholder="correo@nutricloud.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2">Teléfono</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input type="tel" placeholder="+52 ..." className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2">Ubicación / Sucursal</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner appearance-none cursor-pointer">
                        <option>Sucursal Central</option>
                        <option>Sucursal Norte</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección: Credenciales */}
              <div className="pt-10 border-t border-slate-50">
                <h4 className="font-black text-blue-600 mb-8 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <Lock size={18} /> Seguridad y Acceso
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2">Usuario</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2">Contraseña Temporal</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2">Cédula Profesional (Opcional)</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input type="text" placeholder="Número de cédula" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RegistrarEmpleado;
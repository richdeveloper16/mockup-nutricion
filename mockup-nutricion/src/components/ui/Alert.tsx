import { useId } from 'react';
import { createPortal } from 'react-dom';
import { Check, CircleAlert, Info, TriangleAlert, X } from 'lucide-react';
import type { IToastProps } from '../../interfaces/IUI';

const styles = {
  success: { icon: Check, color: 'bg-emerald-50 text-emerald-600', label: 'Todo listo' },
  success_registration: { icon: Check, color: 'bg-emerald-50 text-emerald-600', label: 'Todo listo' },
  error: { icon: CircleAlert, color: 'bg-rose-50 text-rose-600', label: 'Revisa este detalle' },
  warning: { icon: TriangleAlert, color: 'bg-amber-50 text-amber-600', label: 'Ten en cuenta' },
  info: { icon: Info, color: 'bg-sky-50 text-sky-600', label: 'Para ti' },
};

export default function Alert({ title, message, onClose, type = 'success' }: IToastProps) {
  const id = useId();
  const { icon: Icon, color, label } = styles[type];
  return createPortal(
    <section role={type === 'error' || type === 'warning' ? 'alert' : 'status'} aria-labelledby={id} className="fixed bottom-5 right-5 left-5 sm:left-auto z-[10000] sm:w-[400px] flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_45px_-12px_rgba(15,23,42,0.25)]">
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${color}`}><Icon size={23} strokeWidth={2}/></span>
      <div className="min-w-0 flex-1"><p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">{label}</p><h3 id={id} className="text-sm font-semibold text-slate-800">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-500">{message}</p></div>
      <button type="button" onClick={onClose} aria-label="Cerrar notificación" className="-mr-1 -mt-1 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-sky-500"><X size={17}/></button>
    </section>, document.body,
  );
}

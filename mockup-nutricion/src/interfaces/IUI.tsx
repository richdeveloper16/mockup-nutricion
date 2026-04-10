import { LucideIcon } from 'lucide-react';

export interface StatCardProps {
  label: string;
  value: string | number;
  gradient: string;
}


// Card
export interface IStat {
  label: string;
  value: string | number;
  trend?: 'up' | 'down'; // Opcional: para mostrar flechitas
}

export interface ICard {
  title?: string;
  description?: string;
  icon?: LucideIcon;     // O "string" si solo pasas el nombre del icono
 color: {
    bg?: string;
    text?: string;
    textStat?: string;
    border?:string;
    bgAlt?:string;
  };      // Ejemplo: "blue", "red" o un código Hex
  stats?: string;  
  label?:string;  
  value?:{
    v?:string;
    u?:string;
  };   // Un arreglo de estadísticas
}


// Toast
export interface IToastProps {
  title: string;
  message: string;
  /** Función que se ejecuta al cerrar la notificación */
  onClose: () => void;
  /** Duración en milisegundos. Opcional porque tiene un valor por defecto. */
  duration?: number;
  /** Opcional: para definir el estilo visual */
  type?: "success" | "error" | "info" | "warning" | "success_registration";
}


export interface Props {
  onToggle: () => void; // Si no recibe parámetros y no regresa nada
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface SidebarProps {
  isOpen: boolean;
  // Si tienes otras props como toggle, agrégalas aquí
  setIsOpen?: (value: boolean) => void; 
}


export interface InputGroupProps {
  label: string;
  icon: LucideIcon; // Usamos el tipo específico de Lucide
  type?: string;    // Opcional, por defecto es "text"
  placeholder?: string;
  unit?: string;    // Opcional (kg, %, kcal, etc.)
}
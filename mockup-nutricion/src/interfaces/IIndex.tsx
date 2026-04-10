import { LucideIcon } from 'lucide-react';

export interface IAlimento {
  id?: number | string;
  nombre?: string;
  kcal?: number;
  porcion?: string;
  protein?: number;
  carbs?: number;
  fat?: number;
  isEditing?: boolean;
}


export interface ITiempoComida {
  id: string;
  tiempo: string;
  icon: LucideIcon;
  items: IAlimento[]; // <--- Aquí está la clave
}
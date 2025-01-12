import { ButtonHTMLAttributes } from 'react';

// Cuando utilizamos ButtonHTMLAttributes<HTMLButtonElement> estamos extendiendo las propiedades de un botón para tener acceso a todas las propiedades de un botón HTML
export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  onClick?: () =>  React.MouseEventHandler<HTMLButtonElement> | void
  children?: React.ReactNode
  className?: string
}
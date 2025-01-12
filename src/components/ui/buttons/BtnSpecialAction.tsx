import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const ButtonRefresh:React.FC<BtnProps> = (props) => {
  // en caso se pase un icono, reemplazara al por defecto
  return (
    <button
      className={twMerge(
        'text-blue-600 hover:text-white border border-blue-700 hover:bg-blue-600 hover:text-white hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center',
        props.className
      )}
      onClick={props.onClick}
      aria-label={props.ariaLabel ? props.ariaLabel : 'Recargar'}
    >
      {props.children
        ? (
            props.children
          )
        : (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M19.91 15.51h-4.53a1 1 0 0 0 0 2h2.4A8 8 0 0 1 4 12a1 1 0 0 0-2 0 10 10 0 0 0 16.88 7.23V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-.97-.99M15 12a3 3 0 1 0-3 3 3 3 0 0 0 3-3m-4 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1m1-10a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 0 1 20 12a1 1 0 0 0 2 0A10 10 0 0 0 12 2' />
          </svg>
          )}
    </button>
  )
}
export const ButtonPrint:React.FC<BtnProps> = (props) => {
  return (
    <button
      className={twMerge(
        'text-blue-600 hover:text-white border border-blue-700 hover:bg-blue-600 hover:text-white hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center',
        props.className
      )}
      onClick={props.onClick}
      aria-label={props.ariaLabel ? props.ariaLabel : 'Imprimir'}
    >
      {props.children
        ? (
            props.children
          )
        : (
          <svg
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M7 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1m12-4h-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M8 4h8v2H8Zm8 16H8v-4h8Zm4-5a1 1 0 0 1-1 1h-1v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z' />
          </svg>
          )}
    </button>
  )
}

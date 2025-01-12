import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const BtnPagination:React.FC<BtnProps> = forwardRef(({
  onClick,
  disabled,
  children,
  className,
  page,
  i,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      type='button'
      className={twMerge(
        `flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === i ? 'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 border-b-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'border-b-blue-200'} disabled:opacity-50`,
        className
      )}
      {...props}
    >
      {i}
    </button>
  )
})
BtnPagination.displayName = 'BtnPagination' // Nota: es buena practica asignar un nombre a los componentes creados con forwardRef

export const BtnPaginationPrev:React.FC<BtnProps> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={twMerge(
        'flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export const BtnPaginationNext:React.FC<BtnProps> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={twMerge(
        'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-r-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

// components/ui/modals/CustomModal.jsx
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './modals.css'
import { twMerge } from 'tailwind-merge'

// recibe el Header y el Body como hijos

interface HeaderProps {
  className?: string
  children: React.ReactNode
}

interface BodyProps {
  className?: string
  children: React.ReactNode
}

interface FooterProps {
  className?: string
  children: React.ReactNode
}
interface CustomModalProps {
  show: boolean
  onHide: () => void
  children: React.ReactNode
}
interface CustomModalComponent extends React.FC<CustomModalProps> {
  Header: React.FC<HeaderProps>
  Body: React.FC<BodyProps>
  Footer: React.FC<FooterProps>
}
const CustomModal:CustomModalComponent = ({ children, show = false, onHide }) => {
  useEffect(() => {
    if (show) {
      // Evita que el body se pueda hacer scroll
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
      document.body.style.overflow = 'initial' // regresa al estado inicial
    }
    // Al desmontar el componente se remueve el evento para asegurar que no se quede el body bloqueado
    return () => {
      document.body.classList.remove('modal-open')
      document.body.style.overflow = 'initial'
    }
  }, [show, onHide])

  // Convertir children a un array y filtrar Header y Body
  const childrenArray = React.Children.toArray(children)
  const header = childrenArray.find(
    (child): child is React.ReactElement => React.isValidElement(child) && child.type === CustomModal.Header
  )
  const footer = childrenArray.find(
    (child): child is React.ReactElement => React.isValidElement(child) && child.type === CustomModal.Footer
  )
  const body = childrenArray.find(
    (child): child is React.ReactElement => React.isValidElement(child) && child.type === CustomModal.Body
  )

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    console.error('No se encontro el elemento modal-root')
    return null
  }
  return createPortal(
    <div
      id='modal-overlay'
      className='modal-overlay'
      onClick={onHide}
      style={{ display: show ? 'block' : 'none' }}
    >
      <dialog
        aria-atomic='true'
        open={show}
        onClick={(e) =>
          e.stopPropagation()} /* Evita que el dialog se cierre al hacer click en el contenido del dialog */
        onClose={onHide}
        // tabIndex='-1'
        className='custom-modal'
      >
        {header}
        <div className='modal-content'>{body}</div>
        {footer}
      </dialog>
    </div>,
    modalRoot
  )
}

// Estos componentes son una propiedad estática de CustomModal (propiedad de la función o clase CustomModal)

CustomModal.Header = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        'flex justify-center items-center py-3 px-4 bg-cyan-600 text-white',
        className
      )}
    >
      {children}
    </div>
  )
}

CustomModal.Body = ({ className, children }) => {
  return (
    <div className={twMerge('bg-white border-b-8px py-4 px-4', className)}>
      {children}
    </div>
  )
}
CustomModal.Footer = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        'flex justify-center py-5 px-4 border-b-8px',
        className
      )}
    >
      {children}
    </div>
  )
}

export default CustomModal

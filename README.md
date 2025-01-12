### 🎨 Componentes Personalizados con Tailwind CSS y Tailwind Merge

Este documento explica cómo **utilizar Componentes personalizados en tu proyecto React** utilizando **Tailwind CSS** y cómo la biblioteca **`tailwind-merge`** ayuda a combinar clases de Tailwind CSS, especialmente en componentes como `BtnBlue`, `BtnGreen`, `BtnCyan`, etc.

## 🚀 Introducción 

**Tailwind CSS** es un framework de utilidades CSS que permite crear rápidamente **interfaces de usuario estilizadas** sin escribir CSS personalizado. Sin embargo, al crear componentes reutilizables, es posible que enfrentemos problemas al sobrescribir clases predeterminadas con clases personalizadas.

## ⚡️ Usando Vite

Si estás utilizando **Vite** en tu proyecto, te recomendamos seguir la [guía de instalación de Tailwind CSS con Vite](https://tailwindcss.com/docs/guides/vite) para una configuración óptima.

<img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="50" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS Logo" width="50" />

## 🛠️ Instalación de `tailwind-merge`

Para instalar `tailwind-merge`, ejecuta el siguiente comando en tu terminal:

```bash
npm install tailwind-merge
```

## ⚠️ Problemas al Combinar Clases

Al definir componentes de botón con clases de Tailwind CSS, puede surgir un problema al intentar sobrescribir estilos predeterminados. Por ejemplo, si un botón tiene un padding horizontal `px-5` por defecto y queremos cambiarlo a `px-1.5` en una instancia específica, Tailwind CSS puede no aplicar correctamente el estilo deseado debido a conflictos de clases.

## 🛠️ Solución con `tailwind-merge`

**`tailwind-merge`** es una biblioteca que combina y resuelve conflictos entre clases de Tailwind CSS. Al utilizar `tailwind-merge`, podemos asegurarnos de que las clases personalizadas sobrescriban las clases predeterminadas en nuestros componentes.

### ✅ Beneficios de `tailwind-merge`

**🔍Resolución de conflictos**: Combina y resuelve conflictos entre clases de Tailwind CSS.
**🏆Prioridad de Clases**: Las clases pasadas a través de `className` tienen prioridad sobre las clases base del componente.
**🧹Código Limpio**: Facilita la creación de componentes reutilizables y configurables sin conflictos de estilos.

## 🔧 Uso en Componentes de Botón

```jsx
// BtnBlue.jsx
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const BtnBlue = ({ onClick, children, className, ...props }) => (
  <button
    type="button"
    className={twMerge(
      'text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
```

## Sobrescribiendo Clases con `className`

Al utilizar estos componentes, podemos pasar clases adicionales mediante la prop className, y twMerge se asegurará de que nuestras clases personalizadas sobrescriban las clases predeterminadas en caso de conflicto.

# Ejemplo de uso

```jsx
import React from 'react';
import { BtnBlue } from './BtnBlue';

const MyComponent = () => (
  <BtnBlue className="px-1.5 flex gap-2" onClick={handleClick}>
    <Icon />
    Click Me
  </BtnBlue>
);
```
En este ejemplo, la clase px-1.5 sobrescribirá la clase predeterminada px-5 del botón, gracias a twMerge.

### Uso de classNames para Combinar CSS y Tailwind CSS

Si deseas **combinar CSS tradicional con Tailwind CSS**, la biblioteca `classNames` es una excelente opción. Permite condicionalmente unir múltiples clases de manera sencilla

```jsx
import React from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export const BtnRed = ({ onClick, children, className, ...props }) => (
  <button
    type="button"
    className={twMerge(
      classNames(
        'text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
        className
      )
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
```
## Modal Reutilizable en React con `createPortal`

El componente `CustomModal` utiliza `React.createPortal` para asegurarse de que se superponga a componentes padres a través de un punto de entrada definido en un nivel superior. Esto garantiza que el modal siempre aparezca por encima de otros elementos de la interfaz.

### Definición de Punto en Entrada

En un componente superior como `App.jsx`, definimos un elemento como un div, con el id modal-root que actúa como el punto de entrada para los modales

```jsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div id='modal-root' />
      <RouterProvider router={router} /> {/* Rutas del la Aplicación */}
    </>
  )
}

export default App
```
### 🛠️ Uso de **CustomModal**

El uso de `CustomModal` es similar a cómo se implementan modales en bibliotecas como react-bootstrap, lo que facilita su adopción si ya estás familiarizado con dichas herramientas.

```jsx
import React, { useState } from 'react'
import CustomModal from './modals/CustomModal'
import BtnGrayOutline from './buttons/BtnGrayOutline'
import ListSelectInvestigator from './ListSelectInvestigator'
import ListSelectCrimes from './ListSelectCrimes'

const ExampleUsage = () => {
  const [showCrimesModal, setShowCrimesModal] = useState(false)
  const [showInvestigatorsModal, setShowInvestigatorsModal] = useState(false)
  const [crimesSelected, setCrimesSelected] = useState([])
  const [investigatorsSelected, setInvestigatorsSelected] = useState([])

  const handleHideCrimesModal = () => setShowCrimesModal(false)
  const handleHideInvestigatorsModal = () => setShowInvestigatorsModal(false)
  const handleSelectCrimes = (selected) => setCrimesSelected(selected)
  const handleSelectInvestigators = (selected) => setInvestigatorsSelected(selected)

  return (
    <>
      <section>
        <h1>Contenido</h1>
        <form>
          {/* Contenido */}
        </form>
      </section>
      {/* Al estar fuera de la sección, se entiende que su renderizado ser a través de un componente superior*/}
      <CustomModal
        show={showInvestigatorsModal}
        onHide={handleHideInvestigatorsModal}
      >
        <CustomModal.Header>
          <h2 className='text-lg font-bold'>Seleccione Investigadores</h2>
        </CustomModal.Header>
        <CustomModal.Body>
          <ListSelectInvestigator
            onSelect={handleSelectInvestigators}
            investigatorsSelected={investigatorsSelected}
          />
        </CustomModal.Body>
        <CustomModal.Footer>
          <BtnGrayOutline
            className='px-20'
            onClick={handleHideInvestigatorsModal}
          >
            Cerrar
          </BtnGrayOutline>
        </CustomModal.Footer>
      </CustomModal>

      <CustomModal show={showCrimesModal} onHide={handleHideCrimesModal}>
        <CustomModal.Header>
          <h2 className='text-lg font-bold'>Seleccione Delitos</h2>
        </CustomModal.Header>
        <CustomModal.Body>
          <ListSelectCrimes
            onSelect={handleSelectCrimes}
            crimesSelected={crimesSelected}
          />
        </CustomModal.Body>
        <CustomModal.Footer>
          <BtnGrayOutline className='px-20' onClick={handleHideCrimesModal}>
            Cerrar
          </BtnGrayOutline>
        </CustomModal.Footer>
      </CustomModal>
    </>
  )
}

export default ExampleUsage
```
### 🎞️ Animaciones de Apertura y Cierre

El modal incluye animaciones de apertura y cierre gracias al CSS moderno. Estas animaciones mejoran la experiencia del usuario al proporcionar transiciones suaves.

### 🔄 Comparación con **react-bootstrap**
El modo de uso de la modal es similar al de los modales en `react-bootstrap`, lo que facilita su integración en proyectos que ya utilizan esta biblioteca. Sin embargo, al utilizar `createPortal`, garantizamos que el modal se renderice fuera de la **jerarquía DOM** principal, evitando problemas de superposición y estilos heredados.

### Ventajas de CustomModal sobre react-bootstrap:

**Integración con Tailwind CSS**: Facilita el uso de clases utilitarias para personalizar estilos.
**Flexibilidad con tailwind-merge**: Permite combinar y sobrescribir clases de Tailwind sin conflictos.
**Animaciones Personalizadas**: Simplifica la implementación de animaciones específicas mediante CSS.

### Conclusión

Al integrar `tailwind-merge` en nuestros componentes de botón personalizados, podemos aprovechar al máximo las utilidades de Tailwind CSS mientras mantenemos la flexibilidad y control sobre los estilos. Esto permite que los componentes como `BtnBlue`, `BtnGreen`, `BtnCyan`, etc., sean altamente **reutilizables** y **personalizables** según las necesidades de la aplicación.

<div align="center">
  <img src="https://github.com/user-attachments/assets/b2ddd381-1f7c-437c-bcde-3add0fb6c603" alt="Captura de pantalla" width="500px" />
</div>

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RegistroProducto } from '../Productos/RegistroProducto'
import { Products } from '../Productos/Products'
import { useState } from 'react'
import { Empleados } from '../Usuarios/Empleados'
import { Usuarios } from '../Usuarios/Usuarios'

export const Admin = () => {
  const [muestraItem, setMuestraItem] = useState(false);

  // const mostrar = (item) => {
  //   setMuestraItem(item)
  //   console.log(muestraItem)
  // }

  return (
    <>
      <div className='flex p-4 justify-center content-center bg-blue-900 mx-auto'>
        <nav className='  flex items-center justify-between'>
          <ul className=' justify-center flex space-x-4 text-white'>
            <li><Link className=' hover:text-gray-400 text-2xl' to={'/'}>Inicio</Link></li>
            <li><button className='hover:text-gray-400 text-2xl' onClick={() => setMuestraItem('usuario')}>Usuarios</button></li>
            <li><button className='hover:text-gray-400 text-2xl' onClick={() => setMuestraItem('empleado')}>Empleados</button></li>
            <li><button className='hover:text-gray-400 text-2xl' onClick={() => setMuestraItem('producto')}>Productos</button></li>
          </ul>
        </nav>
      </div>

      {muestraItem == 'producto' ?
        <Products /> : null
      }
      {muestraItem == 'empleado' ?
        <Empleados /> : null
      }
      {muestraItem == 'usuario' ?
        <Usuarios /> : null
      }

    </>
  )
}


import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const Usuarios = () => {
  const [usuario, setUsuario] = useState([]);


  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        setUsuario(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [])

  return (
    <>
      <div>
        <h1 className=' font-extrabold text-2xl text-center mt-2'>Usuarios</h1>
            
      </div>
      <div className='p-7'>
        <table className=' border  min-w-full'>
          <thead>
            <tr className=' text-center bg-cyan-950 text-white'>
              <th className=' border'>ID</th>
              <th className=' border'>Nombre</th>
              <th className=' border'>Email</th>
              <th className=' border'>Rol</th>
            </tr>
          </thead>
          <tbody className=' text-center'>
            {usuario.map(item => (
              <tr key={item.id}>
                <td className=' border bg-gray-300'>{item.id}</td>
              <td className=' border bg-gray-300'>{item.nombre}</td>
              <td className=' border bg-gray-300'>{item.email}</td>
              <td className=' border bg-gray-300'>{item.rol}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export const RegistroUsuario = () => {
  //Creamos un estado que va a contener los datos del formulario
  const [usuario, setUsuario] = useState({
    'nombre': "",
    'email': "",
    'password': "",
    'rol': 'cliente',
  })

  // Creamos una funcion que reciba un evento para obtener los datos del form
    const handleChangeInput = (event) => {
      // desestructuramos y se toman las propieades name y value
      const {name, value} = event.target 
      //actualizamos los cambios mientras se crea una copia en user
      setUsuario(user => ({
        ...user,
        [name]: value
      }))
      console.log(usuario) 
    }


    //Funcion para enviar los datos
    const handleSubmit = async (e) => { 
      e.preventDefault();
      try {
        await axios.post('http://localhost:4000/users', usuario)
        alert('Registro creado con exito :)')
      } catch (error) {
        console.error(error)
      }

    }

  return (
    <div>
      <div className=' p-4 flex items-center bg-blue-500'>
          <h1 className=' text-white text-center font-bold text-3xl flex-1 rounded'>
            <Link to={'/'}>Tienda A&E</Link>
          </h1>
        </div>
      <div className="container mx-auto mt-11 text-center">
        <h1 className="text-4xl font-bold">Registro de usuario</h1>
      </div>
      <div className=" content-center container mx-auto p-4 max-w-md border border-amber-500 rounded mt-3">
        <form onSubmit={handleSubmit} className="flex flex-col" action="">
          <label className="mb-1" >Nombre:</label>
          <input className="border p-2 rounded" name='nombre' onChange={handleChangeInput} type="text" placeholder="Ingresa tu nombre" />
          <label className="mb-1" for="">Correo electronico</label>
          <input className="border p-2 rounded" name='email' onChange={handleChangeInput} type="email" placeholder="Ingresa un correo electronico" />
          <label className="mt-2 mb-1" for="">Contraseña</label>
          <input className="border p-2 rounded" name='password' onChange={handleChangeInput} type="password" placeholder="Ingresa tu contraseña" />

          <button className=' mt-3 bg-amber-600 text-white left-48 border p-2 py-1 rounded active:bg-green-800'>Registrarme</button>

        </form>
      </div>
    </div>
  )
}

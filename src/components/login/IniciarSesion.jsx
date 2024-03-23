import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const IniciarSesion = () => {
  const [credencial, setCredencial] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [sesion, setSesion] = useState({
    email: '',
    password: ''
  })


  //condicion de inicio 

  // leemos el input
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setSesion(sesion => ({
      // copia del input
      ...sesion,
      [name]: value
    }))
    console.log(sesion)
  }

  const getDato = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users')
      setCredencial(response.data)
      console.log(credencial)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDato()
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    credencial.forEach((dato) => {
      if (dato.email == sesion.email && dato.password == sesion.password) {
        navigate(`/A&E-Store/Administracion?name=${dato.nombre}`)
        alert('Bienvenido')
        return
      } else {
        setError('Correo o contraseña son incorrectos')
      }
    })
  }




  return (
    <>
      <div className="container mx-auto mt-11 text-center">
        <h1 className="text-4xl font-bold">INICIA SESION</h1>
      </div>
      <div className=" content-center container mx-auto p-4 max-w-md border border-green-600 rounded mt-3">
        <form onSubmit={handleSubmit} className="flex flex-col" action="">
          <label className="mb-1" for="">Usuario</label>
          <input onChange={handleChangeInput} name='email' className="border p-2 rounded" type="email" placeholder="Ingresa tu nombre de usuario" />
          <label className="mt-2 mb-1" for="">Contraseña</label>
          <input onChange={handleChangeInput} name='password' className="border p-2 rounded" type="password" placeholder="Ingresa tu contraseña" />

          <button type='submit' className=' mt-3 bg-green-600 text-white left-48 border p-2 py-1 rounded active:bg-green-800'>Iniciar sesion</button>

        </form>
      </div>
      <div className='container mx-auto mt-5 text-center flex-row'>
        <h1>¿No tienes una cuenta?</h1>
        <Link to={'/RegistroUsuario'}>
          <button className=' bg-blue-700 text-white left-48 border p-2 py-1 rounded active:bg-blue-950'>Registrate</button>
        </Link>

      </div>

      {error &&
        <p className=' bg-red-600 text-red-50 text-1xl text-center p-2 rounded-3xl mr-52 ml-52'>{error}</p>}
    </>
  )
}

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const RegistrarEmpleados = () => {

    const [empleado, setEmpleado] = useState({
        'name': "",
        'rfc': "",
        'email': "",
        'password': "",
        'rol':""
    });

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setEmpleado(dato => ({
            ...dato,
            [name]: value
        }))
    }
    console.log(empleado)

    const cargaDatos = async (e) => {
        e.preventDefault;
        try {
            await axios.post('http://localhost:4000/empleado', empleado)
            alert('Empleado registrado con exito')           
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div>
                <div className=' p-4 mt-3 flex items-center'>
                    <h1 className=' text-white text-center font-bold text-3xl flex-1 bg-blue-700 rounded'>
                        <Link to={'/'}>Tienda X</Link>
                    </h1>
                </div>
                <div className="container mx-auto mt-11 text-center">
                    <h1 className="text-4xl font-bold">REGISTRO DE EMPLEADOS</h1>
                </div>
                <div className=' container rounded-md content-center max-w-md mx-auto mt-3 p-4 border'>
                    <form onSubmit={cargaDatos} className=' bg-amber-200 flex flex-col rounded-md p-3' action="">
                        <h1 className=' font-extralight text-center text-2xl'>Ingresa los datos del empleado</h1>
                        <label className=' mt-4' htmlFor="">Nombre Completo:</label>
                        <input name='name' onChange={handleChangeInput} className=' rounded-lg' type="text" />
                        <label htmlFor="">RFC</label>
                        <input name='rfc' onChange={handleChangeInput} className=' rounded-lg' type="text" />
                        <label htmlFor="">Correo Electronico</label>
                        <input name='email' onChange={handleChangeInput} className=' rounded-lg' type="email" />
                        <label htmlFor="">Password</label>
                        <input name='password' onChange={handleChangeInput} className=' rounded-lg' type="password" />
                        <label htmlFor="">Seleccciona el cargo</label>
                        <select name="rol" onChange={handleChangeInput} id="">
                            <option>Vendedor</option>
                            <option>Gerente</option>
                            <option>Almacen</option>
                            <option>Seguridad</option>
                        </select>
                        <button className=' rounded-md p-3 mt-5 mb-2 bg-yellow-600 h text-white' type="submit">Registrar Empleado</button>
                    </form>
                </div>

            </div>
        </>
    )
}

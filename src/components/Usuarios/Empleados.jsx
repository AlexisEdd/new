import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const Empleados = () => {
    const [empleado, setEmpleado] = useState([])



    useEffect(() => {
        const getEmpleado = async () => {
            try {
                const respuesta = await axios.get('http://localhost:4000/empleado')
                setEmpleado(respuesta.data)

            } catch (error) {
                console.error(error)
            }
            console.log(empleado);
        }
        getEmpleado();
    }, []);


    return (
        <>
            <div>
                <h1 className=' text-2xl text-center'>Empleados</h1>
                <img src="https://cdn-icons-png.flaticon.com/256/554/554846.png" alt="" />
            </div>
            <div className='p-4 '>
                <table className=' min-w-full'>
                    <thead className=' border text-white border-black bg-cyan-900'>
                        <tr>
                            <th className=' border border-black'>ID</th>
                            <th className=' border border-black'>Nombre</th>
                            <th className=' border border-black'>Cargo</th>
                            <th className=' border border-black'>RFC</th>
                            <th className=' border border-black'>Correo</th>
                        </tr>
                    </thead>
                    {empleado.map(item => (
                        <tbody className=' text-center'>
                            <tr key={item.id}>
                                <td className=' border border-black'>{item.id}</td>
                                <td className=' border border-black'>{item.name}</td>
                                <td className=' border border-black'>{item.rol}</td>
                                <td className=' border border-black'>{item.rfc}</td>
                                <td className=' border border-black'>{item.email}</td>
                            </tr>

                        </tbody>
                    ))}
                </table>
            </div>




        </>
    )
}

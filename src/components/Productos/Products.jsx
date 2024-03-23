import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export const Products = () => {
    const [productos, setProductos] = useState([]);




    useEffect(() => {
        const getProducts = async () => {
            try {
                const respuesta = await axios.get('http://localhost:4000/productos')
                setProductos(respuesta.data);
                console.log('Exito')
            } catch (error) {
                console.error('No se pudo exctraer los datos', error);
            }
            console.log(productos);
        };
        getProducts();
    }, []);


    return (
        <div>
            <div className=' mt-4'>
                <h1 className='text-center font-extrabold text-2xl'>Productos</h1>
            </div>
            <div className=' p-4'>

                <table className=' min-w-full border border-gray-900'>
                    <thead className=' bg-gray-600 text-center'>
                        <tr className=' text-white text-center'>
                            <th className='border-gray-900'>Nombre</th>
                            <th className='border-gray-900' >Categoria</th>
                            <th className='border-gray-900'>Descripcion</th>
                            <th className='border-gray-900'>Precio</th>
                            <th className='border-gray-900'>Imagen</th>
                            <th className='border-gray-900'>Modificar Producto</th>
                        </tr>
                    </thead>

                    <tbody >
                        {productos.map(product => (
                            <tr key={product.id} className=' text-center'>
                                <td className='border border-gray-900'>{product.name}</td>
                                <td className='border border-gray-900'>{product.categoria} </td>
                                <td className='border border-gray-900'>{product.descripcion} </td>
                                <td className='border border-gray-900'>{product.precio} </td>
                                <td className='border border-gray-900 '>
                                    <img className=' mx-auto max-w-20' src={product.imagen} alt="" />
                                </td>
                                <td className='border border-gray-900 '>
                                    <button className=' hover:active:bg-slate-500 rounded-md'>
                                        <img className='p-1 max-w-10' src="https://cdn.icon-icons.com/icons2/1558/PNG/512/353430-checkbox-edit-pen-pencil_107516.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                        
                    ))}
                    </tbody>
                </table>


            </div>
        </div>
    )
}

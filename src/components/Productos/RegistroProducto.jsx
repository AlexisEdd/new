import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const RegistroProducto = () => {
    const [producto, setProducto] = useState({
        'name': "",
        'imagen': "",
        'descripcion':"",
        'precio': "",
        'categoria': ""
    })


    const handleChangeInput = (e) => {
        const{name, value} = e.target
        setProducto(product => ({
            ...product,
            [name]: value
        }))
    }

    console.log(producto)

    const registrarProducto = async (e) => {
        e.preventDefault;
       try {
        await axios.post('http://localhost:4000/productos', producto)
        alert('Producto registrado');
       } catch (error) {
        console.log(error)
       }
    }


    return (
        <>
           
            <div className="container mx-auto mt-11 text-center">
                <h1 className="text-4xl font-bold">REGISTRAR PRODUCTO</h1>
            </div>
            <div className=' container rounded-md content-center max-w-md mx-auto mt-3 p-4 border'>
                <form onSubmit={registrarProducto}  className=' text-white bg-slate-800 flex flex-col rounded-md p-3' action="">
                    <h1 className=' font-extralight text-center text-2xl'>Datos  del producto</h1>
                    <label className=' mt-4' htmlFor="">Nombre del producto:</label>
                    <input onChange={handleChangeInput} name='name'  className=' p-1 text-black rounded-3xl' type="text" />
                    <label htmlFor="">Url de imagen</label>
                    <input onChange={handleChangeInput} name='imagen'  className=' p- text-black rounded-3xl' type="text" />
                    <label htmlFor="">Descripcion</label>
                    <input onChange={handleChangeInput} name='descripcion'  className=' p-1 text-black rounded-3xl' type="text" />
                    <label htmlFor="">Precio</label>
                    <input onChange={handleChangeInput} name='precio' className=' p-1 text-black rounded-3xl' type="number" min={1} />
                    <label htmlFor="" >Categoria</label>
                    <select onChange={handleChangeInput} name="categoria" className=' p-1 text-black rounded-3xl'  id="">
                        <option>Consolas</option>
                        <option>Ropa</option>
                        <option>Jugueteria</option>
                        <option>Electronica</option>
                        <option>Calzado</option>
                    </select>
                    <button className=' hover:active:bg-slate-700 rounded-md p-3 mt-5 mb-2 bg-gray-600 h text-white' type="submit">Registrar Producto</button>
                </form>
            </div>
        </>
    )
}

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const Principal = () => {
    const [datos, setDatos] = useState([]);

    const getDatos = async () => {
        const response = await axios.get('http://localhost:4000/productos')
        setDatos(response.data)
        console.log(datos)

    }

    // Creamos variables para filtrar por categorias con .filter (dato) es una variable temporal
    const consolas = datos.filter(dato => dato.categoria === 'Consolas')
    const ropa = datos.filter(dato => dato.categoria === 'Ropa')
    const calzado = datos.filter(dato => dato.categoria === 'Calzado')
    const jugueteria = datos.filter(dato => dato.categoria === 'Jugueteria')
    const electronica = datos.filter(dato => dato.categoria === 'Electronica')

    useEffect(() => {
        getDatos()
    }, []);

    return (
        <>
            <div>
                <div className=' mb- p-4 flex items-center bg-blue-600'>
                    <h1 className=' text-white text-center font-bold text-6xl flex-1 rounded'>A&E Store</h1>
                    <Link to={'/A&E-Store/Sesion'} >
                        <button className='  ml-4 bg-yellow-500  text-white font-bold py-2 px-4 rounded active:bg-blue-800 mr-10' type="button">Iniciar sesion</button>
                    </Link>
                </div>
                <div className=' p-2 flex items-center bg-blue-500'>
                    <nav className=' mx-auto flex flex-wrap '>
                        <ul className='m-2'>
                            <li className=' inline-block'>
                                <a href="#consolas" className='text-white hover:text-gray-500'>Consolas de videojuegos</a>
                            </li>
                        </ul>
                        <ul className='m-2'>
                            <li className=' inline-block'>
                                <a href="#ropa" className='text-white hover:text-gray-500'>Ropa y Accesorios</a>
                            </li>
                        </ul>
                        <ul className='m-2'>
                            <li className=' inline-block'>
                                <a href="#calzado" className='text-white hover:text-gray-500'>Calzado</a>
                            </li>
                        </ul>
                        <ul className='m-2'>
                            <li className=' inline-block'>
                                <a href="#juguetes" className='text-white hover:text-gray-500'>Area de Juguetes</a>
                            </li>
                        </ul>
                        <ul className='m-2'>
                            <li className=' inline-block'>
                                <a href="#electronica" className='text-white hover:text-gray-500'>Electronica y Audio</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='container grid p-5'>
                    <div id='consolas' className=' container grid mt-2 mx-auto'>
                        <h1 className=' ml-10 font-thin text-2xl'>Consolas de videojuegos</h1>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">

                            {consolas.map((dato, index) => (
                                <div key={index} className=" mt-5 card bg-white p-4 rounded-lg shadow">
                                    <img className=" w-full h-auto mb-4" src={dato.imagen} alt="Imagen de la tarjeta" />
                                    <h2 className=" text-lg font-semibold mb-2">{dato.name}</h2>
                                    <p className='text-sm mb-2'>Capacidad: {dato.capacidad}</p>
                                    <p className="text-lg font-bold">$ {dato.precio}</p>
                                    <button className=" flex mt-4 p-2 bg-green-600 active:bg-green-800 text-white rounded-md">
                                        <img className=' mt-1 mr-2 h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/833/833314.png" />
                                        Agregar al carrito
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='ropa' className=' container grid mt-5 mx-auto'>
                        <h1 className=' ml-10 font-thin text-2xl'>Ropa y accesorios</h1>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">

                            {ropa.map((dato, index) => (
                                <div key={index} className=" mt-5 card bg-white p-4 rounded-lg shadow">
                                    <img className=" w-full h-auto mb-4" src={dato.imagen} alt="Imagen de la tarjeta" />
                                    <h2 className=" text-lg font-semibold mb-2">{dato.name}</h2>
                                    <p className='text-sm mb-2'>Descripcion: {dato.descripcion}</p>
                                    <p className="text-lg font-bold">$ {dato.precio}</p>
                                    <button className=" flex mt-4 p-2 bg-green-600 active:bg-green-800 text-white rounded-md">
                                        <img className=' mt-1 mr-2 h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="" />
                                        Agregar al carrito
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='calzado' className=' container grid mt-5 mx-auto'>
                        <h1 className=' ml-10 font-thin text-2xl'>Calzado</h1>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">

                            {calzado.map((dato, index) => (
                                <div key={index} className=" mt-5 card bg-white p-4 rounded-lg shadow">
                                    <img className=" w-full h-auto mb-4" src={dato.imagen} alt="Imagen de la tarjeta" />
                                    <h2 className=" text-lg font-semibold mb-2">{dato.name}</h2>
                                    <p className='text-sm mb-2'>Descripcion: {dato.descripcion}</p>
                                    <p className="text-lg font-bold">$ {dato.precio}</p>
                                    <button className=" flex mt-4 p-2 bg-green-600 active:bg-green-800 text-white rounded-md">
                                        <img className=' mt-1 mr-2 h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="" />
                                        Agregar al carrito
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='juguetes' className=' container grid mt-5 mx-auto'>
                        <h1 className=' ml-10 font-thin text-2xl'>Area de Juguetes</h1>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">

                            {jugueteria.map((dato, index) => (
                                <div key={index} className=" mt-5 card bg-white p-4 rounded-lg shadow">
                                    <img className=" w-full h-auto mb-4" src={dato.imagen} alt="Imagen de la tarjeta" />
                                    <h2 className=" text-lg font-semibold mb-2">{dato.name}</h2>
                                    <p className='text-sm mb-2'>Descripcion: {dato.descripcion}</p>
                                    <p className="text-lg font-bold">$ {dato.precio}</p>
                                    <button className=" flex mt-4 p-2 bg-green-600 active:bg-green-800 text-white rounded-md">
                                        <img className=' mt-1 mr-2 h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="" />
                                        Agregar al carrito
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='electronica' className=' container grid mt-5 mx-auto'>
                        <h1 className=' ml-10 font-thin text-2xl'>Electronica y Audio</h1>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">

                            {electronica.map((dato, index) => (
                                <div key={index} className=" mt-5 card bg-white p-4 rounded-lg shadow">
                                    <img className=" w-full h-auto mb-4" src={dato.imagen} alt="Imagen de la tarjeta" />
                                    <h2 className=" text-lg font-semibold mb-2">{dato.name}</h2>
                                    <p className='text-sm mb-2'>Descripcion: {dato.descripcion}</p>
                                    <p className="text-lg font-bold">$ {dato.precio}</p>
                                    <button className=" flex mt-4 p-2 bg-green-600 active:bg-green-800 text-white rounded-md">
                                        <img className=' mt-1 mr-2 h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="" />
                                        Agregar al carrito
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

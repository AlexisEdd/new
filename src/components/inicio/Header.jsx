import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className=' p-4 flex items-center bg-blue-500'>
            <h1 className=' text-white text-center font-bold text-3xl flex-1 rounded'>
                <Link to={'/'}>Tienda A&E</Link>
            </h1>
        </div>
    )
}

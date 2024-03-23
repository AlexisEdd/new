import React from 'react'
import { Header } from './components/inicio/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

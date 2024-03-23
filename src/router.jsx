import { createBrowserRouter } from 'react-router-dom';
import { IniciarSesion } from './components/login/IniciarSesion';
import { Principal } from './components/inicio/Principal';
import { RegistroUsuario } from './components/login/RegistroUsuario';
import { Admin } from './components/Administrador/Admin';
import { RegistrarEmpleados } from './components/Administrador/RegistrarEmpleados';
import { RegistroProducto } from './components/Productos/RegistroProducto';
import { Products } from './components/Productos/Products';
import { Usuarios } from './components/Usuarios/Usuarios';
import { Empleados } from './components/Usuarios/Empleados';
import { Layout } from './Layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Principal />
    },
    {
        path: "/A&E-Store",
        element: <Layout />,
        children: [
            {
                path: "/A&E-Store/Sesion",
                element: <IniciarSesion />
            },
            {
                path: "/A&E-Store/Administracion",
                element: <Admin />
            },
            {
                path: "/A&E-Store/RegistroEmpleados",
                element: <RegistrarEmpleados />
            },
            {
                path: "/A&E-Store/RegistroProducto",
                element: <RegistroProducto />
            }
        ]
    },
    {
        path: "/Products",
        element: <Products />
    },
    {
        path: "/Empleado",
        element: <Empleados />
    },
    {
        path: "/Usuario",
        element: <Usuarios />
    },
    {
        path: "/RegistroUsuario",
        element: <RegistroUsuario />
    }

])

export default router
import { useContext } from "react"
import { AuthContext } from "../Hook/AuthContext.jsx"
import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoute = () => {
    const token = localStorage.getItem('tokenLogin')
    const { isLoading, isError } = useContext(AuthContext)

    if (!token) {
        window.location.href  = '/'
        return null
    }
    if (isLoading) {
        return <div>CARGANDO...</div>
    }
    if (isError) {
        return <Navigate to='/'/>
    }

   return <Outlet />

}



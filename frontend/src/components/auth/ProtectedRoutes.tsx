import { type ReactNode } from "react"
import { Navigate } from "react-router-dom"


export const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
    const token = localStorage.getItem("token")



    return (
        <>{!token ? <Navigate to={'/signin'} /> : children}</>
    )
}

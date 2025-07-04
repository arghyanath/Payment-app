import { type ReactNode } from "react"
import { Navigate } from "react-router-dom"


export const UnprotectedRoutes = ({ children }: { children: ReactNode }) => {


    const token = localStorage.getItem("token")


    return (
        <>{token ? <Navigate to={'/dashboard'} /> : children}</>
    )
}

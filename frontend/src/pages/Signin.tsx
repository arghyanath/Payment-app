import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { SignDesc } from "../components/ui/SignDesc";
import { SignHeader } from "../components/ui/SignHeader";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Signin() {
    const usernameRef = useRef<any>(null)
    const passwordRef = useRef<any>(null)
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current.value
        const password = passwordRef.current.value

        const response = await axios.post(`${BACKEND_URL}/user/signin`, {
            username,
            password
        })

        const jwt = `Bearer ${response.data.token}`
        localStorage.setItem("token", jwt)

        navigate("/dashboard")

    }




    return <div className=" flex justify-center items-center w-screen h-screen bg-gray-100" >
        <div className=" flex flex-col bg-white p-8 w-96 rounded-xl gap-3">
            <SignHeader>Sign in now</SignHeader>
            <SignDesc>Enter your credentials to access your account</SignDesc>
            <Input reference={usernameRef} placeholder="example@email.com" label="Email" />
            <Input reference={passwordRef} placeholder="12345678" label="Password" />
            <Button onClick={signin} text="Sign in" type='primary' />
            <div className="text-center text-sm">Don't have an account ? <span className=" underline font-medium "><Link to={"/signup"}>Sing up</Link></span></div>
        </div>
    </div>
}
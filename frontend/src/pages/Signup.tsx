import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { SignDesc } from "../components/ui/SignDesc";
import { SignHeader } from "../components/ui/SignHeader";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Signup() {
    const usernameRef = useRef<any>(null)
    const passwordRef = useRef<any>(null)
    const firstNameRef = useRef<any>(null)
    const lastNameRef = useRef<any>(null)
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value


        await axios.post(`${BACKEND_URL}/user/signup`, {
            username,
            password,
            firstName,
            lastName
        })

        navigate("/signin")

    }

    return <div className=" flex justify-center items-center w-screen h-screen bg-gray-100" >
        <div className=" flex flex-col bg-white p-8 w-96 rounded-xl gap-3">
            <SignHeader>Sign up now</SignHeader>
            <SignDesc>Enter your credentials to create an account</SignDesc>
            <Input reference={firstNameRef} placeholder="John" label="First Name" />
            <Input reference={lastNameRef} placeholder="Doe" label="Last Name" />
            <Input reference={usernameRef} placeholder="example@email.com" label="Email" />
            <Input reference={passwordRef} placeholder="12345678" label="Password" />
            <Button onClick={signup} text="Sign up" type='primary' />
            <div className="text-center text-sm">Already have an account ? <span className=" underline font-medium"><Link to={"/signin"}>Sing in</Link></span></div></div>
    </div >
}
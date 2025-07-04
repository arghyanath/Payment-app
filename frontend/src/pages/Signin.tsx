import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { SignDesc } from "../components/ui/SignDesc";
import { SignHeader } from "../components/ui/SignHeader";

export default function Signin() {
    return <div className=" flex justify-center items-center w-screen h-screen bg-gray-100" >
        <div className=" flex flex-col bg-white p-8 w-96 rounded-xl gap-3">
            <SignHeader>Sign in now</SignHeader>
            <SignDesc>Enter your credentials to access your account</SignDesc>
            <Input placeholder="example@email.com" label="Email" />
            <Input placeholder="12345678" label="Password" />
            <Button text="Sign in" type='primary' />
            <div className="text-center text-sm">Don't have an account ? <span className=" underline font-medium "><Link to={"/signup"}>Sing up</Link></span></div>
        </div>
    </div>
}
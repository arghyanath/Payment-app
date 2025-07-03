import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SignDesc } from "@/components/ui/SignDesc";
import { SignHeader } from "@/components/ui/SignHeader";
import Link from 'next/link'

export default function Signp() {
    return <div className=" flex justify-center items-center w-screen h-screen bg-gray-100" >
        <div className=" flex flex-col bg-white p-8 w-96 rounded-xl gap-3">
            <SignHeader>Sign up now</SignHeader>
            <SignDesc>Enter your credentials to create an account</SignDesc>
            <Input placeholder="John" label="First Name" />
            <Input placeholder="Doe" label="Last Name" />
            <Input placeholder="example@email.com" label="Email" />
            <Input placeholder="12345678" label="Password" />
            <Button text="Sign up" type='primary' />
            <div className="text-center text-sm">Already have an account ? <span className=" underline font-medium"><Link href={"/signin"}>Sing in</Link></span></div></div>
    </div >
}
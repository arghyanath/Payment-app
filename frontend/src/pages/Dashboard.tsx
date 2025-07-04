import { useEffect, useState } from "react";
import { Navbar } from "../components/ui/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [balance, setBalance] = useState()
    const navigate = useNavigate()
    async function getBalance() {
        const res = await axios.get(`${BACKEND_URL}/account/balance`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        const balance = res.data.balance
        setBalance(balance)
    }
    function signout() {
        localStorage.removeItem("token")
        navigate('/signin')
    }
    useEffect(() => {
        getBalance()
    }, [])
    return <div>
        <Navbar />
        <div>{balance}</div>
        <Button onClick={signout} type="secondary" text="Log out" />
    </div>
}
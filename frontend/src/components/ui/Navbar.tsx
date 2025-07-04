import { ProfileIcon } from "./ProfileIcon";

export function Navbar() {
    return <div className="flex justify-between items-center px-4 py-2 shadow">
        <div>Payment App</div>
        <div className="flex items-center gap-3"><span>Hello</span>  <ProfileIcon /> </div>
    </div>
}
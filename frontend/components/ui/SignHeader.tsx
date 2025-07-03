import { ReactNode } from "react";

export function SignHeader({ children }: { children: ReactNode }) {
    return <div className=" text-2xl text-center font-bold">
        {children}
    </div>
}
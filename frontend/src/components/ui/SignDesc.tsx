import type { ReactNode } from "react";

export function SignDesc({ children }: { children: ReactNode }) {
    return <div className=" text-gray-500 text-sm text-center">
        {children}
    </div>
}
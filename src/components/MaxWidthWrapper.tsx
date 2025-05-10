import { cn } from "@/lib"
import { ReactNode } from "react"

export const MaxWidthWrapper = ({className ,children} : {children: ReactNode, className?: string}) => {
    return (
        <div className={cn(`mx-auto px-2.5 md:px-20 w-full max-w-7xl`, className)}>
            {children}
        </div>
    )
}
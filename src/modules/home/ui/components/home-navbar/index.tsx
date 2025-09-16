import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { SearchInput } from "./search-input"
import { AuthButton } from "@/modules/auth/ui/components/auth-button"

export const HomeNavbar = () => {
    return(
        <nav className="fixed top-0 left-0 right-0 rpx-2 pr-5 flex items-center h-16 bg-white  z-50">
            <div className="flex w-full items-center gap-4">
                {/* Menu And Logo */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger />
                    <Link  href="/">
                        <div className="flex items-center gap-1 p-4">
                        <Image src="/logo.png" width={32} height={32} alt="logo"/>
                        <p className="text-xl font-semibold tracking-tight">YouTube</p>
                        </div>
                    </Link>
                </div>

                {/* Search bar */}
                <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
                    <SearchInput />
                </div>

                <div className="flex flex-shrink-0 items-center gap-4">
                <AuthButton />
            </div>
            </div>
        </nav>
    )
}
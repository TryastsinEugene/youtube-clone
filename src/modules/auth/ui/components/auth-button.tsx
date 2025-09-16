import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export const AuthButton = () => {
    return (
       <>  
            <SignedIn>
                <UserButton />     
                {/* Add menu item for Studio and User profile */}
            </SignedIn>      
           <SignedOut>
            <SignInButton mode="modal">
                <Button
                variant="outline"
                className="py-2 px-4 rounded-full text-sm text-blue-600 hover:text-blue-500 hover:bg-neutral-100 border-blue-500/20 font-medium shadow-none"
             >
                <UserCircleIcon />
                Sign In
                </Button>
            </SignInButton>             
            </SignedOut>            
        </>           
            
        
    )
}
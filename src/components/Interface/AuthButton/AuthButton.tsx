'use client'

import { Button } from "@/components/ui/button";
import { getUserInfo, removeUser } from "@/services/auth.service";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AccountMenu from "../AccountMenu/AccountMenu";

const AuthButton = () => {
    const userInfo = getUserInfo();

    const router = useRouter()

    const handleLogout = () => {
        removeUser();
        router.refresh()
    }

    return (
        <>
            {userInfo?.userId ?

                (<>
                    <AccountMenu></AccountMenu>
                </>
                ) :
                (< Button variant="default">

                    <Link href={'/auth/login'}>Login
                    </Link>

                </Button>)}
        </>
    );
};

export default AuthButton;
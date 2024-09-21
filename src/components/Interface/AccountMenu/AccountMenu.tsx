'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RiLogoutBoxLine } from "react-icons/ri";
import AuthButton from '../AuthButton/AuthButton';
import { getUserInfo, removeUser } from '@/services/auth.service';
import removeCookie from '@/utils/cookie';
import Image from 'next/image';

export default function AccountMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userInfo = getUserInfo();

    console.log(userInfo);
    const router = useRouter()


    const handleLogout = () => {
        removeCookie()
        removeUser();
        router.refresh()
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="relative z-50">


            {userInfo ? <>
                <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2"
                >
                    <Image
                        width={300}
                        height={300}
                        src={`${userInfo.profile || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.2070558022.1715361181&semt=ais_hybrid"}`}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border z-[2000] overflow-hidden border-gray-200 rounded-md shadow-lg">
                        <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-sans font-bold">
                            {userInfo.name}
                        </Link>
                        <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                        </Link>

                        {(userInfo.role == "admin" || userInfo.role == "faculty") ? (
                            <Link href="/dashboard/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Dashboard
                            </Link>
                        ) : null}

                        <Button className='w-full rounded-none text-white font-bold' variant={"destructive"} onClick={handleLogout}>
                            <RiLogoutBoxLine className='text-xl mr-3' />
                            Logout

                        </Button>
                    </div>
                )}

            </> : <AuthButton></AuthButton>}






        </div>
    );
}

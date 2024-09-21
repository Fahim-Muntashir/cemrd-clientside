'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { MoreHorizontal, UserCog, Trash, Ban } from 'lucide-react'
import { getAllUsers, updateUserRole } from '@/services/actions/users'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

type Role = 'ADMIN' | 'FACULTY' | 'USER'

interface User {
    id: string
    name: string
    email: string
    role: Role
    profilePhoto: string
    status: string
}


const UsersTable = ({ initialUsers }: { initialUsers: User[] }) => {
    const router = useRouter();

    const handleRoleChange = async (userId: string, role: Role) => {
        const res = await updateUserRole(userId, { role: role })

        if (res.success) {
            toast.success(res.message)
            router.refresh();
        }
    }

    const handleDeleteUser = (userId: string) => {

    }

    const confirmDeleteUser = (userId: string) => {

    }
    const handleBlockUser = (userId: string) => {

    }


    const getRoleBadgeColor = (role: Role): string => {
        switch (role) {
            case 'ADMIN':
                return 'bg-red-100 text-red-800'
            case 'FACULTY':
                return 'bg-yellow-100 text-yellow-800'
            default:
                return 'bg-green-100 text-green-800'
        }
    }

    return (
        <div className="w-full container overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {initialUsers.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Avatar>
                                    <Image src={user?.profilePhoto || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.2070558022.1715361181&semt=ais_hybrid"} alt={user.name} width={40} height={40} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Badge className={getRoleBadgeColor(user.role)}>
                                    {user.role}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'ADMIN')}>
                                            <UserCog className="mr-2 h-4 w-4 text-red-600" />
                                            <span>Change Role to Admin</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'FACULTY')}>
                                            <UserCog className="mr-2 h-4 w-4 text-yellow-600" />
                                            <span>Change Role to Faculty</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'USER')}>
                                            <UserCog className="mr-2 h-4 w-4 text-green-600" />
                                            <span>Change Role to User</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => handleDeleteUser(user.id)}>
                                            <Trash className="mr-2 h-4 w-4 text-red-600" />
                                            <span>Delete User</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleBlockUser(user.id)}>
                                            <Ban className="mr-2 h-4 w-4 text-orange-600" />
                                            <span>Block User</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>




        </div>
    )
}

export default UsersTable;
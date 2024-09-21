
import Image from 'next/image'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
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
import { getAllUsers } from '@/services/actions/users'
import RoleChange from '@/components/Interface/actionButton/RoleChange'

type Role = 'Admin' | 'FACULTY' | 'User'

export interface IUser {
    id: string;
    name: string;
    email?: string;
    profilePhoto: string | null;
    role: Role;
    status: string;
}



const UserPage = async () => {

    const userList: IUser[] = await getAllUsers()

    const getRoleBadgeColor = (role: Role): string => {
        switch (role) {
            case 'Admin':
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
                    {userList.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Avatar>
                                    <Image src={user?.profilePhoto || ""} alt={user.name} width={40} height={40} />
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
                            <TableCell className="text-right ">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <RoleChange user={user}></RoleChange>



                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


        </div>
    )
}
export default UserPage;
'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { DashboardNav } from './dashboard-nav';
import { GiHamburgerMenu } from "react-icons/gi";
import { publicItems, adminItems, facultyItems } from '../../../constants/data';
import { getUserInfo } from '@/services/auth.service';
// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {


    const user = getUserInfo();

    let items;
    if (user?.role === 'admin') {
        items = adminItems;
    } else if (user?.role === "faculty") {
        items = facultyItems;
    } else (
        items = publicItems
    )

    const [open, setOpen] = useState(false);
    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <GiHamburgerMenu />
                </SheetTrigger>
                <SheetContent side="left" className="!px-0">
                    <div className="space-y-4 py-4">
                        <div className="px-3 py-2">
                            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                Overview
                            </h2>
                            <div className="space-y-1">
                                <DashboardNav
                                    items={items}
                                    isMobileNav={true}
                                    setOpen={setOpen}
                                />
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
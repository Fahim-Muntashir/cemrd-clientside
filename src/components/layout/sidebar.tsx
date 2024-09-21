'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { DashboardNav } from './dashboard-nav';
import { useSidebar } from '@/hooks/useSidebar';
import Image from 'next/image';
import { publicItems, adminItems, facultyItems } from '../../../constants/data';
import { getUserInfo } from '@/services/auth.service';

type SidebarProps = {
    className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
    const { isMinimized, toggle } = useSidebar();

    const handleToggle = () => {
        toggle();
    };

    const user = getUserInfo();


    let items;
    if (user?.role === 'admin') {
        items = adminItems;
    } else if (user?.role === "faculty") {
        items = facultyItems;
    } else (
        items = publicItems
    )


    return (

        <aside
            className={cn(
                `relative hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
                !isMinimized ? 'w-72' : 'w-[72px]',
                className
            )}
        >
            <div className="hidden p-5 pt-10 lg:block">
                <Link
                    href={'/'}
                    target="_blank"
                >
                    <Image src={

                        "https://i.ibb.co/HpYr1kc/logo.png"
                    } height={200} width={170} alt="cemrd logo"></Image>
                </Link>
            </div>
            <FaCircleChevronLeft
                className={cn(
                    'absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground',
                    isMinimized && 'rotate-180'
                )}
                onClick={handleToggle}
            />
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="mt-3 space-y-1">
                        <DashboardNav items={items} />
                    </div>
                </div>
            </div>
        </aside>
    );
}
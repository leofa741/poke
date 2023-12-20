"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


interface Props {
    path: string;
    title: string;
    subtitle: string;
    icon: JSX.Element;
}


export default function SidebarMenuItem({ path, title, subtitle, icon }: Props) {

    const currentPath = usePathname();
    return (
        <>
            <Link href={path}
             className={`w-full position:fixed
              px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150 ${currentPath === path ? 'bg-white/5' : ''}`}>
                <div>
                    {icon}

                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">{title}</span>
                    <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
                </div>
            </Link>

        </>
    )
}

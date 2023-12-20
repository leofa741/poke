import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculator, IoLogoReact,} from 'react-icons/io5'

import SidebarMenuItem from './SidebarMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        title: 'Dashboard',
        subtitle: 'Data Overview',
        icon: <IoBrowsersOutline className="inline-block w-6 h-6 mr-2" />
    },
    {
        path: '/dashboard/counter',
        title: 'Dashboard',
        subtitle: 'Data Overview',
        icon: <IoCalculator className="inline-block w-6 h-6 mr-2" />
    },
    {
        path: '/dashboard/poke',
        title: 'poke',
        subtitle: 'Data Overview',
        icon: <IoCalculator className="inline-block w-6 h-6 mr-2" />
    }

  

]

export const Sidebar = () => {
    return (
        <>
            <div id="menu"
                style={{ width: '300px' }}
                className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll">

                <div id="logo" className="my-4 px-6">
                    <h1 className="text-lg md:text-2xl font-bold text-white">
                        <IoLogoReact className="inline-block w-6 h-6 mr-2" />
                        Dashboard   
                        </h1>
                    <p className="text-slate-500 text-sm">Manage your actions and activities</p>
                </div>

                <div id="profile" className="px-6 py-10">
                    <p className="text-slate-500">Welcome back,</p>
                    <a href="#" className="inline-flex space-x-2 items-center">
                        <span>
                            <Image
                                className="rounded-full w-8 h-8"
                                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                                alt="avatar"
                                width={32}
                                height={32}  />
                        </span>
                        <span className="text-sm md:text-base font-bold">
                            Edward Tompson
                        </span>
                    </a>
                </div>

                <div id="nav" className="w-full px-6">

                    {menuItems.map((item, index) => (
                        <SidebarMenuItem
                            key={index}
                            path={item.path}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                        />
                    ))
                    
                    }


              

              

                </div>
            </div>

        </>
    )
}

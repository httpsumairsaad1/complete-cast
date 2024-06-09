// *     **************************************************************     *
// *     *                                                            *     *
// *     *                      DEVELOPER: UMAIR SAAD                 *     *
// *     *                      COPYRIGHT 2024                        *     *
// *     *                      DATE: 10 JUNE 2024                     *     *
// *     *                                                            *     *
// *     **************************************************************     *

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from './constants'
import { usePathname, useRouter } from 'next/navigation'

const LeftSideBar = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
    <section className="left_sidebar">
        <nav className='flex flex-col gap-6'>
            <Link href="/" className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
                <Image src="/icons/logo2.png" width={23} height={27} alt="cc-logo" />
                <h1 className="text-24 font-extrabold text-white max-lg:hidden">Complete Cast</h1>
            </Link>
        </nav>

        {/* OBJECT */}
        {sidebarLinks.map(({route, label, imgURL}) => {
            return <Link href={route} key={label} className='flex gap-3 items-center py-4 max-ld:px-4 justify-center lg:justify-start'>

            {/* Size of the Icons in the LeftSideBar */}
            <Image src={imgURL} alt={label} width={24} height={24}/>
            
            {/* Text in the Left Side Bar */}
            <p>{label}</p> 
            </Link>
        })} 
    </section>
  )
}
export default LeftSideBar

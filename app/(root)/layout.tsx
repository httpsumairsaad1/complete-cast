import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from '@/components/LeftSideBar';
import Image from 'next/image'
import MobileNav from "@/components/MobileNav";
import { Toaster } from "@/components/ui/toaster"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">

        {/* main page color > orange  */}
        <main className='relative flex bg-orange-2'>
            {/* 9 June 2024, Sunday. UMAIR SAAD */}
            <LeftSideBar/>
            <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div className="flex h-16 items-center justify-between md:hidden"> 
                   <Image
                    src="/icons/logo2.png"
                    alt="menu-icon"
                    width={30}
                    height={20}  
                  />
                  <MobileNav/>
                </div>
                <div className="flex flex-col md:pb-14">
                  <Toaster/>
                  {children}

                </div>
              </div>
            </section>
            <RightSideBar/>
        </main>
    </div>
  );
}
 
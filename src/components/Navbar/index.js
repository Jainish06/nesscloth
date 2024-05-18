'use client';

export default function Navbar(){

    return <>
        <nav className="bg-gray-700 fixed w-full z-20  top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex-items-center cursor-pointer">
                    <span className="self-center text-2x1 font-semibold whitespace-nowrap">
                        NESS
                    </span>
                </div>
                
            </div>
        </nav>
    </>
}
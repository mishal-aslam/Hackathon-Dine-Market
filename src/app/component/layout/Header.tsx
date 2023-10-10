"use client"
import logo from "public/Logo.webp"
import Image from "next/image"
import Link from "next/link"
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { ShoppingCart, Search, Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
    const { isSignedIn } = useAuth();
    return (
        <>
            <div className="flex justify-between items-center py-8  px-4 md:px-28 sm:px-1">
                <Link href='/'><Image src={logo} alt='logo' /></Link>
                <div className="hidden md:block">
                    <ul className="flex gap-x-10">
                        <li className="text-lg"><Link href={'category/female'}>Female</Link></li>
                        <li className="text-lg"><Link href={"category/male"}>Male</Link></li>
                        <li className="text-lg"><Link href={"category/kids"}>Kids</Link></li>
                        <li className="text-lg"><Link href={"/allproducts"}>All Product</Link></li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <div className="flex">
                        <Search className="bg-white rounded-l h-9 w-9 " />{" "}
                        <input
                            type="search"
                            placeholder="  What you are looking for"
                            className="rounded-r"
                        ></input>

                        {/* ////////////// */}
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center  ">
                            <ShoppingCart className="relative" />
                            <span className="absolute top-4 right-35 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
                                0
                            </span>
                        </div>
                    </div>
                </div>
                {/* ///////////////// */}

                <div className='md:hidden flex justify-center items-center'>
                    <Sheet>
                        <SheetTrigger> <Menu className='w-8 h-8' /></SheetTrigger>
                        <SheetContent>
                            <ul className='flex flex-col gap-y-3 text-xl'>
                                <div className="flex justify-center items-center">
                                    <ShoppingCart className="h-10 w-10  " />
                                </div>
                                <li className="text-lg md:text-4xl text-center"><Link href={"/category/female"}>Female</Link></li>
                                <li className="text-lg md:text-4xl text-center"><Link href={"/category/male"}>Male</Link></li>
                                <li className="text-lg md:text-4xl text-center"><Link href={"/category/kids"}>Kids</Link></li>
                                <li className="text-lg md:text-4xl text-center"><Link href={"/allproducts"}>All Product</Link></li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="flex justify-between absolute top-8 right-8">
                {!isSignedIn && (
                    <SignInButton mode="modal">
                        <button className="bg-gray-800 hover:bg-primaryWhite text-white hover:text-blue-700 py-2 px-5 font-semibold rounded-lg">
                            Log-In
                        </button>
                    </SignInButton>
                )}
                <UserButton afterSignOutUrl="/" />
            </div>
        </>
    )
}

export default Header


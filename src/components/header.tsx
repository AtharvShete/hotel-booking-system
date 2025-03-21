"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Home, LogIn, MapPin, Menu, Search, ShoppingBag, User } from "lucide-react"

export function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between p-4">
                <div className="flex items-center gap-2 md:gap-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Hotel Booking</SheetTitle>
                                <SheetDescription>Explore quality accommodations, book with ease</SheetDescription>
                            </SheetHeader>
                            <nav className="mt-6 flex flex-col gap-4">
                                <Link href="/" className="flex items-center gap-2 text-lg font-medium">
                                    <Home className="h-5 w-5 text-green-600" />
                                    Home
                                </Link>
                                <Link href="/rooms" className="flex items-center gap-2 text-lg font-medium">
                                    <Search className="h-5 w-5 text-green-600" />
                                    Browse Rooms
                                </Link>
                                <Link href="/map" className="flex items-center gap-2 text-lg font-medium">
                                    <MapPin className="h-5 w-5 text-green-600" />
                                    Map View
                                </Link>
                                <Link href="/favorites" className="flex items-center gap-2 text-lg font-medium">
                                    <Heart className="h-5 w-5 text-green-600" />
                                    My Favorites
                                </Link>
                                <Link href="/orders" className="flex items-center gap-2 text-lg font-medium">
                                    <ShoppingBag className="h-5 w-5 text-green-600" />
                                    My Orders
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold text-xl text-green-600">Hotel Booking</span>
                    </Link>
                    <nav className="hidden gap-6 md:flex">
                        <Link href="/" className="text-sm font-medium transition-colors hover:text-green-600">
                            Home
                        </Link>
                        <Link href="/rooms" className="text-sm font-medium transition-colors hover:text-green-600">
                            Browse Rooms
                        </Link>
                        <Link href="/map" className="text-sm font-medium transition-colors hover:text-green-600">
                            Map View
                        </Link>
                        <Link href="/coupons" className="text-sm font-medium transition-colors hover:text-green-600">
                            Coupons
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    {isLoggedIn ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Avatar>
                                        <AvatarImage src="/placeholder.svg" alt="User avatar" />
                                        <AvatarFallback>User</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
                                        <User className="h-4 w-4" />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/orders" className="flex items-center gap-2 cursor-pointer">
                                        <ShoppingBag className="h-4 w-4" />
                                        My Orders
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/favorites" className="flex items-center gap-2 cursor-pointer">
                                        <Heart className="h-4 w-4" />
                                        My Favorites
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Sign Out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(true)}>
                            <LogIn className="mr-2 h-4 w-4" />
                            Login/Register
                        </Button>
                    )}
                </div>
            </div>
        </header>
    )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Package, Settings, Star, Tag, User } from "lucide-react"

export default function ProfilePage() {
    const [userData, setUserData] = useState({
        name: "John Smith",
        phone: "13800138000",
        email: "john.smith@example.com",
        avatar: "/placeholder.svg",
        points: 320,
    })

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1 py-8">
                <div className="container grid gap-8 md:grid-cols-[240px_1fr]">
                    {/* Sidebar */}
                    <aside className="hidden md:block">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex flex-col items-center space-y-4 text-center">
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage src={userData.avatar} alt={userData.name} />
                                        <AvatarFallback>{userData.name.slice(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-lg font-medium">{userData.name}</h3>
                                        <p className="text-sm text-muted-foreground">Points: {userData.points}</p>
                                    </div>
                                </div>
                                <nav className="mt-6 flex flex-col space-y-1">
                                    <Button variant="ghost" className="justify-start" asChild>
                                        <a href="#profile">
                                            <User className="mr-2 h-4 w-4 text-green-600" />
                                            Personal Info
                                        </a>
                                    </Button>
                                    <Button variant="ghost" className="justify-start" asChild>
                                        <a href="#orders">
                                            <Package className="mr-2 h-4 w-4 text-green-600" />
                                            My Orders
                                        </a>
                                    </Button>
                                    <Button variant="ghost" className="justify-start" asChild>
                                        <a href="#favorites">
                                            <Heart className="mr-2 h-4 w-4 text-green-600" />
                                            My Favorites
                                        </a>
                                    </Button>
                                    <Button variant="ghost" className="justify-start" asChild>
                                        <a href="#coupons">
                                            <Tag className="mr-2 h-4 w-4 text-green-600" />
                                            My Coupons
                                        </a>
                                    </Button>
                                    <Button variant="ghost" className="justify-start" asChild>
                                        <a href="#settings">
                                            <Settings className="mr-2 h-4 w-4 text-green-600" />
                                            Account Settings
                                        </a>
                                    </Button>
                                </nav>
                            </CardContent>
                        </Card>
                    </aside>

                    {/* Main content area */}
                    <div className="space-y-8">
                        <Card id="profile">
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                                <CardDescription>View and edit your personal information</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                                        <Avatar className="h-24 w-24">
                                            <AvatarImage src={userData.avatar} alt={userData.name} />
                                            <AvatarFallback>{userData.name.slice(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-medium">{userData.name}</h3>
                                            <p className="text-sm text-muted-foreground">Update your avatar and personal information</p>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm">
                                                    Change Avatar
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    Remove Avatar
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Username</Label>
                                                <Input id="name" defaultValue={userData.name} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" defaultValue={userData.phone} />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" defaultValue={userData.email} />
                                        </div>
                                        <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card id="orders">
                            <CardHeader>
                                <CardTitle>My Orders</CardTitle>
                                <CardDescription>View all your orders</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="all" className="w-full">
                                    <TabsList className="grid w-full grid-cols-4">
                                        <TabsTrigger value="all">All</TabsTrigger>
                                        <TabsTrigger value="pending">Pending</TabsTrigger>
                                        <TabsTrigger value="completed">Completed</TabsTrigger>
                                        <TabsTrigger value="canceled">Canceled</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="all" className="mt-4 space-y-4">
                                        {[1, 2, 3].map((order) => (
                                            <Card key={order}>
                                                <CardContent className="p-4">
                                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                                        <div className="space-y-1">
                                                            <div className="flex items-center gap-2">
                                                                <h3 className="font-semibold">Luxury Ocean View Suite</h3>
                                                                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                                                    Completed
                                                                </span>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground">Order ID: ORD12345678{order}</p>
                                                            <p className="text-sm text-muted-foreground">
                                                                Stay: 2023-10-0{order} to 2023-10-0{order + 2}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Button variant="outline" size="sm">
                                                                View Details
                                                            </Button>
                                                            <Button variant="outline" size="sm">
                                                                <Star className="mr-1 h-4 w-4" />
                                                                Review
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </TabsContent>
                                    <TabsContent value="pending" className="mt-4">
                                        <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                                            <p className="text-sm text-muted-foreground">No pending orders</p>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="completed" className="mt-4">
                                        <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                                            <p className="text-sm text-muted-foreground">No completed orders</p>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="canceled" className="mt-4">
                                        <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                                            <p className="text-sm text-muted-foreground">No canceled orders</p>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>

                        <Card id="favorites">
                            <CardHeader>
                                <CardTitle>My Favorites</CardTitle>
                                <CardDescription>View your saved rooms</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {[1, 2, 3].map((item) => (
                                        <Card key={item} className="overflow-hidden">
                                            <div className="relative">
                                                <img
                                                    src="/placeholder.svg?height=200&width=300"
                                                    alt="Room image"
                                                    className="h-40 w-full object-cover"
                                                />
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="absolute right-2 top-2 rounded-full bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                                                >
                                                    <Heart className="h-5 w-5 fill-red-500" />
                                                    <span className="sr-only">Remove from favorites</span>
                                                </Button>
                                            </div>
                                            <CardContent className="p-4">
                                                <div className="space-y-2">
                                                    <h3 className="font-semibold">Japanese Minimalist Inn {item}</h3>
                                                    <p className="text-sm text-muted-foreground">Suzhou Gardens</p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="font-bold text-green-700">$428/night</div>
                                                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                            View Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card id="coupons">
                            <CardHeader>
                                <CardTitle>My Coupons</CardTitle>
                                <CardDescription>View and redeem coupons</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-medium">My Points: {userData.points}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Earn more points by sharing rooms and completing orders
                                        </p>
                                    </div>
                                    <Button className="bg-green-600 hover:bg-green-700">Redeem Coupon</Button>
                                </div>
                                <div className="space-y-4">
                                    {[1, 2].map((coupon) => (
                                        <Card key={coupon} className="relative overflow-hidden bg-gradient-to-r from-green-50 to-green-100">
                                            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-green-100" />
                                            <CardContent className="p-4">
                                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <Tag className="h-5 w-5 text-green-600" />
                                                            <h3 className="font-bold text-xl text-green-800">${coupon * 50} Coupon</h3>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground">Valid for orders over ${coupon * 200}</p>
                                                        <p className="text-sm text-muted-foreground">Valid until: 2023-12-31</p>
                                                    </div>
                                                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                                                        Use Now
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card id="settings">
                            <CardHeader>
                                <CardTitle>Account Settings</CardTitle>
                                <CardDescription>Manage your account and security settings</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-medium">Change Password</h3>
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="current-password">Current Password</Label>
                                                <Input id="current-password" type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="new-password">New Password</Label>
                                                <Input id="new-password" type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="confirm-password">Confirm New Password</Label>
                                                <Input id="confirm-password" type="password" />
                                            </div>
                                        </div>
                                        <Button className="mt-4 bg-green-600 hover:bg-green-700">Update Password</Button>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-medium">Account Security</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium">Phone Number</p>
                                                    <p className="text-sm text-muted-foreground">{userData.phone}</p>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium">Email Address</p>
                                                    <p className="text-sm text-muted-foreground">{userData.email}</p>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}


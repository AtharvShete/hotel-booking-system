"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("login")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate successful login/registration
        router.push("/")
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1 flex items-center justify-center py-12">
                <Card className="mx-auto max-w-md w-full">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center text-green-700">
                            {activeTab === "login" ? "Account Login" : "Register Account"}
                        </CardTitle>
                        <CardDescription className="text-center">
                            {activeTab === "login"
                                ? "Login to access your account and orders"
                                : "Create an account to start using our services"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="register">Register</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password">Password</Label>
                                            <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Input id="password" type="password" placeholder="Enter your password" required />
                                    </div>
                                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                                        Login
                                    </Button>
                                </form>
                            </TabsContent>
                            <TabsContent value="register">
                                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="reg-phone">Phone Number</Label>
                                        <Input id="reg-phone" type="tel" placeholder="Enter your phone number" required />
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="col-span-2">
                                            <Input placeholder="Enter verification code" required />
                                        </div>
                                        <Button type="button" variant="outline">
                                            Get Code
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="reg-password">Password</Label>
                                        <Input id="reg-password" type="password" placeholder="Set your password" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirm-password">Confirm Password</Label>
                                        <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
                                    </div>
                                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                                        Register
                                    </Button>
                                </form>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}


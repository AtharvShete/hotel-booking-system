"use client"

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
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("/api/auth/callback/credentials", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: loginEmail, password: loginPassword }),
            })

            if (!response.ok) {
                const data: { message?: string } = await response.json() as { message?: string }
                throw new Error(data.message ?? "Failed to login")
            }

            router.push("/")
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred during login")
        } finally {
            setIsLoading(false)
        }
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            setIsLoading(false)
            return
        }

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword
                }),
            })

            const data: { message?: string } = await response.json() as { message?: string }

            if (!response.ok) {
                throw new Error(data.message ?? "Failed to register")
            }

            // Redirect to login tab after successful registration
            setActiveTab("login")
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred during registration")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1 flex items-center justify-center py-12">
                <Card className="mx-auto max-w-md w-full rounded-md">
                    <CardHeader className="space-y-1 rounded-md">
                        <CardTitle className="text-2xl font-bold text-center text-green-700 rounded-md">
                            {activeTab === "login" ? "Account Login" : "Register Account"}
                        </CardTitle>
                        <CardDescription className="text-center rounded-md">
                            {activeTab === "login"
                                ? "Login to access your account and orders"
                                : "Create an account to start using our services"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="rounded-md">
                        {error && (
                            <div className="p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                                {error}
                            </div>
                        )}

                        <Tabs defaultValue="login" className="w-full rounded-md" onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-2 rounded-md">
                                <TabsTrigger value="login" className="rounded-md">Login</TabsTrigger>
                                <TabsTrigger value="register" className="rounded-md">Register</TabsTrigger>
                            </TabsList>

                            <TabsContent value="login" className="rounded-md">
                                <form onSubmit={handleLogin} className="space-y-4 mt-4 rounded-md">
                                    <div className="space-y-2 rounded-md">
                                        <Label htmlFor="login-email" className="rounded-md">Email</Label>
                                        <Input
                                            id="login-email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                            required
                                            autoComplete="email"
                                            className="rounded-md"
                                        />
                                    </div>
                                    <div className="space-y-2 rounded-md">
                                        <div className="flex items-center justify-between rounded-md">
                                            <Label htmlFor="login-password" className="rounded-md">Password</Label>
                                            <Link href="/forgot-password" className="text-sm text-green-600 hover:underline rounded-md">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Input
                                            id="login-password"
                                            type="password"
                                            placeholder="Enter your password"
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                            required
                                            autoComplete="current-password"
                                            className="rounded-md"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 rounded-md"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Logging in..." : "Login"}
                                    </Button>
                                </form>
                            </TabsContent>

                            <TabsContent value="register" className="rounded-md">
                                <form onSubmit={handleRegister} className="space-y-4 mt-4 rounded-md">
                                    <div className="grid grid-cols-2 gap-4 rounded-md">
                                        <div className="space-y-2 rounded-md">
                                            <Label htmlFor="first-name" className="rounded-md">First Name</Label>
                                            <Input
                                                id="first-name"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required
                                                autoComplete="given-name"
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="space-y-2 rounded-md">
                                            <Label htmlFor="last-name" className="rounded-md">Last Name</Label>
                                            <Input
                                                id="last-name"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                                autoComplete="family-name"
                                                className="rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 rounded-md">
                                        <Label htmlFor="email" className="rounded-md">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoComplete="email"
                                            className="rounded-md"
                                        />
                                    </div>

                                    <div className="space-y-2 rounded-md">
                                        <Label htmlFor="reg-password" className="rounded-md">Password</Label>
                                        <Input
                                            id="reg-password"
                                            type="password"
                                            placeholder="Set your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            autoComplete="new-password"
                                            className="rounded-md"
                                        />
                                    </div>

                                    <div className="space-y-2 rounded-md">
                                        <Label htmlFor="confirm-password" className="rounded-md">Confirm Password</Label>
                                        <Input
                                            id="confirm-password"
                                            type="password"
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                            autoComplete="new-password"
                                            className="rounded-md"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 rounded-md"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Creating Account..." : "Register"}
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


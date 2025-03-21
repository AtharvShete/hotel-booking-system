import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MapPin, Star } from "lucide-react"

// Mock favorites data
const favorites = [
    {
        id: 1,
        title: "Luxury Ocean View Suite",
        description: "Enjoy magnificent ocean views and luxurious amenities for an unforgettable vacation experience.",
        price: 698,
        rating: 4.9,
        image: "/placeholder.svg?height=400&width=600",
        location: "Sanya Bay",
        date: "2023-10-15",
    },
    {
        id: 2,
        title: "Modern City Apartment",
        description: "A modern apartment in the city center, close to shopping and entertainment areas.",
        price: 458,
        rating: 4.7,
        image: "/placeholder.svg?height=400&width=600",
        location: "Shanghai Downtown",
        date: "2023-10-10",
    },
    {
        id: 3,
        title: "Classic Courtyard Inn",
        description: "Experience a perfect blend of traditional culture and modern amenities in this courtyard-style inn.",
        price: 528,
        rating: 4.8,
        image: "/placeholder.svg?height=400&width=600",
        location: "Lijiang Old Town",
        date: "2023-09-28",
    },
    {
        id: 4,
        title: "Mountain View Villa",
        description:
            "A villa surrounded by mountains, offering a peaceful natural environment and comfortable accommodation.",
        price: 888,
        rating: 4.9,
        image: "/placeholder.svg?height=400&width=600",
        location: "Hangzhou West Lake",
        date: "2023-09-20",
    },
    {
        id: 5,
        title: "Japanese Minimalist Inn",
        description:
            "Simple Japanese style, providing a quiet and comfortable living environment, suitable for leisure vacations.",
        price: 428,
        rating: 4.7,
        image: "/placeholder.svg?height=400&width=600",
        location: "Suzhou Gardens",
        date: "2023-09-15",
    },
]

export default function FavoritesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1 py-8">
                <div className="container">
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold text-green-800">My Favorites</h1>
                            <p className="text-muted-foreground">Manage your saved rooms, view and book anytime</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <Link href="/rooms">
                                <Button className="bg-green-600 hover:bg-green-700">Browse More Rooms</Button>
                            </Link>
                        </div>
                    </div>

                    <Tabs defaultValue="grid" className="w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <span className="text-sm text-gray-500">{favorites.length} favorites</span>
                            </div>
                            <TabsList className="mt-4 sm:mt-0">
                                <TabsTrigger value="grid">Grid View</TabsTrigger>
                                <TabsTrigger value="list">List View</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="grid" className="mt-6">
                            {favorites.length > 0 ? (
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {favorites.map((room) => (
                                        <Card key={room.id} className="overflow-hidden transition-all hover:shadow-lg">
                                            <div className="relative">
                                                <img
                                                    src={room.image || "/placeholder.svg"}
                                                    alt={room.title}
                                                    className="h-48 w-full object-cover"
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
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="font-semibold text-lg">{room.title}</h3>
                                                        <div className="flex items-center">
                                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                            <span className="ml-1 text-sm">{room.rating}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <MapPin className="mr-1 h-4 w-4 text-green-600" />
                                                        {room.location}
                                                    </div>
                                                    <p className="text-sm text-gray-500 line-clamp-2">{room.description}</p>
                                                    <div className="flex items-center justify-between pt-2">
                                                        <div className="flex items-end">
                                                            <span className="text-xl font-bold text-green-700">${room.price}</span>
                                                            <span className="text-sm text-gray-500">/night</span>
                                                        </div>
                                                        <Link href={`/rooms/${room.id}`}>
                                                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                                View Details
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed">
                                    <Heart className="h-12 w-12 text-gray-300" />
                                    <h3 className="mt-4 text-lg font-medium">No Favorites Yet</h3>
                                    <p className="mt-2 text-sm text-gray-500">Browse rooms and add them to your favorites</p>
                                    <Link href="/rooms" className="mt-4">
                                        <Button className="bg-green-600 hover:bg-green-700">Browse Rooms</Button>
                                    </Link>
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="list" className="mt-6">
                            {favorites.length > 0 ? (
                                <div className="space-y-4">
                                    {favorites.map((room) => (
                                        <Card key={room.id} className="overflow-hidden">
                                            <div className="grid md:grid-cols-[250px_1fr]">
                                                <div className="relative">
                                                    <img
                                                        src={room.image || "/placeholder.svg"}
                                                        alt={room.title}
                                                        className="h-48 w-full object-cover md:h-full"
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
                                                <div className="p-4">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="font-semibold text-lg">{room.title}</h3>
                                                            <div className="flex items-center">
                                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                <span className="ml-1 text-sm">{room.rating}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <MapPin className="mr-1 h-4 w-4 text-green-600" />
                                                            {room.location}
                                                        </div>
                                                        <p className="text-sm text-gray-600">{room.description}</p>
                                                        <div className="text-xs text-gray-500">Saved on: {room.date}</div>
                                                        <div className="flex items-center justify-between pt-2">
                                                            <div className="text-xl font-bold text-green-700">${room.price}/night</div>
                                                            <div className="flex gap-2">
                                                                <Button variant="outline" size="sm">
                                                                    <Heart className="mr-2 h-4 w-4 fill-red-500 text-red-500" />
                                                                    Remove
                                                                </Button>
                                                                <Link href={`/rooms/${room.id}`}>
                                                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                                        View Details
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed">
                                    <Heart className="h-12 w-12 text-gray-300" />
                                    <h3 className="mt-4 text-lg font-medium">No Favorites Yet</h3>
                                    <p className="mt-2 text-sm text-gray-500">Browse rooms and add them to your favorites</p>
                                    <Link href="/rooms" className="mt-4">
                                        <Button className="bg-green-600 hover:bg-green-700">Browse Rooms</Button>
                                    </Link>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}


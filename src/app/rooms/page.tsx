import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HotelCard } from "@/components/hotel-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search } from "lucide-react"

// Mock room data
const rooms = [
    {
        id: 1,
        title: "Luxury Ocean View Suite",
        description: "Enjoy magnificent ocean views and luxurious amenities for an unforgettable vacation experience.",
        price: 698,
        rating: 4.9,
        image: "/placeholder.svg?height=400&width=600",
        location: "Sanya Bay",
    },
    {
        id: 2,
        title: "Modern City Apartment",
        description: "A modern apartment in the city center, close to shopping and entertainment areas.",
        price: 458,
        rating: 4.7,
        image: "/placeholder.svg?height=400&width=600",
        location: "Shanghai Downtown",
    },
    {
        id: 3,
        title: "Classic Courtyard Inn",
        description: "Experience a perfect blend of traditional culture and modern amenities in this courtyard-style inn.",
        price: 528,
        rating: 4.8,
        image: "/placeholder.svg?height=400&width=600",
        location: "Lijiang Old Town",
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
    },
    {
        id: 5,
        title: "Industrial Style Studio",
        description: "Modern industrial style studio, stylish and minimalist, perfect for business travel.",
        price: 358,
        rating: 4.6,
        image: "/placeholder.svg?height=400&width=600",
        location: "Beijing Chaoyang",
    },
    {
        id: 6,
        title: "Japanese Minimalist Inn",
        description:
            "Simple Japanese style, providing a quiet and comfortable living environment, suitable for leisure vacations.",
        price: 428,
        rating: 4.7,
        image: "/placeholder.svg?height=400&width=600",
        location: "Suzhou Gardens",
    },
]

export default function RoomsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background p-6">
            <main className="flex-1">
                <div className="container py-8">
                    <h1 className="mb-6 text-3xl font-bold text-green-800">Browse Rooms</h1>

                    <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                        {/* Filter sidebar */}
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-4">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Search</h3>
                                        <div className="flex items-center gap-2">
                                            <Input placeholder="Enter keywords" />
                                            <Button size="icon" className="bg-green-600 hover:bg-green-700">
                                                <Search className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Price Range</h3>
                                        <Slider defaultValue={[500]} max={2000} step={100} />
                                        <div className="flex items-center justify-between text-sm">
                                            <span>$0</span>
                                            <span>$500</span>
                                            <span>$2000+</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Room Type</h3>
                                        <div className="space-y-2">
                                            {["Single Room", "Double Room", "Family Suite", "Luxury Suite"].map((type) => (
                                                <div key={type} className="flex items-center space-x-2">
                                                    <Checkbox id={`type-${type}`} />
                                                    <Label htmlFor={`type-${type}`} className="text-sm">
                                                        {type}
                                                    </Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Amenities</h3>
                                        <div className="space-y-2">
                                            {["Wi-Fi", "Air Conditioning", "TV", "Refrigerator", "Washing Machine", "Kitchen", "Parking"].map(
                                                (facility) => (
                                                    <div key={facility} className="flex items-center space-x-2">
                                                        <Checkbox id={`facility-${facility}`} />
                                                        <Label htmlFor={`facility-${facility}`} className="text-sm">
                                                            {facility}
                                                        </Label>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Room list */}
                        <div className="space-y-6">
                            <Tabs defaultValue="grid">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-sm text-gray-500">Found {rooms.length} rooms</span>
                                    </div>
                                    <TabsList>
                                        <TabsTrigger value="grid">Grid View</TabsTrigger>
                                        <TabsTrigger value="list">List View</TabsTrigger>
                                    </TabsList>
                                </div>

                                <TabsContent value="grid" className="mt-6">
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {rooms.map((room) => (
                                            <HotelCard
                                                key={room.id}
                                                title={room.title}
                                                description={room.description}
                                                price={room.price}
                                                rating={room.rating}
                                                image={room.image}
                                                location={room.location}
                                            />
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="list" className="mt-6">
                                    <div className="space-y-4">
                                        {rooms.map((room) => (
                                            <Card key={room.id} className="overflow-hidden">
                                                <div className="grid md:grid-cols-[250px_1fr]">
                                                    <img
                                                        src={room.image || "/placeholder.svg"}
                                                        alt={room.title}
                                                        className="h-48 w-full object-cover md:h-full"
                                                    />
                                                    <div className="p-4">
                                                        <div className="space-y-2">
                                                            <div className="flex items-center justify-between">
                                                                <h3 className="font-semibold text-lg">{room.title}</h3>
                                                                <div className="text-lg font-bold text-green-700">${room.price}/night</div>
                                                            </div>
                                                            <p className="text-sm text-gray-500">{room.location}</p>
                                                            <p className="text-sm text-gray-600">{room.description}</p>
                                                            <div className="flex justify-end">
                                                                <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


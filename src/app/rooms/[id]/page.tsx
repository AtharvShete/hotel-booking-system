import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendarCheck, Heart, MapPin, Share2, Star, Wifi } from "lucide-react"

export default function RoomDetailPage({ params }: { params: { id: string } }) {

    const roomDetails = {
        id: params.id,
        title: "Luxury Ocean View Suite",
        description:
            "Enjoy magnificent ocean views and luxurious amenities for an unforgettable vacation experience. Our luxury ocean view suite is located on the top floor, offering 180-degree unobstructed ocean views, where you can enjoy the beauty of sunrise and sunset every day. The suite is equipped with high-end furniture and facilities, including a king-size bed, luxury bathroom amenities, private balcony, and lounge area.",
        price: 698,
        rating: 4.9,
        reviews: 128,
        location: "Sanya Bay",
        host: "Mr. Johnson",
        hostAvatar: "/placeholder.svg?height=50&width=50",
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: [
            { name: "Wi-Fi", icon: Wifi },
            { name: "Air Conditioning", icon: Wifi },
            { name: "TV", icon: Wifi },
            { name: "Refrigerator", icon: Wifi },
            { name: "Washing Machine", icon: Wifi },
            { name: "Kitchen", icon: Wifi },
            { name: "Parking", icon: Wifi },
            { name: "Pool", icon: Wifi },
        ],
    }

    return (
        <div className="flex min-h-screen flex-col bg-background p-6">
            <main className="flex-1">
                <div className="container py-8">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-green-800">{roomDetails.title}</h1>
                            <div className="mt-2 flex items-center gap-2 text-sm">
                                <div className="flex items-center">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="ml-1">{roomDetails.rating}</span>
                                    <span className="ml-1 text-gray-500">({roomDetails.reviews} reviews)</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center text-gray-500">
                                    <MapPin className="mr-1 h-4 w-4 text-green-600" />
                                    {roomDetails.location}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                <Share2 className="mr-2 h-4 w-4" />
                                Share
                            </Button>
                            <Button variant="outline" size="sm">
                                <Heart className="mr-2 h-4 w-4" />
                                Save
                            </Button>
                        </div>
                    </div>

                    {/* Room Images */}
                    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="col-span-1 row-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2">
                            <Image
                                src={roomDetails.images[0] || "/placeholder.svg"}
                                alt={roomDetails.title}
                                width={800}
                                height={600}
                                className="h-full w-full rounded-lg object-cover"
                            />
                        </div>
                        {roomDetails.images.slice(1).map((image, index) => (
                            <div key={index} className="col-span-1">
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${roomDetails.title} ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="h-full w-full rounded-lg object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            {/* Room Description */}
                            <div className="mb-8">
                                <h2 className="mb-4 text-2xl font-bold text-green-800">Room Description</h2>
                                <p className="text-gray-600">{roomDetails.description}</p>
                            </div>

                            {/* Amenities */}
                            <div className="mb-8">
                                <h2 className="mb-4 text-2xl font-bold text-green-800">Amenities & Services</h2>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {roomDetails.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <amenity.icon className="h-5 w-5 text-green-600" />
                                            <span>{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reviews */}
                            <div className="mb-8">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-green-800">Guest Reviews</h2>
                                    <Link href="#" className="text-sm text-green-600 hover:underline">
                                        View all {roomDetails.reviews} reviews
                                    </Link>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {Array(4)
                                        .fill(null)
                                        .map((_, index) => (
                                            <Card key={index}>
                                                <CardContent className="p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-full bg-gray-200" />
                                                        <div>
                                                            <p className="font-medium">Guest {index + 1}</p>
                                                            <p className="text-xs text-gray-500">October 2023</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 flex">
                                                        {Array(5)
                                                            .fill(null)
                                                            .map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                                                        }`}
                                                                />
                                                            ))}
                                                    </div>
                                                    <p className="mt-2 text-sm text-gray-600">
                                                        The room was very clean, facilities were complete, location was great, and surrounding
                                                        amenities were excellent. Highly recommended.
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                </div>
                            </div>

                            {/* Location */}
                            <div className="mb-8">
                                <h2 className="mb-4 text-2xl font-bold text-green-800">Location</h2>
                                <div className="h-80 rounded-lg border border-dashed p-4">
                                    <div className="flex h-full items-center justify-center">
                                        <p className="text-gray-500">Map will be displayed here</p>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Exact address will be provided after booking confirmation.</p>
                            </div>
                        </div>

                        {/* Booking Card */}
                        <div className="md:col-span-1">
                            <Card className="sticky top-20">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="text-2xl font-bold text-green-700">${roomDetails.price}</div>
                                        <div className="text-sm text-gray-500">per night</div>
                                    </div>
                                    <Tabs defaultValue="calendar" className="w-full">
                                        <TabsList className="grid w-full grid-cols-2">
                                            <TabsTrigger value="calendar">Calendar</TabsTrigger>
                                            <TabsTrigger value="details">Details</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="calendar" className="mt-4">
                                            <Calendar mode="range" className="rounded-md border" />
                                        </TabsContent>
                                        <TabsContent value="details" className="mt-4 space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span>${roomDetails.price} x 2 nights</span>
                                                    <span>${roomDetails.price * 2}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span>Cleaning fee</span>
                                                    <span>$100</span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span>Service fee</span>
                                                    <span>$50</span>
                                                </div>
                                                <div className="border-t pt-2">
                                                    <div className="flex items-center justify-between font-bold">
                                                        <span>Total</span>
                                                        <span>${roomDetails.price * 2 + 150}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                    <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                                        <CalendarCheck className="mr-2 h-4 w-4" />
                                        Book Now
                                    </Button>
                                    <p className="mt-2 text-center text-xs text-gray-500">
                                        You won't be charged yet, payment will be processed after booking confirmation
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
\        </div>
    )
}


import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Star } from "lucide-react"

interface HotelCardProps {
    title: string
    description: string
    price: number
    rating: number
    image: string
    location: string
    tags?: string[]
}

export function HotelCard({ title, description, price, rating, image, location, tags }: HotelCardProps) {
    return (
        <Card variant="hotel" className="overflow-hidden hotel-card-hover">
            <div className="relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 rounded-full bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Favorite</span>
                </Button>
                {tags && tags.length > 0 && (
                    <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="hotel-success" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
            <CardContent className="p-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-hotel-800">{title}</h3>
                        <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">{rating}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="mr-1 h-4 w-4 text-hotel-600" />
                        {location}
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between bg-hotel-50 p-4">
                <div className="flex items-end">
                    <span className="text-xl font-bold text-hotel-700">${price}</span>
                    <span className="text-sm text-gray-500">/night</span>
                </div>
                <Link
                    href={`/rooms/${encodeURIComponent(title)}`}
                    className="inline-flex items-center justify-center rounded-md bg-hotel-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-hotel-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    View Details
                </Link>
            </CardFooter>
        </Card>
    )
}


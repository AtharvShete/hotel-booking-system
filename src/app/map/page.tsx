import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Navigation, Search, Star } from "lucide-react"

export default function MapPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <div className="container py-8">
                    <div className="mb-6 space-y-2">
                        <h1 className="text-3xl font-bold text-green-800">Room Locations</h1>
                        <p className="text-muted-foreground">
                            View hotel locations, explore surroundings and transportation options
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-full max-w-xs">
                            <Card>
                                <CardContent className="p-4">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label htmlFor="search" className="text-sm font-medium">
                                                Search Location
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <Input id="search" placeholder="Enter address or hotel name" />
                                                <Button size="icon" className="bg-green-600 hover:bg-green-700">
                                                    <Search className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-sm font-medium">Popular Cities</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {["New York", "London", "Paris", "Tokyo", "Sydney", "Rome"].map((city) => (
                                                    <Button key={city} variant="outline" size="sm" className="h-8">
                                                        {city}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-sm font-medium">Nearby Hotels</h3>
                                            <div className="space-y-2">
                                                {[1, 2, 3, 4, 5].map((item) => (
                                                    <Card key={item} className="overflow-hidden">
                                                        <div className="grid grid-cols-[80px_1fr] gap-3">
                                                            <img
                                                                src="/placeholder.svg?height=80&width=80"
                                                                alt="Hotel image"
                                                                className="h-20 w-20 object-cover"
                                                            />
                                                            <div className="py-2 pr-2">
                                                                <h4 className="text-sm font-medium line-clamp-1">Luxury Ocean View Suite {item}</h4>
                                                                <div className="mt-1 flex items-center gap-1">
                                                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                                    <span className="text-xs text-gray-500">4.9 ({item * 10} reviews)</span>
                                                                </div>
                                                                <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                                                                    <MapPin className="h-3 w-3 text-green-600" />
                                                                    <span className="line-clamp-1">{item * 0.5} miles from you</span>
                                                                </div>
                                                                <div className="mt-1 text-sm font-bold text-green-700">${item * 100 + 98}</div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex-1">
                            <Card className="h-[calc(100vh-16rem)]">
                                <Tabs defaultValue="map">
                                    <div className="flex items-center justify-between border-b px-4 py-2">
                                        <TabsList>
                                            <TabsTrigger value="map">Map</TabsTrigger>
                                            <TabsTrigger value="satellite">Satellite</TabsTrigger>
                                        </TabsList>
                                        <Button variant="outline" size="sm" className="h-8">
                                            <Navigation className="mr-1 h-4 w-4" />
                                            Locate Me
                                        </Button>
                                    </div>
                                    <TabsContent value="map" className="h-full">
                                        <div className="flex h-full items-center justify-center border border-dashed">
                                            <div className="text-center">
                                                <p className="text-muted-foreground">Map will be displayed here</p>
                                                <p className="text-xs text-muted-foreground">
                                                    (In a real application, a map service like Google Maps or Mapbox would be integrated)
                                                </p>
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="satellite" className="h-full">
                                        <div className="flex h-full items-center justify-center border border-dashed">
                                            <div className="text-center">
                                                <p className="text-muted-foreground">Satellite view will be displayed here</p>
                                                <p className="text-xs text-muted-foreground">
                                                    (In a real application, a map service like Google Maps or Mapbox would be integrated)
                                                </p>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


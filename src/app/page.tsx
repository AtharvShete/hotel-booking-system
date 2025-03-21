import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { HotelCard } from "@/components/hotel-card"
import { MapPin, Search, Star, UserRound } from "lucide-react"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-r from-green-50 to-green-100 py-10 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-green-900 sm:text-5xl">
                    Find Your Perfect Stay
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore high-quality accommodations, enjoy a homely atmosphere, and easily book your ideal room.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/rooms"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Browse Rooms
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Tabs defaultValue="search" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="search">Search Rooms</TabsTrigger>
                        <TabsTrigger value="map">Map View</TabsTrigger>
                      </TabsList>
                      <TabsContent value="search" className="mt-4 space-y-4">
                        <div className="grid gap-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-green-600" />
                            <Input placeholder="Destination or hotel name" className="flex-1" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="mb-2 text-sm font-medium">Check-in date</p>
                              <Calendar mode="single" className="rounded-md border" />
                            </div>
                            <div>
                              <p className="mb-2 text-sm font-medium">Check-out date</p>
                              <Calendar mode="single" className="rounded-md border" />
                            </div>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700">
                            <Search className="mr-2 h-4 w-4" /> Search Available Rooms
                          </Button>
                        </div>
                      </TabsContent>
                      <TabsContent value="map" className="h-[400px] mt-4">
                        <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                          <p className="text-sm text-muted-foreground">Map will be displayed here</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rooms Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-green-800 sm:text-5xl">Featured Rooms</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our popular rooms and enjoy a comfortable stay
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <HotelCard
                title="Luxury Ocean View Suite"
                description="Enjoy magnificent ocean views and luxurious amenities for an unforgettable vacation experience."
                price={698}
                rating={4.9}
                image="/placeholder.svg?height=400&width=600"
                location="Sanya Bay"
              />
              <HotelCard
                title="Modern City Apartment"
                description="A modern apartment in the city center, close to shopping and entertainment areas."
                price={458}
                rating={4.7}
                image="/placeholder.svg?height=400&width=600"
                location="Shanghai Downtown"
              />
              <HotelCard
                title="Classic Courtyard Inn"
                description="Experience a perfect blend of traditional culture and modern amenities in this courtyard-style inn."
                price={528}
                rating={4.8}
                image="/placeholder.svg?height=400&width=600"
                location="Lijiang Old Town"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href="/rooms"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View All Rooms
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-green-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-green-800 sm:text-5xl">Our Special Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive services to ensure your stay is comfortable and worry-free
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Rewards Program</h3>
                  <p className="text-center text-sm text-gray-500">
                    Earn points through sharing and booking to redeem exclusive vouchers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Location Services</h3>
                  <p className="text-center text-sm text-gray-500">
                    View accurate locations and nearby facilities with convenient navigation
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <UserRound className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Personalized Recommendations</h3>
                  <p className="text-center text-sm text-gray-500">
                    Get personalized room recommendations based on your preferences and history
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-green-800 sm:text-5xl">Guest Reviews</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what other guests say about our services
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1">
                      {Array(5)
                        .fill(null)
                        .map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                          />
                        ))}
                    </div>
                    <blockquote className="mt-4 border-l-2 border-green-500 pl-4">
                      <p className="text-sm text-gray-500">
                        "The service was excellent, the room was clean and tidy, the location was great, and the
                        facilities were complete. I will choose here again next time."
                      </p>
                    </blockquote>
                    <div className="mt-4 flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200" />
                      <div>
                        <p className="text-sm font-medium">Mr. Smith</p>
                        <p className="text-xs text-gray-500">Stayed in August 2023</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full bg-green-600 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Subscribe to Our Offers</h2>
                <p className="max-w-[900px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the latest offers and exclusive discounts
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-green-900 placeholder:text-green-900/50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-white text-green-600 hover:bg-green-50">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


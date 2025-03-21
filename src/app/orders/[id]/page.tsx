import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, Download, MapPin, Star } from "lucide-react"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
    // Mock order details data
    const order = {
        id: params.id,
        roomTitle: "Luxury Ocean View Suite",
        roomImage: "/placeholder.svg?height=400&width=600",
        location: "Sanya Bay",
        checkIn: "2023-10-15",
        checkOut: "2023-10-18",
        price: 698,
        totalPrice: 2094,
        status: "completed",
        createTime: "2023-09-30 14:30",
        payTime: "2023-09-30 14:35",
        isRated: true,
        rating: 5,
        comment:
            "The room was very clean, facilities were complete, service was excellent, and the view was amazing. Will choose here again next time.",
        roomDetails: {
            area: "45 sq m",
            bedType: "King Size 2m×2m",
            maxGuests: 2,
            breakfast: "Breakfast for two included",
            wifi: true,
            smoking: false,
        },
        contactInfo: {
            name: "John Smith",
            phone: "138****8888",
            email: "john***@example.com",
        },
        paymentInfo: {
            method: "Credit Card",
            transactionId: "CC20230930143512345",
            coupon: "$50 off on $200+",
            couponAmount: 50,
            originalPrice: 2144,
        },
    }

    // Status mapping
    const statusMap = {
        pending: { label: "Pending Payment", color: "bg-yellow-100 text-yellow-800" },
        paid: { label: "Paid", color: "bg-blue-100 text-blue-800" },
        completed: { label: "Completed", color: "bg-green-100 text-green-800" },
        canceled: { label: "Canceled", color: "bg-gray-100 text-gray-800" },
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1 py-8">
                <div className="container">
                    <div className="mb-6">
                        <Link href="/orders" className="inline-flex items-center text-green-600 hover:text-green-700">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Orders
                        </Link>
                    </div>

                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold text-green-800">Order Details</h1>
                                <Badge className={`${statusMap[order.status].color}`}>{statusMap[order.status].label}</Badge>
                            </div>
                            <p className="text-muted-foreground">Order ID: {order.id}</p>
                        </div>
                        <div className="mt-4 flex gap-2 sm:mt-0">
                            {order.status === "completed" && (
                                <Button variant="outline">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Invoice
                                </Button>
                            )}
                            <Link href={`/rooms/${encodeURIComponent(order.roomTitle)}`}>
                                <Button className="bg-green-600 hover:bg-green-700">Book Again</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="md:col-span-2 space-y-6">
                            {/* Room Information */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">Room Information</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
                                        <div>
                                            <img
                                                src={order.roomImage || "/placeholder.svg"}
                                                alt={order.roomTitle}
                                                className="h-40 w-full rounded-md object-cover"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-lg">{order.roomTitle}</h3>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <MapPin className="mr-1 h-4 w-4 text-green-600" />
                                                {order.location}
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center text-sm">
                                                    <Calendar className="mr-1 h-4 w-4 text-green-600" />
                                                    <span>
                                                        {order.checkIn} to {order.checkOut}
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-sm">
                                                    <Clock className="mr-1 h-4 w-4 text-green-600" />
                                                    <span>
                                                        Total {(new Date(order.checkOut) - new Date(order.checkIn)) / (1000 * 60 * 60 * 24)} nights
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 mt-2">
                                                <div className="text-sm">
                                                    <span className="text-gray-500">Room Size: </span>
                                                    {order.roomDetails.area}
                                                </div>
                                                <div className="text-sm">
                                                    <span className="text-gray-500">Bed Type: </span>
                                                    {order.roomDetails.bedType}
                                                </div>
                                                <div className="text-sm">
                                                    <span className="text-gray-500">Max Guests: </span>
                                                    {order.roomDetails.maxGuests} people
                                                </div>
                                                <div className="text-sm">
                                                    <span className="text-gray-500">Breakfast: </span>
                                                    {order.roomDetails.breakfast}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Order Timeline */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">Order Status</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex">
                                            <div className="mr-4 flex flex-col items-center">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                    <span className="text-sm">1</span>
                                                </div>
                                                <div className="h-full w-px bg-green-200"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Order Created</h4>
                                                <p className="text-sm text-gray-500">{order.createTime}</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="mr-4 flex flex-col items-center">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                    <span className="text-sm">2</span>
                                                </div>
                                                <div className="h-full w-px bg-green-200"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Payment Completed</h4>
                                                <p className="text-sm text-gray-500">{order.payTime}</p>
                                                <p className="text-sm text-gray-500">Payment Method: {order.paymentInfo.method}</p>
                                                <p className="text-sm text-gray-500">Transaction ID: {order.paymentInfo.transactionId}</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="mr-4 flex flex-col items-center">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                    <span className="text-sm">3</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Stay Completed</h4>
                                                <p className="text-sm text-gray-500">{order.checkOut}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Review Information */}
                            {order.isRated && (
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">My Review</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex">
                                                    {Array(5)
                                                        .fill(null)
                                                        .map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`h-5 w-5 ${i < order.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                                                    }`}
                                                            />
                                                        ))}
                                                </div>
                                                <span className="text-sm text-gray-500">Rating: {order.rating}/5</span>
                                            </div>
                                            <p className="text-gray-700">{order.comment}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        <div className="space-y-6">
                            {/* Price Details */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">Price Details</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Room Rate</span>
                                            <span>
                                                ${order.price} × {(new Date(order.checkOut) - new Date(order.checkIn)) / (1000 * 60 * 60 * 24)}
                                                nights
                                            </span>
                                        </div>
                                        {order.paymentInfo.coupon && (
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Coupon</span>
                                                <span className="text-red-500">-${order.paymentInfo.couponAmount}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Cleaning Fee</span>
                                            <span>$50</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Service Fee</span>
                                            <span>
                                                $
                                                {order.paymentInfo.originalPrice -
                                                    order.price * ((new Date(order.checkOut) - new Date(order.checkIn)) / (1000 * 60 * 60 * 24)) -
                                                    50}
                                            </span>
                                        </div>
                                        <Separator className="my-2" />
                                        <div className="flex justify-between font-medium">
                                            <span>Original Total</span>
                                            <span>${order.paymentInfo.originalPrice}</span>
                                        </div>
                                        {order.paymentInfo.coupon && (
                                            <div className="flex justify-between font-bold">
                                                <span>Discounted Total</span>
                                                <span className="text-green-700">${order.totalPrice}</span>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Contact Information */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Name</span>
                                            <span>{order.contactInfo.name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Phone</span>
                                            <span>{order.contactInfo.phone}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Email</span>
                                            <span>{order.contactInfo.email}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Help & Support */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">Help & Support</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <Button variant="outline" className="w-full justify-start">
                                            Request Refund
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start">
                                            Contact Customer Service
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start">
                                            Report an Issue
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight, Clock, Download, MapPin, Star, Trash2 } from "lucide-react"

// Mock order data
const orders = [
    {
        id: "ORD20231001",
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
    },
    {
        id: "ORD20230925",
        roomTitle: "Modern City Apartment",
        roomImage: "/placeholder.svg?height=400&width=600",
        location: "Shanghai Downtown",
        checkIn: "2023-10-05",
        checkOut: "2023-10-07",
        price: 458,
        totalPrice: 916,
        status: "completed",
        createTime: "2023-09-25 10:15",
        payTime: "2023-09-25 10:20",
        isRated: false,
    },
    {
        id: "ORD20231010",
        roomTitle: "Classic Courtyard Inn",
        roomImage: "/placeholder.svg?height=400&width=600",
        location: "Lijiang Old Town",
        checkIn: "2023-10-25",
        checkOut: "2023-10-28",
        price: 528,
        totalPrice: 1584,
        status: "paid",
        createTime: "2023-10-10 16:45",
        payTime: "2023-10-10 16:50",
    },
    {
        id: "ORD20231012",
        roomTitle: "Mountain View Villa",
        roomImage: "/placeholder.svg?height=400&width=600",
        location: "Hangzhou West Lake",
        checkIn: "2023-11-05",
        checkOut: "2023-11-08",
        price: 888,
        totalPrice: 2664,
        status: "pending",
        createTime: "2023-10-12 09:20",
    },
    {
        id: "ORD20230918",
        roomTitle: "Japanese Minimalist Inn",
        roomImage: "/placeholder.svg?height=400&width=600",
        location: "Suzhou Gardens",
        checkIn: "2023-09-20",
        checkOut: "2023-09-22",
        price: 428,
        totalPrice: 856,
        status: "canceled",
        createTime: "2023-09-18 11:30",
        cancelTime: "2023-09-18 15:45",
    },
]

// Status mapping
const statusMap = {
    pending: { label: "Pending Payment", color: "bg-yellow-100 text-yellow-800" },
    paid: { label: "Paid", color: "bg-blue-100 text-blue-800" },
    completed: { label: "Completed", color: "bg-green-100 text-green-800" },
    canceled: { label: "Canceled", color: "bg-gray-100 text-gray-800" },
}

export default function OrdersPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1 py-8">
                <div className="container">
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold text-green-800">My Orders</h1>
                            <p className="text-muted-foreground">View and manage all your orders</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <Link href="/rooms">
                                <Button className="bg-green-600 hover:bg-green-700">Book New Room</Button>
                            </Link>
                        </div>
                    </div>

                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="grid w-full grid-cols-5">
                            <TabsTrigger value="all">All Orders</TabsTrigger>
                            <TabsTrigger value="pending">Pending</TabsTrigger>
                            <TabsTrigger value="paid">Paid</TabsTrigger>
                            <TabsTrigger value="completed">Completed</TabsTrigger>
                            <TabsTrigger value="canceled">Canceled</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="mt-6 space-y-6">
                            {orders.length > 0 ? (
                                orders.map((order) => <OrderCard key={order.id} order={order} />)
                            ) : (
                                <EmptyOrderState />
                            )}
                        </TabsContent>

                        <TabsContent value="pending" className="mt-6 space-y-6">
                            {orders.filter((order) => order.status === "pending").length > 0 ? (
                                orders
                                    .filter((order) => order.status === "pending")
                                    .map((order) => <OrderCard key={order.id} order={order} />)
                            ) : (
                                <EmptyOrderState status="pending" />
                            )}
                        </TabsContent>

                        <TabsContent value="paid" className="mt-6 space-y-6">
                            {orders.filter((order) => order.status === "paid").length > 0 ? (
                                orders
                                    .filter((order) => order.status === "paid")
                                    .map((order) => <OrderCard key={order.id} order={order} />)
                            ) : (
                                <EmptyOrderState status="paid" />
                            )}
                        </TabsContent>

                        <TabsContent value="completed" className="mt-6 space-y-6">
                            {orders.filter((order) => order.status === "completed").length > 0 ? (
                                orders
                                    .filter((order) => order.status === "completed")
                                    .map((order) => <OrderCard key={order.id} order={order} />)
                            ) : (
                                <EmptyOrderState status="completed" />
                            )}
                        </TabsContent>

                        <TabsContent value="canceled" className="mt-6 space-y-6">
                            {orders.filter((order) => order.status === "canceled").length > 0 ? (
                                orders
                                    .filter((order) => order.status === "canceled")
                                    .map((order) => <OrderCard key={order.id} order={order} />)
                            ) : (
                                <EmptyOrderState status="canceled" />
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}

function OrderCard({ order }) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <CardTitle className="text-base">{order.id}</CardTitle>
                            <Badge className={`${statusMap[order.status].color}`}>{statusMap[order.status].label}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Order time: {order.createTime}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {order.status === "pending" && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                Pay Now
                            </Button>
                        )}
                        {order.status === "completed" && !order.isRated && (
                            <Button size="sm" variant="outline">
                                <Star className="mr-1 h-4 w-4" />
                                Review
                            </Button>
                        )}
                        {order.status === "pending" && (
                            <Button size="sm" variant="outline">
                                <Trash2 className="mr-1 h-4 w-4" />
                                Cancel Order
                            </Button>
                        )}
                        <Link href={`/orders/${order.id}`}>
                            <Button size="sm" variant="outline">
                                Order Details
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="grid md:grid-cols-[200px_1fr]">
                    <div className="relative">
                        <img
                            src={order.roomImage || "/placeholder.svg"}
                            alt={order.roomTitle}
                            className="h-48 w-full object-cover md:h-full"
                        />
                    </div>
                    <div className="p-4">
                        <div className="grid gap-4 md:grid-cols-2">
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
                            </div>
                            <div className="space-y-2 md:text-right">
                                <div className="text-sm text-gray-500">Room Rate</div>
                                <div className="font-medium">${order.price}/night</div>
                                <div className="text-sm text-gray-500">Total Price</div>
                                <div className="text-xl font-bold text-green-700">${order.totalPrice}</div>
                            </div>
                        </div>

                        {order.isRated && (
                            <div className="mt-4 border-t pt-4">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-medium">My Review</h4>
                                    <div className="flex">
                                        {Array(5)
                                            .fill(null)
                                            .map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < order.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                                        }`}
                                                />
                                            ))}
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-600">{order.comment}</p>
                            </div>
                        )}

                        {order.status === "completed" && (
                            <div className="mt-4 flex justify-end">
                                <Button variant="outline" size="sm">
                                    <Download className="mr-1 h-4 w-4" />
                                    Download Invoice
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function EmptyOrderState({ status }) {
    const messages = {
        pending: "No pending orders",
        paid: "No paid orders",
        completed: "No completed orders",
        canceled: "No canceled orders",
        default: "No orders",
    }

    const message = status ? messages[status] : messages.default

    return (
        <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed">
            <Calendar className="h-12 w-12 text-gray-300" />
            <h3 className="mt-4 text-lg font-medium">{message}</h3>
            <p className="mt-2 text-sm text-gray-500">Browse rooms and create new orders</p>
            <Link href="/rooms" className="mt-4">
                <Button className="bg-green-600 hover:bg-green-700">Browse Rooms</Button>
            </Link>
        </div>
    )
}


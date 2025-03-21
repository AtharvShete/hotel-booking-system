import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6 md:py-10 px-6">
            <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-3">
                    <h3 className="text-lg font-medium text-green-600">Hotel Booking</h3>
                    <p className="text-sm text-gray-500">
                        Providing high-quality accommodation experiences to make your travels more comfortable and enjoyable.
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="text-lg font-medium">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="text-sm text-gray-500 hover:text-green-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/rooms" className="text-sm text-gray-500 hover:text-green-600">
                                Browse Rooms
                            </Link>
                        </li>
                        <li>
                            <Link href="/map" className="text-sm text-gray-500 hover:text-green-600">
                                Map View
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-sm text-gray-500 hover:text-green-600">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="text-lg font-medium">User Services</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/login" className="text-sm text-gray-500 hover:text-green-600">
                                Login/Register
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile" className="text-sm text-gray-500 hover:text-green-600">
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link href="/orders" className="text-sm text-gray-500 hover:text-green-600">
                                Order Management
                            </Link>
                        </li>
                        <li>
                            <Link href="/coupons" className="text-sm text-gray-500 hover:text-green-600">
                                Coupons
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="text-lg font-medium">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="text-sm text-gray-500">Email: contact@example.com</li>
                        <li className="text-sm text-gray-500">Phone: 400-123-4567</li>
                        <li className="text-sm text-gray-500">Address: 123 Main Street, New York, NY</li>
                    </ul>
                </div>
            </div>
            <div className="container mt-8 border-t pt-6">
                <p className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Hotel Booking Website. All rights reserved.
                </p>
            </div>
        </footer>
    )
}


import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@hotel.com" },
    update: {},
    create: {
      email: "admin@hotel.com",
      password: adminPassword,
      firstName: "Admin",
      lastName: "User",
      role: "ADMIN",
    },
  });

  // Create regular user
  const userPassword = await hash("user123", 10);
  const user = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      email: "user@example.com",
      password: userPassword,
      firstName: "Regular",
      lastName: "User",
      role: "USER",
    },
  });

  // Create hotels
  const luxuryHotel = await prisma.hotel.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      userId: admin.id,
      name: "Luxury Ocean View Resort",
      city: "Sanya",
      country: "China",
      description:
        "Enjoy magnificent ocean views and luxurious amenities for an unforgettable vacation experience.",
      type: "Resort",
      adultCount: 2,
      childCount: 2,
      facilities: [
        "Pool",
        "Spa",
        "WiFi",
        "Restaurant",
        "Room Service",
        "Beach Access",
      ],
      pricePerNight: 698,
      starRating: 5,
      imageUrls: ["/placeholder.svg?height=400&width=600"],
      lastUpdated: new Date(),
      featured: true,
      location: "Sanya Bay",
    },
  });

  const cityApartment = await prisma.hotel.upsert({
    where: { id: "2" },
    update: {},
    create: {
      id: "2",
      userId: admin.id,
      name: "Modern City Apartment",
      city: "Shanghai",
      country: "China",
      description:
        "A modern apartment in the city center, close to shopping and entertainment areas.",
      type: "Apartment",
      adultCount: 2,
      childCount: 1,
      facilities: ["WiFi", "Kitchen", "Air Conditioning", "TV", "Washer"],
      pricePerNight: 458,
      starRating: 4,
      imageUrls: ["/placeholder.svg?height=400&width=600"],
      lastUpdated: new Date(),
      featured: true,
      location: "Shanghai Downtown",
    },
  });

  const courtyardInn = await prisma.hotel.upsert({
    where: { id: "3" },
    update: {},
    create: {
      id: "3",
      userId: admin.id,
      name: "Classic Courtyard Inn",
      city: "Lijiang",
      country: "China",
      description:
        "Experience a perfect blend of traditional culture and modern amenities in this courtyard-style inn.",
      type: "Inn",
      adultCount: 2,
      childCount: 2,
      facilities: [
        "Garden",
        "WiFi",
        "Breakfast",
        "Traditional Architecture",
        "Tour Services",
      ],
      pricePerNight: 528,
      starRating: 4,
      imageUrls: ["/placeholder.svg?height=400&width=600"],
      lastUpdated: new Date(),
      featured: true,
      location: "Lijiang Old Town",
    },
  });

  // Create rooms for each hotel
  await prisma.room.createMany({
    data: [
      {
        name: "Deluxe Ocean Suite",
        description:
          "Spacious suite with panoramic ocean views, king-sized bed, and luxury bathroom.",
        pricePerNight: 798,
        hotelId: luxuryHotel.id,
        imageUrls: ["/placeholder.svg?height=400&width=600"],
        capacity: 3,
        type: "Suite",
        features: ["Ocean View", "Balcony", "Mini Bar", "King Bed", "Jacuzzi"],
      },
      {
        name: "Garden View Room",
        description: "Comfortable room with garden views and modern amenities.",
        pricePerNight: 598,
        hotelId: luxuryHotel.id,
        imageUrls: ["/placeholder.svg?height=400&width=600"],
        capacity: 2,
        type: "Standard",
        features: ["Garden View", "Queen Bed", "Shower", "TV"],
      },
      {
        name: "Executive Studio",
        description:
          "Modern studio apartment with city views and full kitchen.",
        pricePerNight: 458,
        hotelId: cityApartment.id,
        imageUrls: ["/placeholder.svg?height=400&width=600"],
        capacity: 2,
        type: "Studio",
        features: ["City View", "Kitchen", "Workspace", "Smart TV"],
      },
      {
        name: "Traditional Courtyard Room",
        description:
          "Authentic room with traditional Chinese design and modern comforts.",
        pricePerNight: 528,
        hotelId: courtyardInn.id,
        imageUrls: ["/placeholder.svg?height=400&width=600"],
        capacity: 2,
        type: "Standard",
        features: [
          "Courtyard View",
          "Traditional Decor",
          "Private Bathroom",
          "Antique Furniture",
        ],
      },
    ],
  });

  // Create some reviews
  await prisma.review.createMany({
    data: [
      {
        rating: 4.9,
        comment:
          "The service was excellent, the room was clean and tidy, the location was great, and the facilities were complete. I will choose here again next time.",
        userId: user.id,
        hotelId: luxuryHotel.id,
      },
      {
        rating: 4.7,
        comment:
          "Great location, convenient for business and leisure. The apartment was well equipped and comfortable.",
        userId: user.id,
        hotelId: cityApartment.id,
      },
      {
        rating: 4.8,
        comment:
          "An amazing cultural experience with all the modern amenities you need. The staff was very friendly and helpful.",
        userId: user.id,
        hotelId: courtyardInn.id,
      },
    ],
  });

  console.log("Database has been seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

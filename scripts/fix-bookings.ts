import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fixBookings() {
  try {
    // Get all bookings that don't have a valid roomId
    const bookings = await prisma.booking.findMany({
      where: {
        roomId: "", // Default value from migration
      },
    });

    if (bookings.length === 0) {
      console.log("No bookings need fixing");
      return;
    }

    console.log(`Found ${bookings.length} bookings to fix`);

    // For each booking, find a room from the same hotel and update
    for (const booking of bookings) {
      const room = await prisma.room.findFirst({
        where: {
          hotelId: booking.hotelId,
        },
      });

      if (!room) {
        console.error(`No room found for hotel ${booking.hotelId}`);
        continue;
      }

      await prisma.booking.update({
        where: {
          id: booking.id,
        },
        data: {
          roomId: room.id,
        },
      });

      console.log(`Fixed booking ${booking.id}`);
    }

    console.log("All bookings fixed successfully");
  } catch (error) {
    console.error("Error fixing bookings:", error);
  } finally {
    await prisma.$disconnect();
  }
}

fixBookings();

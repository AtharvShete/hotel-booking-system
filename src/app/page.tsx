import { redirect } from "next/navigation";
import { auth } from "@/server/auth";

export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/signin");

  return (
    <div className="">
      <h1>Hello World</h1>
    </div>
  );
}

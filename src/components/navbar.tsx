import { SignOut } from "./sign-out";
import { auth } from "@/server/auth";
import { SignIn } from "./sign-in";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="h-15 flex w-full items-center justify-between bg-black">
      <Link href="/">
        <h1 className="p-4 text-xl font-bold text-white">Hotels</h1>
      </Link>

      {session ? <SignOut /> : <SignIn />}
    </div>
  );
}

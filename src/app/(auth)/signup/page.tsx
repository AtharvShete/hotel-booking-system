import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import SignUpClient from "./client";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return <SignUpClient />;
};

export default Page;

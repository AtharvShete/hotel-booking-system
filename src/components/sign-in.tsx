"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignIn = () => {

  return (
    <div className="flex justify-center">
          <Button className="bg-white m-4 text-black hover:bg-slate-200" asChild>
        <Link href="/signin">Sign In</Link>
      </Button>
    </div>
  );
};

export { SignIn };

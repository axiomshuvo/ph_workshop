"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashBoard() {
  const router = useRouter();
  const { data, isPending } = useSession();
  const user = data?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/auth/signin");
    }
  }, [isPending, user, router]);

  if (isPending) {
    return <div>Loading ...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">Welcome to your Dashboard!</h1>
    </div>
  );
}

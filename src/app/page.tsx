"use client";

import { useTRPC } from "@/trpc/client";
import { caller } from "@/trpc/server";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const { data: users } = useQuery(trpc.getUsers.queryOptions());
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      {JSON.stringify(users)}
    </div>
  );
};
export default Page;

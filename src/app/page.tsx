import { caller } from "@/trpc/server";

const Page = async () => {
  const users = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      {JSON.stringify(users)}
    </div>
  );
};
export default Page;

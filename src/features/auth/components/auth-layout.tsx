import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex flex-col justify-center items-center min-h-svh gap-6 p-6 md:p-10">
      <div className="flex max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center self-center gap-2 font-medium"
        >
          <Image
            src={"/logos/logo.svg"}
            alt="Nodebase"
            width={30}
            height={30}
          />
          Nodebase
        </Link>
        {children}
      </div>
    </div>
  );
};

import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = { firstName: "Abdullah", lastName: "odulate" };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={LoggedIn} />

      <div className="flex size-full flex-col">
        {/* MOBILE NAV  */}
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu-icon" />
          <div>
            <MobileNav user={LoggedIn} />
          </div>
        </div>

        {children}
      </div>
    </main>
  );
}

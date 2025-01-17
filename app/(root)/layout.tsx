import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = { firstName: "Abdullah", lastName: "odulate" };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={LoggedIn} />
      {children}
    </main>
  );
}

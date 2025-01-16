export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
        <p className="">SIDEBAR</p>
        {children}
    </main>)
}

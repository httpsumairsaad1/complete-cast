export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
            {/* 9 June 2024, Sunday. UMAIR SAAD */}
            <p className="text-white-1">LEFT SIDEBAR</p>
            {children}
            <p className="text-white-1">RIGHT SIDEBAR</p>
        </main>
    </div>
  );
}

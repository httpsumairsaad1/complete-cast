// *     **************************************************************     *
// *     *                                                            *     *
// *     *                      DEVELOPER: UMAIR SAAD                 *     *
// *     *                      COPYRIGHT 2024                        *     *
// *     *                      DATE: 9 JUNE 2024                     *     *
// *     *                                                            *     *
// *     **************************************************************     *

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
          <main>
              {/* Working on the main page (children), 9 June 2024, Sunday. UMAIR SAAD */}
              {children} 
          </main>
    );
  }
  
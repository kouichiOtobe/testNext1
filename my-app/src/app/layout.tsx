import { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./Components/Sidebar";

export const metadata: Metadata = {
  title: "乙部作成App",
  description: "作成したのは next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
         <div className="flex min-h-screen">
            <aside className="w-64 bg-white p-4 border-r">
              <Sidebar />
            </aside>
      
            <main className="flex-1 bg-blue p-4">
        {children}
            </main>
          </div>
      </body>
    </html>
  );
}

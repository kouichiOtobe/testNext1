import { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./Components/Sidebar";
import { Header } from "./Components/Header";

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
      <body className="min-h-screen flex">
        {/* Sidebar (常時左側) */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex flex-col flex-1">
          {/* Header (Mainエリアの上部にだけ表示) */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 p-6 bg-white overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

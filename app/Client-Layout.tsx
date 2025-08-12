// app/client-layout.tsx (Client Component)
"use client";
import { usePathname } from "next/navigation";
import Header from "../components/registry/seraui/header";
import Footer from "@components/components/Footer";

// Pages that shouldn't show header
const noHeaderPages = ["/login", "/readblog"];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showHeader = !noHeaderPages.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && (
        <header className="sticky top-0 z-50 w-full">
          <Header />
        </header>
      )}
      <main className="flex-1">{children}</main>
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
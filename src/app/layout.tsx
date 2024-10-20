import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { SearchDropdownComponent } from "@/components/search-dropdown";
import { MenuIcon } from "lucide-react";
import { Suspense } from "react";
import { Cart } from "@/components/cart";

const helvetica = localFont({
  src: "./fonts/HelveticaNeueLTPro-Md.woff",
  variable: "--font-helvetica",
});
const helveticaRoman = localFont({
  src: "./fonts/HelveticaNeueLTPro-Roman.woff",
  variable: "--font-helvetica-roman",
});

const futura = localFont({
  src: "./fonts/FuturaLTPro-BoldCond.woff2",
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "NextMaster",
  description: "A performant site built with Next.js",
};

// revalidate the data at most every day
export const revalidate = 86400;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${helvetica.variable} ${helveticaRoman.variable} ${futura.variable} flex min-h-full flex-col antialiased`}
      >
        <div className="flex flex-grow flex-col">
          <header className="flex items-center justify-between gap-4 border-b-2 border-yellow-300 p-2 font-futura md:p-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="hidden text-4xl font-bold text-green-800 sm:block"
              >
                NextMaster
              </Link>
              <Link
                href="/"
                className="block text-4xl font-bold text-green-800 sm:hidden"
              >
                <div className="rounded-lg bg-yellow-400 px-3 pt-2 tracking-tighter">
                  N
                </div>
              </Link>
            </div>
            <SearchDropdownComponent />
            <div className="flex flex-row justify-between space-x-4">
              <div className="relative">
                <Link
                  href="/order"
                  className="text-lg text-green-800 hover:underline"
                >
                  ORDER
                </Link>
                <Suspense>
                  <Cart />
                </Suspense>
              </div>
              <Link
                href="/order-history"
                className="hidden text-lg text-green-800 hover:underline md:block"
              >
                ORDER HISTORY
              </Link>
              <Link
                href="/order-history"
                className="block text-lg text-green-800 hover:underline md:hidden"
              >
                <MenuIcon />
              </Link>
            </div>
          </header>
          {children}
        </div>
        <footer className="flex h-auto flex-col items-center justify-between space-y-2 border-t border-gray-400 px-4 font-helvetica text-[11px] sm:h-6 sm:flex-row sm:space-y-0">
          <div className="flex flex-wrap justify-center space-x-1 sm:justify-start">
            <span className="hover:bg-yellow-100 hover:underline">Home</span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">
              Location
            </span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">Returns</span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">Careers</span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">
              Mobile App
            </span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">
              Solidworks Add-In
            </span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">Help</span>
            <span>|</span>
            <span className="hover:bg-yellow-100 hover:underline">
              Settings
            </span>
          </div>
          <div className="text-center sm:text-right">
            By using this website, you agree to check out the{" "}
            <Link
              href="https://github.com/ethanniser/NextMaster"
              className="font-bold hover:underline"
              target="_blank"
            >
              Source Code
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

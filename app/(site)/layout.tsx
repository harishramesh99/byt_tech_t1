import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./components/global/Navbar"
import Footer from "./components/global/Footer"
import Image from 'next/image'
import { getNavbar } from "@/sanity/sanity.query";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harish Ramesh",
  metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
  description: "A personal portfolio site ",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const navigationData = await getNavbar();
  return (
    <><html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar data={navigationData} />
        <main>{children}</main>
        <Footer />
      </body>
    </html></>
  )
}
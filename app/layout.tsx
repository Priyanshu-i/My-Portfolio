import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import ParticlesBg from "@/components/particles-bg" // Adjust path as needed

export const metadata: Metadata = {
  title: "Priyanshu Singh Portfolio",
  description:
    "Let’s create something meaningful together. Reach out for collaborations, projects, or discussions about AI and research.",
  keywords: ["Portfolio", "Contact", "Engineering", "Research", "AI", "Collaboration"],
  authors: [{ name: "Priyanshu Singh" }],
  openGraph: {
    title: "Contact | Priyanshu Singh Portfolio",
    description: "Reach out for collaborations, projects, or discussions about engineering, research, and AI.",
    url: "https://priyanshu-singh-dev.com/contact",
    siteName: "Priyanshu Singh Portfolio",
    images: [
      {
        url: "https://priyanshu-singh-dev.com/MyPic.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Contact Preview",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased selection:bg-blue-100`}>
        {/* Particle and Gradient Background Container */}
        <div className="fixed inset-0 -z-10 bg-white">
          {/* Subtle mesh-like gradient for a premium white look */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-purple-50/40" />
          <ParticlesBg />
        </div>

        <main className="relative z-10">
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        <Analytics />
      </body>
    </html>
  )
}
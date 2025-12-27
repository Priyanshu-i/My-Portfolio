import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "next-themes" // Add this
import ParticlesBg from "@/components/particles-bg"

export const metadata: Metadata = {
  title: "Priyanshu Singh Portfolio",
  description:
    "Let’s create something meaningful together. Reach out for collaborations, projects, or discussions about AI and research.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Portfolio", "Contact", "Engineering", "Research", "AI", "Collaboration"],
  authors: [{ name: "Priyanshu Singh" }],
  openGraph: {
    title: "Contact | Priyanshu Singh Portfolio",
    description: "Reach out for collaborations, projects, or discussions about engineering, research, and AI.",
    url: "https://priyanshu-singh-dev.netlify.app/contact",
    siteName: "Priyanshu Singh Portfolio",
    images: [
      {
        url: "https://priyanshu-singh-dev.netlify.app/MyPic.png",
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
    // suppressHydrationWarning is necessary for next-themes
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased selection:bg-blue-500/30`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Dynamic Background Container */}
          <div className="fixed inset-0 -z-10 bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* Mesh gradient that changes colors in dark mode */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 dark:from-blue-900/20 via-transparent to-purple-50/40 dark:to-purple-900/20" />
            <ParticlesBg />
          </div>

          <main className="relative z-10">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
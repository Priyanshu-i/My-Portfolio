import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Priyanshu Singh Portfolio",
  description:
    "Let’s create something meaningful together. Reach out for collaborations, projects, or discussions about AI and research.",
  keywords: ["Portfolio", "Contact", "Engineering", "Research", "AI", "Collaboration", "[Your Skills]"],
  authors: [{ name: "Priyanshu Singh" }],
  openGraph: {
    title: "Contact | Priyanshu Singh Portfolio",
    description:
      "Reach out for collaborations, projects, or discussions about engineering, research, and AI.",
    url: "https://yourdomain.com/contact",
    siteName: "Priyanshu Singh Portfolio",
    images: [
      {
        url: "https://yourdomain.com/MyPic.png",
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
    /* 
    return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-[120px] animate-pulse" 
               style={{ animationDuration: '8s' }} />
          
          <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-100/40 blur-[120px] animate-pulse" 
               style={{ animationDuration: '12s' }} />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <main className="relative z-10 min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
    */
  )
}

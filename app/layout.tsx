import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
// import { cn } from "@/lib/utils";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"] ,
  weight : ['400','500','600','700'],
  variable:'--font--ibm--plex'
});

export const metadata: Metadata = {
  title: "Pictogenix -AI Tool",
  description: "AI powered image generator ",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return(
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
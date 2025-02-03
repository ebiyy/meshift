import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { UserProvider } from "@/lib/auth";
import { getUser } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Next.js SaaS Starter",
  description: "Get started quickly with Next.js, Postgres, and Stripe.",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
      data-oid="gd0k0zk"
    >
      <body className="min-h-[100dvh] bg-gray-50" data-oid="3q9mkzf">
        <UserProvider userPromise={userPromise} data-oid="9q0w:w:">
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

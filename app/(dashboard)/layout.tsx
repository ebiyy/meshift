"use client";

import Link from "next/link";
import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleIcon, Home, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/lib/auth";
import { signOut } from "@/app/(login)/actions";
import { useRouter } from "next/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userPromise } = useUser();
  const user = use(userPromise);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push("/");
  }

  return (
    <header className="border-b border-gray-200" data-oid="e0:40eh">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
        data-oid="wyfn_zy"
      >
        <Link href="/" className="flex items-center" data-oid="u:wc0d5">
          <CircleIcon className="h-6 w-6 text-orange-500" data-oid="dcvzb4g" />
          <span
            className="ml-2 text-xl font-semibold text-gray-900"
            data-oid="60mlexp"
          >
            ACME
          </span>
        </Link>
        <div className="flex items-center space-x-4" data-oid="1v.fmg9">
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
            data-oid="j.iecfn"
          >
            Pricing
          </Link>
          {user ? (
            <DropdownMenu
              open={isMenuOpen}
              onOpenChange={setIsMenuOpen}
              data-oid="57d7ri-"
            >
              <DropdownMenuTrigger data-oid="0h06-21">
                <Avatar className="cursor-pointer size-9" data-oid="3hgcet0">
                  <AvatarImage alt={user.name || ""} data-oid="o_avpl9" />
                  <AvatarFallback data-oid="ez5_oo0">
                    {user.email
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="flex flex-col gap-1"
                data-oid="2.t4icb"
              >
                <DropdownMenuItem className="cursor-pointer" data-oid="v0_d108">
                  <Link
                    href="/dashboard"
                    className="flex w-full items-center"
                    data-oid="2:t8bir"
                  >
                    <Home className="mr-2 h-4 w-4" data-oid="gx4adww" />
                    <span data-oid="06ck6yk">Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <form
                  action={handleSignOut}
                  className="w-full"
                  data-oid="djy_ock"
                >
                  <button
                    type="submit"
                    className="flex w-full"
                    data-oid="aau.qk5"
                  >
                    <DropdownMenuItem
                      className="w-full flex-1 cursor-pointer"
                      data-oid="17iyp8v"
                    >
                      <LogOut className="mr-2 h-4 w-4" data-oid="fz.snw." />
                      <span data-oid="gwmlt3s">Sign out</span>
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
              data-oid="y_.j_0u"
            >
              <Link href="/sign-up" data-oid="wo51i2k">
                Sign Up
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen" data-oid="w3:y4h5">
      <Header data-oid="6eaf2t5" />
      {children}
    </section>
  );
}

"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleIcon, Loader2 } from "lucide-react";
import { signIn, signUp } from "./actions";
import { ActionState } from "@/lib/auth/middleware";

export function Login({ mode = "signin" }: { mode?: "signin" | "signup" }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const priceId = searchParams.get("priceId");
  const inviteId = searchParams.get("inviteId");
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === "signin" ? signIn : signUp,
    { error: "" },
  );

  return (
    <div
      className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
      data-oid="ixyem7d"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md" data-oid=":pqpbip">
        <div className="flex justify-center" data-oid="8yyeoyv">
          <CircleIcon
            className="h-12 w-12 text-orange-500"
            data-oid="r0n6yw1"
          />
        </div>
        <h2
          className="mt-6 text-center text-3xl font-extrabold text-gray-900"
          data-oid="5r36ibv"
        >
          {mode === "signin"
            ? "Sign in to your account"
            : "Create your account"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" data-oid="ib678_k">
        <form className="space-y-6" action={formAction} data-oid=":au7a4:">
          <input
            type="hidden"
            name="redirect"
            value={redirect || ""}
            data-oid="k-5g90q"
          />

          <input
            type="hidden"
            name="priceId"
            value={priceId || ""}
            data-oid="4hytq-g"
          />

          <input
            type="hidden"
            name="inviteId"
            value={inviteId || ""}
            data-oid="9-be96k"
          />

          <div data-oid="ueub:or">
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
              data-oid="rud-.ow"
            >
              Email
            </Label>
            <div className="mt-1" data-oid="mk:r:no">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={state.email}
                required
                maxLength={50}
                className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email"
                data-oid="c.qr2qd"
              />
            </div>
          </div>

          <div data-oid="xup6w_s">
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
              data-oid="e4ma:az"
            >
              Password
            </Label>
            <div className="mt-1" data-oid="7alw6r0">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  mode === "signin" ? "current-password" : "new-password"
                }
                defaultValue={state.password}
                required
                minLength={8}
                maxLength={100}
                className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
                data-oid=".e2ty.y"
              />
            </div>
          </div>

          {state?.error && (
            <div className="text-red-500 text-sm" data-oid="qkgrl74">
              {state.error}
            </div>
          )}

          <div data-oid="ezfpuqn">
            <Button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              disabled={pending}
              data-oid="ve7tcv6"
            >
              {pending ? (
                <>
                  <Loader2
                    className="animate-spin mr-2 h-4 w-4"
                    data-oid="h3fvh8q"
                  />
                  Loading...
                </>
              ) : mode === "signin" ? (
                "Sign in"
              ) : (
                "Sign up"
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6" data-oid="6i1lgnz">
          <div className="relative" data-oid="4sfrk8o">
            <div
              className="absolute inset-0 flex items-center"
              data-oid="63nvpey"
            >
              <div
                className="w-full border-t border-gray-300"
                data-oid="gcig1ll"
              />
            </div>
            <div
              className="relative flex justify-center text-sm"
              data-oid="_s7h1xe"
            >
              <span
                className="px-2 bg-gray-50 text-gray-500"
                data-oid="bx9gt-3"
              >
                {mode === "signin"
                  ? "New to our platform?"
                  : "Already have an account?"}
              </span>
            </div>
          </div>

          <div className="mt-6" data-oid="9z39kds">
            <Link
              href={`${mode === "signin" ? "/sign-up" : "/sign-in"}${
                redirect ? `?redirect=${redirect}` : ""
              }${priceId ? `&priceId=${priceId}` : ""}`}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              data-oid="qbgfln5"
            >
              {mode === "signin"
                ? "Create an account"
                : "Sign in to existing account"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

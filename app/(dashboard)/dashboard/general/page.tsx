"use client";

import { startTransition, use, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useUser } from "@/lib/auth";
import { updateAccount } from "@/app/(login)/actions";

type ActionState = {
  error?: string;
  success?: string;
};

export default function GeneralPage() {
  const { userPromise } = useUser();
  const user = use(userPromise);
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    updateAccount,
    { error: "", success: "" },
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // If you call the Server Action directly, it will automatically
    // reset the form. We don't want that here, because we want to keep the
    // client-side values in the inputs. So instead, we use an event handler
    // which calls the action. You must wrap direct calls with startTransition.
    // When you use the `action` prop it automatically handles that for you.
    // Another option here is to persist the values to local storage. I might
    // explore alternative options.
    startTransition(() => {
      formAction(new FormData(event.currentTarget));
    });
  };

  return (
    <section className="flex-1 p-4 lg:p-8" data-oid="_6afh5n">
      <h1
        className="text-lg lg:text-2xl font-medium text-gray-900 mb-6"
        data-oid="hpipodu"
      >
        General Settings
      </h1>

      <Card data-oid="_h.xw1:">
        <CardHeader data-oid="y5plf:h">
          <CardTitle data-oid="kt2mnhs">Account Information</CardTitle>
        </CardHeader>
        <CardContent data-oid="_9b8b7m">
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            data-oid="r_nmnj7"
          >
            <div data-oid="x4voajr">
              <Label htmlFor="name" data-oid="59-pnfu">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                defaultValue={user?.name || ""}
                required
                data-oid="kjw8x3s"
              />
            </div>
            <div data-oid="3ux92e9">
              <Label htmlFor="email" data-oid="oo4f5.e">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                defaultValue={user?.email || ""}
                required
                data-oid="qdi5jv3"
              />
            </div>
            {state.error && (
              <p className="text-red-500 text-sm" data-oid="ncr4r2c">
                {state.error}
              </p>
            )}
            {state.success && (
              <p className="text-green-500 text-sm" data-oid="..z2qw6">
                {state.success}
              </p>
            )}
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              disabled={isPending}
              data-oid="a7n.05k"
            >
              {isPending ? (
                <>
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="xiux7ay"
                  />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

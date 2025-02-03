"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock, Trash2, Loader2 } from "lucide-react";
import { startTransition, useActionState } from "react";
import { updatePassword, deleteAccount } from "@/app/(login)/actions";

type ActionState = {
  error?: string;
  success?: string;
};

export default function SecurityPage() {
  const [passwordState, passwordAction, isPasswordPending] = useActionState<
    ActionState,
    FormData
  >(updatePassword, { error: "", success: "" });

  const [deleteState, deleteAction, isDeletePending] = useActionState<
    ActionState,
    FormData
  >(deleteAccount, { error: "", success: "" });

  const handlePasswordSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    // If you call the Server Action directly, it will automatically
    // reset the form. We don't want that here, because we want to keep the
    // client-side values in the inputs. So instead, we use an event handler
    // which calls the action. You must wrap direct calls with startTransition.
    // When you use the `action` prop it automatically handles that for you.
    // Another option here is to persist the values to local storage. I might
    // explore alternative options.
    startTransition(() => {
      passwordAction(new FormData(event.currentTarget));
    });
  };

  const handleDeleteSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    startTransition(() => {
      deleteAction(new FormData(event.currentTarget));
    });
  };

  return (
    <section className="flex-1 p-4 lg:p-8" data-oid="93vf3w-">
      <h1
        className="text-lg lg:text-2xl font-medium bold text-gray-900 mb-6"
        data-oid="efydezz"
      >
        Security Settings
      </h1>
      <Card className="mb-8" data-oid="55pyz6y">
        <CardHeader data-oid="smz8j9k">
          <CardTitle data-oid="1:0y:36">Password</CardTitle>
        </CardHeader>
        <CardContent data-oid="8ldxppg">
          <form
            className="space-y-4"
            onSubmit={handlePasswordSubmit}
            data-oid="lrv7f5v"
          >
            <div data-oid="c3wy2yn">
              <Label htmlFor="current-password" data-oid="od.fq2o">
                Current Password
              </Label>
              <Input
                id="current-password"
                name="currentPassword"
                type="password"
                autoComplete="current-password"
                required
                minLength={8}
                maxLength={100}
                data-oid="zmacwv:"
              />
            </div>
            <div data-oid="9r4hjwr">
              <Label htmlFor="new-password" data-oid="z2aks1m">
                New Password
              </Label>
              <Input
                id="new-password"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                maxLength={100}
                data-oid="yx6pa:l"
              />
            </div>
            <div data-oid="9ffx1qm">
              <Label htmlFor="confirm-password" data-oid="lud:.lx">
                Confirm New Password
              </Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                required
                minLength={8}
                maxLength={100}
                data-oid="rqks53_"
              />
            </div>
            {passwordState.error && (
              <p className="text-red-500 text-sm" data-oid="-:vkcg3">
                {passwordState.error}
              </p>
            )}
            {passwordState.success && (
              <p className="text-green-500 text-sm" data-oid="dap9hhf">
                {passwordState.success}
              </p>
            )}
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              disabled={isPasswordPending}
              data-oid="79c6a2a"
            >
              {isPasswordPending ? (
                <>
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="323rz38"
                  />
                  Updating...
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" data-oid="._szc0h" />
                  Update Password
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card data-oid="qhfw_-_">
        <CardHeader data-oid="c6bsi:4">
          <CardTitle data-oid=":g2uawr">Delete Account</CardTitle>
        </CardHeader>
        <CardContent data-oid="cbq5:11">
          <p className="text-sm text-gray-500 mb-4" data-oid="_lit7l6">
            Account deletion is non-reversable. Please proceed with caution.
          </p>
          <form
            onSubmit={handleDeleteSubmit}
            className="space-y-4"
            data-oid="22o6que"
          >
            <div data-oid="sao.zdd">
              <Label htmlFor="delete-password" data-oid="uzxuu5_">
                Confirm Password
              </Label>
              <Input
                id="delete-password"
                name="password"
                type="password"
                required
                minLength={8}
                maxLength={100}
                data-oid="8_1_62q"
              />
            </div>
            {deleteState.error && (
              <p className="text-red-500 text-sm" data-oid="svb:1vz">
                {deleteState.error}
              </p>
            )}
            <Button
              type="submit"
              variant="destructive"
              className="bg-red-600 hover:bg-red-700"
              disabled={isDeletePending}
              data-oid="supbq5v"
            >
              {isDeletePending ? (
                <>
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="zv1n3d9"
                  />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" data-oid="fy6l3:p" />
                  Delete Account
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

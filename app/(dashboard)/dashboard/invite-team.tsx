"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Loader2, PlusCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { use, useActionState } from "react";
import { inviteTeamMember } from "@/app/(login)/actions";
import { useUser } from "@/lib/auth";

type ActionState = {
  error?: string;
  success?: string;
};

export function InviteTeamMember() {
  const { userPromise } = useUser();
  const user = use(userPromise);
  const isOwner = user?.role === "owner";
  const [inviteState, inviteAction, isInvitePending] = useActionState<
    ActionState,
    FormData
  >(inviteTeamMember, { error: "", success: "" });

  return (
    <Card data-oid="r56.a0c">
      <CardHeader data-oid="g5cora5">
        <CardTitle data-oid="ppy9sxc">Invite Team Member</CardTitle>
      </CardHeader>
      <CardContent data-oid="vrp.fgk">
        <form action={inviteAction} className="space-y-4" data-oid="amjwhsr">
          <div data-oid="9js-myc">
            <Label htmlFor="email" data-oid="ok2q7jq">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              required
              disabled={!isOwner}
              data-oid="4fwln0z"
            />
          </div>
          <div data-oid="sh0xtii">
            <Label data-oid="lz_gzx2">Role</Label>
            <RadioGroup
              defaultValue="member"
              name="role"
              className="flex space-x-4"
              disabled={!isOwner}
              data-oid="la5n3ba"
            >
              <div className="flex items-center space-x-2" data-oid="1y5_-tn">
                <RadioGroupItem value="member" id="member" data-oid="0j1wgv5" />
                <Label htmlFor="member" data-oid="wajdr5f">
                  Member
                </Label>
              </div>
              <div className="flex items-center space-x-2" data-oid="1ia22tn">
                <RadioGroupItem value="owner" id="owner" data-oid="sdgwrt8" />
                <Label htmlFor="owner" data-oid="l50ingy">
                  Owner
                </Label>
              </div>
            </RadioGroup>
          </div>
          {inviteState?.error && (
            <p className="text-red-500" data-oid="mwknt49">
              {inviteState.error}
            </p>
          )}
          {inviteState?.success && (
            <p className="text-green-500" data-oid="b937:cs">
              {inviteState.success}
            </p>
          )}
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            disabled={isInvitePending || !isOwner}
            data-oid="ez0bzh9"
          >
            {isInvitePending ? (
              <>
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  data-oid="epu5mvr"
                />
                Inviting...
              </>
            ) : (
              <>
                <PlusCircle className="mr-2 h-4 w-4" data-oid="fmfj_0-" />
                Invite Member
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {!isOwner && (
        <CardFooter data-oid="ixz7aa6">
          <p className="text-sm text-muted-foreground" data-oid="mh8a0ug">
            You must be a team owner to invite new members.
          </p>
        </CardFooter>
      )}
    </Card>
  );
}

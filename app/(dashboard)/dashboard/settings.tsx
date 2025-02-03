"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { customerPortalAction } from "@/lib/payments/actions";
import { useActionState } from "react";
import { TeamDataWithMembers, User } from "@/lib/db/schema";
import { removeTeamMember } from "@/app/(login)/actions";
import { InviteTeamMember } from "./invite-team";

type ActionState = {
  error?: string;
  success?: string;
};

export function Settings({ teamData }: { teamData: TeamDataWithMembers }) {
  const [removeState, removeAction, isRemovePending] = useActionState<
    ActionState,
    FormData
  >(removeTeamMember, { error: "", success: "" });

  const getUserDisplayName = (user: Pick<User, "id" | "name" | "email">) => {
    return user.name || user.email || "Unknown User";
  };

  return (
    <section className="flex-1 p-4 lg:p-8" data-oid="hz3-84v">
      <h1 className="text-lg lg:text-2xl font-medium mb-6" data-oid="p:5a-h8">
        Team Settings
      </h1>
      <Card className="mb-8" data-oid="pnqwm8r">
        <CardHeader data-oid="mqpt17x">
          <CardTitle data-oid="nejp:4y">Team Subscription</CardTitle>
        </CardHeader>
        <CardContent data-oid="1ag1anl">
          <div className="space-y-4" data-oid="f9h.ykl">
            <div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center"
              data-oid="pql7906"
            >
              <div className="mb-4 sm:mb-0" data-oid="c6zybdh">
                <p className="font-medium" data-oid="wiq_843">
                  Current Plan: {teamData.planName || "Free"}
                </p>
                <p className="text-sm text-muted-foreground" data-oid="r49:034">
                  {teamData.subscriptionStatus === "active"
                    ? "Billed monthly"
                    : teamData.subscriptionStatus === "trialing"
                      ? "Trial period"
                      : "No active subscription"}
                </p>
              </div>
              <form action={customerPortalAction} data-oid="b..x27.">
                <Button type="submit" variant="outline" data-oid="v2s6350">
                  Manage Subscription
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-8" data-oid="f_wfu7-">
        <CardHeader data-oid="_pumsq6">
          <CardTitle data-oid="3zg_-vz">Team Members</CardTitle>
        </CardHeader>
        <CardContent data-oid="p063wdk">
          <ul className="space-y-4" data-oid="1fpdgyi">
            {teamData.teamMembers.map((member, index) => (
              <li
                key={member.id}
                className="flex items-center justify-between"
                data-oid="ayzpgw-"
              >
                <div className="flex items-center space-x-4" data-oid="sorkzzq">
                  <Avatar data-oid="67f0:vs">
                    <AvatarImage
                      src={`/placeholder.svg?height=32&width=32`}
                      alt={getUserDisplayName(member.user)}
                      data-oid="70o4pa8"
                    />

                    <AvatarFallback data-oid="ja4gfqk">
                      {getUserDisplayName(member.user)
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div data-oid="ec8n3.u">
                    <p className="font-medium" data-oid="u-u60:h">
                      {getUserDisplayName(member.user)}
                    </p>
                    <p
                      className="text-sm text-muted-foreground capitalize"
                      data-oid="rp5k.n3"
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
                {index > 1 ? (
                  <form action={removeAction} data-oid="hbfjxj8">
                    <input
                      type="hidden"
                      name="memberId"
                      value={member.id}
                      data-oid="mdc1r_s"
                    />

                    <Button
                      type="submit"
                      variant="outline"
                      size="sm"
                      disabled={isRemovePending}
                      data-oid="5s2arme"
                    >
                      {isRemovePending ? "Removing..." : "Remove"}
                    </Button>
                  </form>
                ) : null}
              </li>
            ))}
          </ul>
          {removeState?.error && (
            <p className="text-red-500 mt-4" data-oid="m0t7nwn">
              {removeState.error}
            </p>
          )}
        </CardContent>
      </Card>
      <InviteTeamMember data-oid="itpe5c3" />
    </section>
  );
}

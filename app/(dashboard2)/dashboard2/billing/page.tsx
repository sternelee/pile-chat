import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BillingInfo } from "@/components/billing-info";
import { LanugageButton } from "@/components/buttons/LanguageButton";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { Icons } from "@/components/shared/icons";

export const metadata = {
  title: "pilechat Billing - Subscription Management",
  description:
    "Access and manage your billing information, view subscription plans, and update payment methods on pilechat's Billing page.",
};

export default async function BillingPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id);

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-8">
        {/* <Alert className="!pl-14">
          <Icons.warning />
          <AlertTitle>This is a demo app.</AlertTitle>
          <AlertDescription>
            pilechat app is a demo app using a Stripe test environment. You can
            find a list of test card numbers on the{" "}
            <a
              href="https://stripe.com/docs/testing#cards"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-8"
            >
              Stripe docs
            </a>
            .
          </AlertDescription>
        </Alert> */}
        <BillingInfo subscriptionPlan={subscriptionPlan} />
      </div>
      {/* <LanugageButton userId={user.id} /> */}
    </DashboardShell>
  );
}

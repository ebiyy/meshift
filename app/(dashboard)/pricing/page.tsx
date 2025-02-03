import { checkoutAction } from "@/lib/payments/actions";
import { Check } from "lucide-react";
import { getStripePrices, getStripeProducts } from "@/lib/payments/stripe";
import { SubmitButton } from "./submit-button";

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === "Base");
  const plusPlan = products.find((product) => product.name === "Plus");

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id);

  return (
    <main
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      data-oid="xyr62qo"
    >
      <div
        className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto"
        data-oid="vl0_1o6"
      >
        <PricingCard
          name={basePlan?.name || "Base"}
          price={basePrice?.unitAmount || 800}
          interval={basePrice?.interval || "month"}
          trialDays={basePrice?.trialPeriodDays || 7}
          features={[
            "Unlimited Usage",
            "Unlimited Workspace Members",
            "Email Support",
          ]}
          priceId={basePrice?.id}
          data-oid="rlda:29"
        />

        <PricingCard
          name={plusPlan?.name || "Plus"}
          price={plusPrice?.unitAmount || 1200}
          interval={plusPrice?.interval || "month"}
          trialDays={plusPrice?.trialPeriodDays || 7}
          features={[
            "Everything in Base, and:",
            "Early Access to New Features",
            "24/7 Support + Slack Access",
          ]}
          priceId={plusPrice?.id}
          data-oid="irv0ye6"
        />
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId?: string;
}) {
  return (
    <div className="pt-6" data-oid="j:qqa_j">
      <h2
        className="text-2xl font-medium text-gray-900 mb-2"
        data-oid="9oednbb"
      >
        {name}
      </h2>
      <p className="text-sm text-gray-600 mb-4" data-oid="ls9rsnf">
        with {trialDays} day free trial
      </p>
      <p className="text-4xl font-medium text-gray-900 mb-6" data-oid="ese8o7n">
        ${price / 100}{" "}
        <span className="text-xl font-normal text-gray-600" data-oid="26yp9oj">
          per user / {interval}
        </span>
      </p>
      <ul className="space-y-4 mb-8" data-oid="b69a7:j">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start" data-oid=":rg9a4x">
            <Check
              className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0"
              data-oid="xca--d_"
            />

            <span className="text-gray-700" data-oid="afqo:8t">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <form action={checkoutAction} data-oid="3g9_iu1">
        <input
          type="hidden"
          name="priceId"
          value={priceId}
          data-oid="cuoj4oy"
        />

        <SubmitButton data-oid=":z:0pn5" />
      </form>
    </div>
  );
}

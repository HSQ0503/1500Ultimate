export type Plan = "free" | "blueprint" | "pro";

export const DEFAULT_PLAN: Plan = "pro";

export function parsePlan(value?: string | null): Plan {
  return value === "free" || value === "blueprint" || value === "pro"
    ? value
    : DEFAULT_PLAN;
}

export const planRank: Record<Plan, number> = {
  free: 0,
  blueprint: 1,
  pro: 2,
};

export function canAccess(plan: Plan, feature: string) {
  if (feature === "challenges" || feature === "full-masterclass") {
    return plan === "pro";
  }
  if (feature === "tests") return plan !== "free";
  return true;
}

export function pricingTarget(feature: string) {
  const highlight =
    feature === "challenges" || feature === "full-masterclass"
      ? "pro"
      : "blueprint";
  return `/pricing?highlight=${highlight}`;
}

export function planLimits(plan: Plan) {
  if (plan === "pro") {
    return {
      bankQuestions: "All",
      askScott: "Unlimited",
      rush: "Unlimited",
      tests: 6,
      masterclass: "Full",
    };
  }
  if (plan === "blueprint") {
    return {
      bankQuestions: "All",
      askScott: "50/week",
      rush: "3/week",
      tests: 2,
      masterclass: "Foundations",
    };
  }
  return {
    bankQuestions: "~200",
    askScott: "10/week",
    rush: "1 demo",
    tests: 0,
    masterclass: "Locked",
  };
}

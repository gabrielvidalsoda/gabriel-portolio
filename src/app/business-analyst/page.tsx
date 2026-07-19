import type { Metadata } from "next";
import { RolePageView } from "@/components/RolePageView";
import { getRole } from "@/data/roles";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Business Analyst",
  description:
    "Gabriel Vidal as Business Analyst — workshops, requirements, and clear specs for delivery teams.",
};

export default function BusinessAnalystPage() {
  const role = getRole("business-analyst");
  if (!role) notFound();
  return <RolePageView role={role} />;
}

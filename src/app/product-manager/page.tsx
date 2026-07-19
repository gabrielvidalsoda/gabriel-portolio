import type { Metadata } from "next";
import { RolePageView } from "@/components/RolePageView";
import { getRole } from "@/data/roles";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Product Manager",
  description:
    "Gabriel Vidal as Product Manager — discovery-to-delivery, prioritization, and measurable outcomes.",
};

export default function ProductManagerPage() {
  const role = getRole("product-manager");
  if (!role) notFound();
  return <RolePageView role={role} />;
}

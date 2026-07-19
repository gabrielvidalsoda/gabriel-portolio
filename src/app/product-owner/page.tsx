import type { Metadata } from "next";
import { RolePageView } from "@/components/RolePageView";
import { getRole } from "@/data/roles";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Product Owner",
  description:
    "Gabriel Vidal as Product Owner — backlog, Scrum, user stories, and customer validation.",
};

export default function ProductOwnerPage() {
  const role = getRole("product-owner");
  if (!role) notFound();
  return <RolePageView role={role} />;
}

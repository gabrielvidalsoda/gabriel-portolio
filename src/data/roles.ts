import type { RoleKey } from "./experience";

export type RolePage = {
  key: RoleKey;
  slug: string;
  title: string;
  shortLabel: string;
  tagline: string;
  intro: string;
  focus: string[];
};

export const roles: RolePage[] = [
  {
    key: "product-manager",
    slug: "product-manager",
    title: "Product Manager",
    shortLabel: "Product Manager",
    tagline:
      "Outcomes over output — discovery, prioritization, and delivery that move the business.",
    intro:
      "I approach product management as ownership of the path from problem to shipped value: framing the opportunity, aligning stakeholders, keeping delivery visible, and measuring what landed. My background spans B2B SaaS product work, accelerator portfolio operations, and client-facing delivery with multinational teams.",
    focus: [
      "Discovery-to-delivery ownership and launch predictability",
      "Prioritization, milestones, and KPI visibility",
      "Cross-functional alignment between clients, product, and engineering",
      "Measurable outcomes — including +5% client sales from Mercadapp Campaigns",
    ],
  },
  {
    key: "product-owner",
    slug: "product-owner",
    title: "Product Owner",
    shortLabel: "Product Owner",
    tagline:
      "Backlog clarity, Scrum rhythm, and continuous validation with customers and engineering.",
    intro:
      "As a Product Owner I prioritize the backlog in Jira, write user stories with clear acceptance criteria, run Scrum ceremonies, and stay close to customers and engineering from discovery through post-delivery. I care about reducing ambiguity before it becomes rework.",
    focus: [
      "Backlog prioritization, user stories, and acceptance criteria",
      "Scrum ceremonies — refinement, sprint planning, delivery rhythm",
      "Customer-facing discovery and continuous validation",
      "Partnership with engineering on scope, constraints, and quality",
    ],
  },
  {
    key: "business-analyst",
    slug: "business-analyst",
    title: "Business Analyst",
    shortLabel: "Business Analyst",
    tagline:
      "Workshops, refined requirements, and specs teams can trust — especially with multinational stakeholders.",
    intro:
      "I facilitate stakeholder workshops, analyze and refine requirements, and translate business needs into clear specifications for development and QA. I work comfortably with multicultural teams and English C2 for client meetings, with a strong bias toward traceability and less rework.",
    focus: [
      "Stakeholder workshops and scope clarification",
      "Requirements analysis and refinement",
      "Clear specs and acceptance criteria for engineering and QA",
      "SQL, reporting, and metrics to support decisions",
    ],
  },
];

export function getRole(slug: string): RolePage | undefined {
  return roles.find((role) => role.slug === slug);
}

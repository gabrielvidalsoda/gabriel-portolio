export type RoleKey = "product-manager" | "product-owner" | "business-analyst";

export type ExperienceItem = {
  id: string;
  company: string;
  title: string;
  period: string;
  summary: string;
  /** Shared bullets used on the home previous-work section */
  highlights: string[];
  /** Role-specific emphasis */
  byRole: Record<RoleKey, string[]>;
};

export const currentWork = {
  company: "KIS Solutions",
  title: "Business Analyst / Quality Assurance",
  period: "10/2024 – Present",
  blurb:
    "I bridge multinational retail clients and multicultural delivery teams — clarifying scope, refining requirements, and keeping product intent aligned with engineering and quality through delivery.",
} as const;

export const experience: ExperienceItem[] = [
  {
    id: "kis",
    company: "KIS Solutions",
    title: "Business Analyst / Quality Assurance",
    period: "10/2024 – Present",
    summary:
      "Bridges multinational retail clients and multicultural delivery teams through discovery, requirements refinement, and clear specifications for engineering.",
    highlights: [
      "Facilitate stakeholder workshops with North American and multinational clients to clarify scope and priorities.",
      "Translate client demands into user stories and acceptance criteria for development and QA.",
      "Partner with engineering through delivery, reducing ambiguity and rework before release.",
    ],
    byRole: {
      "product-manager": [
        "Align stakeholders, development, and QA end to end so delivery stays visible and outcomes stay measurable.",
        "Identify delivery risks early — ambiguous specs, missing validations — and drive corrective alignment.",
        "Support predictability of feature validation through structured routines, reducing time to confirm new releases.",
        "Key results: clearer delivery visibility through traced requirements; reduced validation cycle time for multinational retail clients.",
      ],
      "product-owner": [
        "Analyze and refine requirements into clear user stories and acceptance criteria for engineering and QA.",
        "Partner with software engineering throughout delivery, keeping product intent and technical constraints aligned.",
        "Present product updates and validation outcomes to stakeholders with traceability from requirements to delivery.",
        "Key results: clearer specs that improved engineering alignment; faster validation cycles via structured QA partnership.",
      ],
      "business-analyst": [
        "Facilitate stakeholder workshops to gather business needs, clarify scope, and align priorities with multinational clients.",
        "Analyze and refine requirements, translating client demands into clear specifications for development and quality teams.",
        "Document validation outcomes and maintain traceability of project artifacts across delivery.",
        "Key results: requirements and delivery support for multinational retail clients; reduced ambiguity and rework before release.",
      ],
    },
  },
  {
    id: "casa-azul-ba3",
    company: "Casa Azul Ventures",
    title: "Business Analyst III",
    period: "12/2023 – 10/2024",
    summary:
      "Led accelerator operations with prioritization, KPI monitoring, and stakeholder management across a portfolio of startups.",
    highlights: [
      "Plan and run acceleration programs: schedule, prioritization, suppliers, and operations team leadership.",
      "Monitor portfolio outcomes and KPIs for leadership and partners.",
      "Represent Casa Azul with external innovation stakeholders.",
    ],
    byRole: {
      "product-manager": [
        "Own end-to-end operational predictability of acceleration programs under delivery pressure.",
        "Plan program operations with schedule control, milestone tracking, budget, suppliers, and prioritization.",
        "Monitor portfolio results and KPIs; consolidate status for leadership and partners.",
        "Key results: end-to-end operations leadership; structured portfolio monitoring with KPIs across accelerated startups.",
      ],
      "product-owner": [
        "Plan and run acceleration programs with clear prioritization and leadership of the operations team.",
        "Manage portfolio outcomes with results monitoring and key performance indicators.",
        "Balance partner expectations and program constraints in external stakeholder conversations.",
        "Key results: end-to-end program ownership; structured KPI monitoring across the portfolio.",
      ],
      "business-analyst": [
        "Plan and manage acceleration programs including schedule, financial management, suppliers, and prioritization.",
        "Manage portfolio outcomes with institutional relationships, results monitoring, and KPIs.",
        "Evaluate and participate in the selection of startups accelerated by Casa Azul.",
        "Key results: operations leadership for acceleration programs; structured portfolio monitoring with KPIs.",
      ],
    },
  },
  {
    id: "casa-azul-aa2",
    company: "Casa Azul Ventures",
    title: "Acceleration Analyst II",
    period: "05/2023 – 12/2023",
    summary:
      "Weekly discovery-style follow-ups with 15 traction-stage startups, rated 5/5 by participants.",
    highlights: [
      "Weekly 1:1s with 15 traction-stage startups to review metrics and co-create growth plans.",
      "Maximum follow-up satisfaction score (5/5).",
    ],
    byRole: {
      "product-manager": [
        "Run weekly operating rituals with 15 traction-stage startups — metrics review, risks, and next actions.",
        "Keep visibility of commitments; adjust plans when delivery drifted.",
        "Key results: semi-personalized acceleration of 15 startups; maximum follow-up satisfaction (5/5).",
      ],
      "product-owner": [
        "Conduct weekly sessions to review metrics, define action plans, and co-create growth strategies.",
        "Collect and analyze performance metrics to prioritize interventions by business outcome.",
        "Key results: semi-personalized acceleration of 15 traction-stage startups; 5/5 follow-up satisfaction.",
      ],
      "business-analyst": [
        "Conduct weekly 1:1 follow-ups with 15 traction-stage startups to review indicators and action plans.",
        "Collect and analyze performance metrics to adapt follow-ups to each business.",
        "Facilitate connections between startups, mentors, and key partners to unblock progress.",
        "Key results: semi-personalized acceleration of 15 startups; maximum follow-up satisfaction (5/5).",
      ],
    },
  },
  {
    id: "mercadapp-product",
    company: "Mercadapp / Linx Retail",
    title: "Product Analyst",
    period: "11/2021 – 12/2022",
    summary:
      "Owned discovery-to-delivery for Mercadapp Campaigns in a B2B SaaS retail product, driving a 5% sales increase for clients.",
    highlights: [
      "Shipped Mercadapp Campaigns (+5% client sales).",
      "Prioritized backlog in Jira and ran Scrum ceremonies.",
      "Standardized Discovery and refinement with engineering.",
    ],
    byRole: {
      "product-manager": [
        "Own feature launches from MVP through post-delivery, aligning scope, timeline, and business outcomes.",
        "Run Scrum ceremonies; prioritize backlog in Jira and keep delivery visibility for the squad.",
        "Support critical integrations (CRM and payments), tracking dependencies through to release.",
        "Key results: Mercadapp Campaigns (+5% client sales); standardized Discovery; Cresce Vendas CRM and Pagar.me integrations; consolidated product operating model.",
      ],
      "product-owner": [
        "Prioritize the product backlog in Jira, write and allocate user stories into sprints, and run Scrum ceremonies.",
        "Lead product discovery from problem framing through MVP and post-delivery, validating continuously with customers.",
        "Partner with stakeholders and engineering to balance customer needs, business goals, and technical constraints.",
        "Use SQL and product analytics to support prioritization decisions.",
        "Key results: created and consolidated the product function; shipped Mercadapp Campaigns (+5% client sales); CRM and payments integrations.",
      ],
      "business-analyst": [
        "Map processes, analyze failures, and drive corrective actions for continuous improvement of product flows.",
        "Interface directly with stakeholders to develop new solutions and define strategic objectives.",
        "Extract and analyze data with SQL to contribute to market intelligence and prioritization.",
        "Key results: standardized Discovery with engineering; Mercadapp Campaigns (+5% client sales); CRM and payments integrations.",
      ],
    },
  },
  {
    id: "mercadapp-marketing",
    company: "Mercadapp / Linx Retail",
    title: "Marketing Specialist",
    period: "06/2020 – 10/2021",
    summary:
      "Built customer-acquisition and insight routines that later informed product and growth decisions.",
    highlights: [
      "Implemented acquisition tooling (Google Ads, Meta Ads Manager, RD Station).",
      "Structured marketing operations and reporting for decision-making.",
    ],
    byRole: {
      "product-manager": [
        "Coordinate campaign execution under deadlines with goal tracking and performance reporting.",
        "Key results: implemented acquisition tooling and operating routines; structured reporting for leadership decisions.",
      ],
      "product-owner": [
        "Run organic and paid acquisition campaigns, tracking goals and metrics to guide prioritization.",
        "Benchmark competitors on products, pricing, and positioning to inform go-to-market decisions.",
        "Key results: core acquisition tooling in place; structured marketing operations and reporting.",
      ],
      "business-analyst": [
        "Track goals, metrics, and digital presence to support prioritization and reporting.",
        "Benchmark competitors on products, pricing, and positioning.",
        "Key results: implemented Ads Manager and RD Station; structured marketing operations and reporting.",
      ],
    },
  },
];

export const previousWorkSummary = [
  {
    company: "Casa Azul Ventures",
    blurb:
      "Led accelerator operations and weekly discovery-style follow-ups with traction-stage startups — prioritization, KPIs, and stakeholder alignment rated 5/5 by participants.",
  },
  {
    company: "Mercadapp / Linx Retail",
    blurb:
      "Owned discovery-to-delivery for Mercadapp Campaigns in B2B SaaS retail, shipping a feature that increased client sales by 5%, and earlier built acquisition and insight routines that informed product decisions.",
  },
] as const;

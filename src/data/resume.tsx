import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon, Webhook } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Cplusplus } from "@/components/ui/svgs/cplusplus";
import { Git } from "@/components/ui/svgs/git";
import { Vercel } from "@/components/ui/svgs/vercel";
import { N8n } from "@/components/ui/svgs/n8n";

export const DATA = {
  name: "Mohamed Yehya",
  initials: "MY",
  url: "https://mohamedyehya.vercel.app",
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/cairo",
  description:
    "Full-stack developer in Cairo. Next.js, TypeScript, Postgres, Supabase — multi-tenant apps, e-commerce, workflow automation.",
  summary:
    "I build multi-tenant web apps and automation systems: role-based access, row-level security, server-side validation, race-condition-safe bookings. Stack is TypeScript and Next.js on Postgres via Supabase, plus n8n for workflow automation. B.Sc. in Computer Science, Egyptian Chinese University.",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Supabase", icon: Supabase },
    { name: "Tailwind CSS", icon: Tailwindcss },
    { name: "Python", icon: Python },
    { name: "C++", icon: Cplusplus },
    { name: "REST APIs", icon: Webhook },
    { name: "Git", icon: Git },
    { name: "Vercel", icon: Vercel },
    { name: "n8n", icon: N8n },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", ariaLabel: undefined },
    {
      href: "/cv.pdf",
      icon: FileTextIcon,
      label: "CV",
      ariaLabel: "View CV (PDF, opens in a new tab)",
    },
  ],
  contact: {
    email: "muhamedyehya4@gmail.com",
    tel: "+201005015490",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/muhamedyehya4",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohamed-yehya-59514531b/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Fiverr (Freelance)",
      href: "",
      badges: [],
      location: "Cairo, Egypt",
      title: "Freelance Software Developer",
      logoUrl: "/Fiverrlogo.png",
      start: "Feb 2026",
      end: "Present",
      description:
        "• Built and shipped a multi-tenant real estate CRM for a brokerage, with Postgres row-level security and role-based lead routing (Next.js, Supabase). • Built a bilingual (EN/AR) gym management platform with QR attendance, server-side subscription validation and WhatsApp reminders. • Built a headless Medusa v2 + Next.js e-commerce storefront and admin for a Cairo home-decor brand.",
    },
    {
      company: "Taskeen Egypt",
      href: "",
      badges: [],
      location: "Cairo, Egypt",
      title: "Property Advisor",
      logoUrl: "/taskeen.png",
      start: "Nov 2025",
      end: "Feb 2026",
      description:
        "Managed client relationships from first contact through deal closure: lead qualification, property presentations, negotiation and contract finalization.",
    },
    {
      company: "Shahba Designs",
      href: "",
      badges: [],
      location: "Cairo, Egypt",
      title: "Social Media Specialist",
      logoUrl: "/shahba.png",
      start: "Aug 2025",
      end: "Oct 2025",
      description:
        "Ran the brand's social accounts end to end: content planning, posting and audience engagement. Shot and edited video content for campaigns.",
    },
  ],
  education: [
    {
      school: "Egyptian Chinese University",
      href: "",
      degree: "B.Sc. in Computer Science",
      logoUrl: "/NewECULogo.png",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Top Notch Athletics: Gym Management Platform",
      href: "https://top-notch-athletics.vercel.app/demo",
      dates: "2026 - Present",
      active: true,
      description:
        "Bilingual (EN/AR, RTL) Next.js platform for a Cairo gym: public marketing site plus a role-separated internal system for admins, staff, coaches and athletes.\n\n• Attendance via permanent per-account QR codes, with subscription status, sessions-remaining and duplicate-check-in validated server-side, not in the UI.\n• Row-level security isolating data by role (admin/staff/coach/athlete) at the database layer.\n• WhatsApp expiry reminders wired through Evolution API against subscription state in Postgres.\n\nClient: [@top.notch.egypt](https://www.instagram.com/top.notch.egypt)",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Row Level Security",
        "Vercel",
        "Evolution API",
        "i18n / RTL",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://top-notch-athletics.vercel.app/demo",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/topnotch-cover.png",
      video: "",
    },
    {
      title: "Real Estate CRM for Brokerage Firms",
      href: "https://demo-portfolio.webcrm.app/demo",
      dates: "2026 - Present",
      active: true,
      description:
        "Multi-tenant CRM for Egyptian real estate brokerages. Leads from Meta and TikTok ads land in a shared pool, then route down through managers, team leaders and agents.\n\n• Postgres row-level security enforcing per-agent data isolation across a shared multi-tenant schema.\n• Role-based access hierarchy (manager → team leader → agent) with server-side enforcement of what each role can see and edit.\n• Lead-discipline rules run server-side: daily pull cap, mandatory comments on status changes, stale leads recycled back to the pool.\n\nLive demo seeds an admin account with ~3,900 leads and resets nightly.\n\nClient: [@shahba.investments](https://www.instagram.com/shahba.investments/)",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Row Level Security",
        "Vercel",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://demo-portfolio.webcrm.app/demo",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/azurecoast-cover.png",
      video: "",
    },
    {
      title: "Avoure — Luxury Home Decor Storefront",
      href: "https://avoure-storefront-nu.vercel.app/eg",
      dates: "2026 - Present",
      active: true,
      description:
        "Headless e-commerce storefront on Medusa v2 + Next.js 15 for a Cairo home-decor brand.\n\n• Single-page progressive checkout with a cash-on-delivery flow and guest order tracking.\n• Demo runs fully client-side against a mocked catalog, cart and order API, with no live backend.",
      technologies: ["Next.js", "Medusa v2", "TypeScript", "Tailwind", "Supabase"],
      links: [
        {
          type: "Live Demo",
          href: "https://avoure-storefront-nu.vercel.app/eg",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/avoure-storefront-cover.jpeg",
      video: "",
    },
    {
      title: "Avoure — Commerce Admin Dashboard",
      href: "https://avoure-admin-demo-site.vercel.app/app/orders",
      dates: "2026 - Present",
      active: true,
      description:
        "The Avoure store's Medusa admin dashboard with a custom store-lock widget.\n\n• Runs backend-free via a Mock Service Worker API layer intercepting the Medusa Admin SDK's requests.\n• Orders, products, customers and inventory are browsable and editable; edits persist in-session until reload.",
      technologies: ["React", "Medusa Admin SDK", "MSW", "TypeScript"],
      links: [
        {
          type: "Live Demo",
          href: "https://avoure-admin-demo-site.vercel.app/app/orders",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/avoure-admin-cover.jpg",
      video: "",
    },
    {
      title: "Clinic Automation System",
      href: "https://github.com/muhamedyehya4/clinic-automation-system",
      dates: "2026 - Present",
      active: true,
      description:
        "n8n + Postgres + LLM WhatsApp booking and automation system for a clinic: 4 pipelines, 148 nodes, handling intake, scheduling and follow-ups end to end.\n\n• LLM classifies inbound WhatsApp intent and drives routing across booking, risk triage, escalation and review-request paths.\n• Booking agent checks slot availability via a Postgres advisory-locked stored procedure; unique constraints and NULL-guarded updates stop reminders and triage alerts firing twice.\n\nBuilt with a team of four; I owned system architecture and workflow design.",
      technologies: ["n8n", "PostgreSQL", "LLM", "WhatsApp API"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/muhamedyehya4/clinic-automation-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/clinic-cover.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "ICPC Egyptian Collegiate Programming Contest: Honorable Mention",
      dates: "August 2025",
      location: "Cairo, Egypt",
      description:
        "Earned an Honorable Mention at the 2025 ICPC Egyptian Collegiate Programming Contest, the national finals of the International Collegiate Programming Contest.",
      image: "/icpc.png",
      issuer: "ICPC",
      links: [
        {
          title: "Verify",
          href: "/icpc-egyptian-2025.pdf",
          icon: <Icons.globe className="size-3" />,
          ariaLabel: "Verify certificate (PDF, opens in new tab)",
        },
      ],
    },
    {
      title: "ICPC ECPC Qualifications: 28th Place",
      dates: "July 2025",
      location: "Cairo, Egypt",
      description:
        "Placed 28th in the 2025 ICPC ECPC qualification round, competing on algorithmic problem solving under contest time limits.",
      image: "/icpc.png",
      issuer: "ICPC",
      links: [
        {
          title: "Verify",
          href: "/icpc-ecpc-2025.pdf",
          icon: <Icons.globe className="size-3" />,
          ariaLabel: "Verify certificate (PDF, opens in new tab)",
        },
      ],
    },
    {
      title: "Google Digital Marketing & E-commerce",
      dates: "July 2025",
      location: "Coursera",
      description:
        "Eight-course Google professional certificate covering digital marketing foundations, campaign measurement, email marketing and running e-commerce stores.",
      image: "/google.webp",
      issuer: "Google",
      links: [
        {
          title: "Verify",
          href: "https://coursera.org/verify/professional-cert/Y5R98AR9VQ51",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "ALX AI Career Essentials",
      dates: "December 2024",
      location: "ALX",
      description:
        "Eight-week programme in AI-augmented professional development skills for the digital age.",
      image: "/alx.png",
      issuer: "ALX",
      links: [
        {
          title: "Verify",
          href: "https://intranet.alxswe.com/certificates/5xnTBePJ98",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;

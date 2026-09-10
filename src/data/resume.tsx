import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Mohamed Yehya",
  initials: "MY",
  url: "https://github.com/muhamedyehya4",
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/cairo",
  description:
    "CS student who ships. I build and deploy production systems — CRMs, ops platforms and internal tools — for real clients.",
  summary:
    "Third-year Computer Science student at Egyptian Chinese University. I build and ship business systems end to end: a multi-tenant real estate CRM running live with paying agencies, and a gym management platform handling memberships, scheduling and QR check-in. Next.js, TypeScript, Supabase and Postgres, with a focus on role-based access and getting things into production.",
  avatarUrl: "/me.png",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: undefined },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Supabase", icon: undefined },
    { name: "Tailwind CSS", icon: undefined },
    { name: "Python", icon: Python },
    { name: "C++", icon: Csharp },
    { name: "REST APIs", icon: undefined },
    { name: "Git", icon: undefined },
    { name: "Vercel", icon: undefined },
    { name: "n8n", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/cv.pdf", icon: FileTextIcon, label: "CV" },
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
        url: "https://www.linkedin.com/in/muhamed-yehya",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Early-Stage Startup",
      href: "",
      badges: [],
      location: "Cairo, Egypt",
      title: "Software Developer",
      logoUrl: "",
      start: "Feb 2026",
      end: "Present",
      description:
        "Building an automated clinic management system with a team of four — appointment scheduling, patient intake, follow-ups and no-show reduction. Responsible for system architecture and workflow design.",
    },
    {
      company: "Taskeen Egypt",
      href: "",
      badges: [],
      location: "Cairo, Egypt",
      title: "Property Advisor",
      logoUrl: "/taskeen.jpg",
      start: "Nov 2025",
      end: "Feb 2026",
      description:
        "Managed client relationships from first contact through deal closure — lead qualification, property presentations, negotiation and contract finalization.",
    },
    {
      company: "Shahba Designs",
      href: "",
      badges: [],
      location: "Cairo, Egypt",
      title: "Social Media Specialist",
      logoUrl: "/shahba.jpg",
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
      logoUrl: "/ecu.png",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Top Notch Athletics — Gym Management Platform",
      href: "https://top-notch-athletics.vercel.app/demo",
      dates: "2026 - Present",
      active: true,
      description:
        "[Top Notch Athletics](https://instagram.com/top.notch.egypt), a single-branch athletic performance gym in Cairo, ran bookings and attendance entirely through Instagram DMs. I designed and built a bilingual (EN/AR, RTL-ready) Next.js platform that pairs a public marketing site with a role-separated internal system for admins, staff, coaches, and athletes. Attendance runs on permanent per-account QR codes scanned at the front desk, with all validation — active subscription, sessions remaining, duplicate check-in — enforced server-side. Subscriptions, session scheduling, and WhatsApp expiry reminders are handled in the same Supabase-backed system, with row-level security isolating every role from day one.\n\nClient: [@top.notch.egypt](https://www.instagram.com/top.notch.egypt)",
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
      title: "Nile Crest Properties — Real Estate CRM",
      href: "https://demo-portfolio.webcrm.app",
      dates: "2026",
      active: true,
      description:
        "Multi-tenant CRM for Egyptian real estate brokerages. Leads from Meta and TikTok ads land in a shared pool, then route down through managers, team leaders and agents, with per-agent row-level isolation. Automatic discipline rules: daily pull cap, mandatory comments on status changes, stale leads recycled back to the pool. The live demo signs you in as an admin of a seeded agency with ~3,900 leads and resets nightly.\n\nClient: [@shahba.investments](https://www.instagram.com/shahba.investments/)",
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
          href: "https://demo-portfolio.webcrm.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "ICPC Egyptian Collegiate Programming Contest — Honorable Mention",
      dates: "August 2025",
      location: "Cairo, Egypt",
      description:
        "Earned an Honorable Mention at the 2025 ICPC Egyptian Collegiate Programming Contest, the national finals of the International Collegiate Programming Contest.",
      image: "",
      links: [
        {
          title: "Certificate",
          href: "/icpc-egyptian-2025.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "ICPC ECPC Qualifications — 28th Place",
      dates: "July 2025",
      location: "Cairo, Egypt",
      description:
        "Placed 28th in the 2025 ICPC ECPC qualification round, competing on algorithmic problem solving under contest time limits.",
      image: "",
      links: [
        {
          title: "Certificate",
          href: "/icpc-ecpc-2025.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Google Digital Marketing & E-commerce",
      dates: "July 2025",
      location: "Coursera",
      description:
        "Eight-course Google professional certificate covering digital marketing foundations, campaign measurement, email marketing and running e-commerce stores.",
      image: "",
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
      image: "",
      links: [
        {
          title: "Verify",
          href: "https://intranet.alxswe.com/certificates/5xnTBePJ98",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Google AI Essentials",
      dates: "2025",
      location: "Coursera",
      description:
        "Google certificate covering practical use of generative AI tools for everyday professional work.",
      image: "",
      links: [],
    },
  ],
} as const;

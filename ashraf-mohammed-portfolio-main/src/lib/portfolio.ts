import portrait from "@/assets/ashraf-portrait.png.asset.json";
import hospitalShot from "@/assets/nairobi-south-hospital.png.asset.json";
import universityShot from "@/assets/kenya-university-portal.png.asset.json";
import brandImg from "@/assets/work-brand-identity.jpg";
import posterImg from "@/assets/work-poster.jpg";
import gradeImg from "@/assets/work-cinematic-grade.jpg";
import suiteImg from "@/assets/work-edit-suite.jpg";

export const profile = {
  name: "Ashraf Mohammed",
  firstName: "Ashraf",
  roles: ["Full-Stack Developer", "Graphic Designer", "Video Editor"],
  email: "hello@ashrafmohammed.dev",
  whatsapp: "+254 722 841 477",
  whatsappUrl: "https://wa.me/254722841477",
  portrait: portrait.url,
};

export type Category = "web" | "design" | "video";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: Category;
  year: string;
  summary: string;
  tags: string[];
  image: string;
  url?: string;
  concept?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nairobi-south-hospital",
    title: "Nairobi South Hospital",
    client: "Healthcare · Patient registration",
    category: "web",
    year: "2026",
    summary:
      "A hospital website with service listings and a full online patient registration form — personal details, medical history, appointment booking and emergency contacts in one flow.",
    tags: ["Web App", "Forms", "Responsive", "Vercel"],
    image: hospitalShot.url,
    url: "http://hosiform.vercel.app/",
  },
  {
    slug: "kenya-university-portal",
    title: "Kenya University Admissions",
    client: "Education · Online admissions",
    category: "web",
    year: "2026",
    summary:
      "An online admission portal where applicants submit their details, KCSE index number and course choice — replacing paper applications with a clean digital form.",
    tags: ["Web App", "Admissions", "UI Design", "Vercel"],
    image: universityShot.url,
    url: "https://e-commerce-two-zeta-78.vercel.app/",
  },
  {
    slug: "ember-identity",
    title: "Ember Brand Identity",
    client: "Branding · Stationery system",
    category: "design",
    year: "2026",
    summary: "Logo mark, colour system and stationery for a bold, modern brand.",
    tags: ["Logo", "Identity", "Print"],
    image: brandImg,
    concept: true,
  },
  {
    slug: "form-poster",
    title: "Form & Rhythm Poster",
    client: "Graphic design · Poster",
    category: "design",
    year: "2026",
    summary: "Swiss-inspired geometric poster exploring balance, contrast and rhythm.",
    tags: ["Poster", "Layout", "Print"],
    image: posterImg,
    concept: true,
  },
  {
    slug: "city-gold",
    title: "City Gold — Colour Grade",
    client: "Video · Cinematic grade",
    category: "video",
    year: "2026",
    summary: "Golden-hour city footage graded with warm highlights and teal shadows.",
    tags: ["Colour Grading", "Cinematic", "DaVinci"],
    image: gradeImg,
    concept: true,
  },
  {
    slug: "night-edit",
    title: "Night Session Edit",
    client: "Video · Editing & sound",
    category: "video",
    year: "2026",
    summary: "Multi-cam edit with sound design, pacing and motion titles for social.",
    tags: ["Editing", "Sound", "Motion"],
    image: suiteImg,
    concept: true,
  },
];

export const disciplines = [
  {
    n: "01",
    title: "Full-Stack Development",
    blurb:
      "Fast, responsive websites and web apps — from the interface people click to the server and database behind it.",
    tools: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind", "PostgreSQL", "REST APIs"],
  },
  {
    n: "02",
    title: "Graphic Design",
    blurb:
      "Logos, brand identities, posters and social graphics that look sharp and say the right thing at a glance.",
    tools: ["Photoshop", "Illustrator", "Figma", "Canva", "Branding", "Typography"],
  },
  {
    n: "03",
    title: "Video Editing",
    blurb:
      "Story-driven edits, colour grading and motion graphics for brands, events and social media.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "Sound Design"],
  },
];

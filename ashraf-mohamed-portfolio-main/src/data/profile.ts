import bomasPreview from "@/assets/bomas-university-preview.jpg.asset.json";
import loanPreview from "@/assets/loan-application-preview.jpg.asset.json";
import mwangazaPreview from "@/assets/mwangaza-university-preview.jpg.asset.json";

export const profile = {
  name: "Ashraf Mohamed",
  firstName: "Ashraf",
  role: "Full Stack Developer",
  phone: "+254722841477",
  phoneDisplay: "+254 722 841 477",
  email: "ashraf1moh12@gmail.com",
  whatsapp: "https://wa.me/254722841477",
  location: "Kenya",
};

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "REST APIs",
  "SQL",
  "Git",
  "Responsive Design",
  "Vercel & Netlify",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  tags: string[];
  url: string;
  host: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "bomas-university",
    title: "BOMAS University",
    category: "University website",
    summary:
      "A full university website with programmes, facilities, registration and contact pages — built to present the institution with confidence.",
    highlights: ["Multi-section layout", "Student registration", "Programmes catalogue"],
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://bomas.netlify.app/",
    host: "bomas.netlify.app",
    image: bomasPreview.url,
  },
  {
    slug: "mwangaza-university",
    title: "Mwangaza University",
    category: "Student portal",
    summary:
      "A student portal for Mwangaza University covering courses, mission and vision, performance tracking and online registration.",
    highlights: ["Course listings", "Performance section", "Apply-now flow"],
    tags: ["React", "Responsive", "Vercel"],
    url: "https://mwangaza-j9fn.vercel.app/",
    host: "mwangaza-j9fn.vercel.app",
    image: mwangazaPreview.url,
  },
  {
    slug: "loan-application",
    title: "Microfinance Loan Application",
    category: "Forms & server handling",
    summary:
      "A validated loan application form plus a GET vs POST study — every field checked in the browser and every submission received by a server handler.",
    highlights: ["Native form validation", "File uploads", "GET vs POST analysis"],
    tags: ["HTML Forms", "Validation", "Server"],
    url: "https://loan-application-khaki-six.vercel.app/",
    host: "loan-application-khaki-six.vercel.app",
    image: loanPreview.url,
  },
];

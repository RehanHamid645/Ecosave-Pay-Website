
import {Bed, LucideIcon } from "lucide-react";

export interface CaseStudiesPost {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  image: string;
  icon: LucideIcon; // Lucide icon component
  text: string; // Optional field for additional text
  markdown: string; // Optional field for markdown content
}

export const caseStudiesPosts: CaseStudiesPost[] = [
{
    title: "The Whippet Inn",
    description: "The Whippet Inn is a long standing hospitality business that needed support in managing their business energy contract.",
    date: "2025-09-15",
    author: "Riya Chowdhury",
    category: "Hospitality",
    slug: "The-Whippet-Inn",
    image: "/images/case-studies/250915-The-Whippet-Inn-logo.png",
    icon: Bed,
    markdown: "250915-TheWhippetInn",
    text: ""

} 
];

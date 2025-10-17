import { aboutmetadata } from "./metadata";
import AboutPageClient from "./AboutPageClient";

export const metadata=aboutmetadata;

export default function AboutPage(){
  return <AboutPageClient />
}
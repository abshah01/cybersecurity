import "./globals.css";import type {Metadata} from "next";import {Oswald,IBM_Plex_Sans} from "next/font/google";
import Nav from "@/components/Nav";import Footer from "@/components/Footer";import {site} from "@/lib/site";
const d=Oswald({subsets:["latin"],weight:["500","700"],variable:"--f-display"});const b=IBM_Plex_Sans({subsets:["latin"],weight:["400","500","600"],variable:"--f-body"});
export const metadata:Metadata={title:{default:`${site.name} | Cybersecurity Services`,template:`%s | ${site.name}`},description:"Cybersecurity consultancy and managed security services: assessments, penetration testing, monitoring and incident response."};
export default function R({children}:{children:React.ReactNode}){return <html lang="en" className={`${d.variable} ${b.variable}`}><body><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-signal focus:p-3 focus:text-ink">Skip to content</a><Nav/><main id="main">{children}</main><Footer/></body></html>}

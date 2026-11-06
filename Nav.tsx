"use client";
import Link from "next/link";import {useState} from "react";import {Menu,X,ChevronDown,ShieldCheck} from "lucide-react";
import {nav,site} from "@/lib/site";import {services} from "@/lib/data";
export default function Nav(){const[o,setO]=useState(false);const[d,setD]=useState(false);
return <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur"><div className="wrap flex h-16 items-center justify-between">
<Link href="/" className="flex items-center gap-2 font-display text-xl uppercase"><ShieldCheck className="text-signal" aria-hidden/>{site.name}</Link>
<nav aria-label="Main" className="hidden items-center gap-7 text-sm lg:flex">
<Link href="/">Home</Link>
<div className="relative" onMouseEnter={()=>setD(true)} onMouseLeave={()=>setD(false)}>
<button aria-expanded={d} onClick={()=>setD(!d)} className="flex items-center gap-1">Services<ChevronDown size={14}/></button>
{d&&<div className="absolute left-0 top-full w-80 border border-line bg-steel p-2">{services.map(s=><Link key={s.slug} href={`/services/${s.slug}`} className="block px-3 py-2 text-sm hover:bg-ink hover:text-signal">{s.title}</Link>)}<Link href="/services" className="block px-3 py-2 text-sm text-signal">All services</Link></div>}</div>
{nav.slice(1).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</nav>
<Link href="/contact" className="btn-p hidden lg:inline-flex">Get a Security Assessment</Link>
<button className="lg:hidden" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></div>
{o&&<div className="wrap space-y-1 border-t border-line pb-5 lg:hidden">{[["Home","/"],["Services","/services"],...nav.slice(1)].map(([l,h])=><Link key={h} href={h} onClick={()=>setO(false)} className="block py-2">{l}</Link>)}<Link href="/contact" onClick={()=>setO(false)} className="btn-p mt-2">Get a Security Assessment</Link></div>}</header>}

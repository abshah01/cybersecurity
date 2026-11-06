import Link from "next/link";import Icon from "./Icon";import {ArrowUpRight} from "lucide-react";import type {Service} from "@/lib/data";
export default function ServiceCard({s}:{s:Service}){return <Link href={`/services/${s.slug}`} className="group flex flex-col justify-between border border-line bg-steel p-6 transition-colors hover:border-signal">
<div><Icon name={s.icon} className="h-7 w-7 text-signal"/><h3 className="mt-5 text-lg font-semibold">{s.title}</h3><p className="mt-2 text-sm text-mute">{s.short}</p></div>
<span className="mt-6 flex items-center gap-1 text-sm font-semibold text-signal">Explore Service<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></span></Link>}

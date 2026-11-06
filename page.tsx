import Cta from "@/components/Cta";import {industries} from "@/lib/data";
export const metadata={title:"Industries",description:"Security services for technology, e-commerce, education, finance, healthcare and SMEs."};
export default function P(){return <><section className="wrap pt-16"><h1 className="display text-6xl md:text-9xl">Industries</h1><div className="mt-10 grid gap-4 md:grid-cols-2">{industries.map(([t,d])=><div key={t} className="border border-line bg-steel p-8"><h2 className="text-xl font-semibold">{t}</h2><p className="mt-2 text-mute">{d}</p></div>)}</div></section><Cta/></>}

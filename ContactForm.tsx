"use client";
import {useState,FormEvent} from "react";import {services} from "@/lib/data";
const F="w-full border border-line bg-ink p-3 text-sm";
export default function ContactForm(){const[err,setErr]=useState<Record<string,string>>({});const[st,setSt]=useState<"idle"|"sending"|"ok"|"fail">("idle");
async function go(e:FormEvent<HTMLFormElement>){e.preventDefault();const fd=new FormData(e.currentTarget);const v=Object.fromEntries(fd) as Record<string,string>;const x:Record<string,string>={};
if(!v.name?.trim())x.name="Enter your full name.";if(!/^\S+@\S+\.\S+$/.test(v.email||""))x.email="Enter a valid business email.";if(!v.company?.trim())x.company="Enter your company name.";
if(v.website&&!/^https?:\/\/.+\..+/.test(v.website))x.website="Start with http:// or https://";if(!v.details||v.details.trim().length<20)x.details="Describe your needs in at least 20 characters.";if(!v.consent)x.consent="Please accept the privacy notice.";
setErr(x);if(Object.keys(x).length)return;setSt("sending");
const ep=process.env.NEXT_PUBLIC_FORM_ENDPOINT;if(!ep){setSt("fail");return}try{const r=await fetch(ep,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(v)});setSt(r.ok?"ok":"fail")}catch{setSt("fail")}}
if(st==="ok")return <div role="status" className="border border-signal p-8"><h2 className="text-xl font-semibold">Request sent</h2><p className="mt-2 text-mute">Thank you. We will contact you using your preferred method.</p></div>;
const Fld=({n,l,children}:{n:string;l:string;children:React.ReactNode})=><div><label htmlFor={n} className="mb-1 block text-sm">{l}</label>{children}{err[n]&&<p role="alert" className="mt-1 text-sm text-red-400">{err[n]}</p>}</div>;
return <form onSubmit={go} noValidate className="grid gap-5">
<Fld n="name" l="Full name"><input id="name" name="name" className={F}/></Fld><Fld n="email" l="Business email"><input id="email" name="email" type="email" className={F}/></Fld>
<Fld n="company" l="Company name"><input id="company" name="company" className={F}/></Fld><Fld n="website" l="Website URL"><input id="website" name="website" className={F} placeholder="https://"/></Fld>
<Fld n="service" l="Service interested in"><select id="service" name="service" className={F}>{services.map(s=><option key={s.slug}>{s.title}</option>)}<option>Not sure yet</option></select></Fld>
<Fld n="details" l="Brief description of your security requirements"><textarea id="details" name="details" rows={5} className={F}/></Fld>
<Fld n="method" l="Preferred contact method"><select id="method" name="method" className={F}><option>Email</option><option>Phone</option><option>Video call</option></select></Fld>
<Fld n="consent" l=""><label className="flex gap-2 text-sm text-mute"><input type="checkbox" name="consent" value="yes"/>I agree my details may be used to respond to this request, as described in the Privacy Policy.</label></Fld>
{st==="fail"&&<p role="alert" className="text-red-400">We could not send your request. Try again later or email us directly.</p>}
<button className="btn-p w-fit" disabled={st==="sending"}>{st==="sending"?"Sending…":"Request Assessment"}</button></form>}

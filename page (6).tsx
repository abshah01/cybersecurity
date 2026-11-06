import ContactForm from "@/components/ContactForm";import {site} from "@/lib/site";
export const metadata={title:"Contact",description:"Request a security assessment."};
export default function P(){return <section className="wrap grid gap-12 pt-16 lg:grid-cols-[1fr_1.2fr]"><div><h1 className="display text-6xl md:text-8xl">Request an Assessment</h1><p className="mt-6 text-mute">Email: {site.email}<br/>Phone: {site.phone}<br/>Address: {site.address}</p></div><ContactForm/></section>}

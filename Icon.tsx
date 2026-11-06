import * as L from "lucide-react";
export default function Icon({name,className}:{name:string;className?:string}){const C=(L as any)[name]||L.Shield;return <C className={className} aria-hidden/>}

import {NextResponse} from "next/server";
export async function POST(req:Request){const url=process.env.CONTACT_WEBHOOK_URL;
if(!url)return NextResponse.json({error:"Not configured. Set CONTACT_WEBHOOK_URL."},{status:501});
const body=await req.json();const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
return NextResponse.json({ok:r.ok},{status:r.ok?200:502})}

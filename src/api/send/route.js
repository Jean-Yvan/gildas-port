import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from : '',
            to : '',
            subject: '',
             
        }) 
    }catch(err){

    }
}
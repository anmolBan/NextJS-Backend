import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){
    console.log("Anmol Bansal");
    return NextResponse.json({
        email: "bansal.anmol98@gmail.com",
        name: "Anmol Bansal"
    });
}

// postgresql://bansal.anmol98:T6VBEsCA2GLq@ep-young-pond-a5pvdymu.us-east-2.aws.neon.tech/medium?sslmode=require

export async function POST(req: NextRequest){
    const body = await req.json();

    return NextResponse.json({
        message: "You are signed up"
    });
}
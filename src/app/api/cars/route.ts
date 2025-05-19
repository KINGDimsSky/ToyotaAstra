import { NextRequest, NextResponse } from "next/server";
import { dataCar } from "@/lib/data";

export async function GET(request: NextRequest) {
    const data = await request.json();

    
    return NextResponse.json({message: 'succes Getting Data!'})
}
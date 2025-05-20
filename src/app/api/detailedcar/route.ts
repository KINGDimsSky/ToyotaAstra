import { NextRequest, NextResponse } from "next/server";
import { dataCar } from "@/lib/data";

export async function GET (req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('slug');

    if (id) {
        
    }


    return NextResponse.json({})
}
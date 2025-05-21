import { NextRequest, NextResponse } from "next/server";
import { dataNews } from "@/lib/data";

export default async function GET (req: NextRequest) {
    

    return NextResponse.json({status: 200, message: 'Succes Getting Data', data: []}, {status: 200})
}
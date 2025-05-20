import { NextRequest, NextResponse } from "next/server";
import { dataCar } from "@/lib/data";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const category = searchParams.get('category');

    if (!category || category === 'All'){
        return NextResponse.json({status: 200, data: dataCar}, {status: 200})
    }

    const DataFiltered = dataCar.filter((data) => (data.category === category))
    return NextResponse.json({status: 200, data: DataFiltered}, {status: 200})
}
import { NextRequest, NextResponse } from "next/server";
import { dataCar } from "@/lib/data";

export async function GET (req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('slug');

    if (id) {
        const Car = dataCar.find((data) => (data.slug === id));
        if (Car) {
          return NextResponse.json({status: 200, message: 'Succes', data: Car}, {status: 200})
        }
        return NextResponse.json({status: 400, message: 'Oops Car Not Found!', data: null}, {status: 400})
        
    }

    return NextResponse.json({status: 400, message: 'Failed To Getting Data', data: null}, {status: 400})
}
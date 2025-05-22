import { NextRequest, NextResponse } from "next/server";
import { dataNews } from "@/lib/data";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const detailed = searchParams.get('slug');

  if (detailed){
    const DetailedNews = dataNews.find((data) => data.slug === detailed);
    if (DetailedNews){
      return NextResponse.json({status: 200, message: `Succes Getting News With ${detailed} id`, data: DetailedNews}, {status: 200});
    } 
    return NextResponse.json({status: 400, message: 'Cant Find Spesific News', data: null}, {status: 400})
  }

  if (!category || category === 'All') {
    return NextResponse.json({status: 200, message: 'Success Getting All Data', data: dataNews}, { status: 200 });
  }

  const filtered = dataNews.filter((item) =>
    item.category.includes(category)
  );
  return NextResponse.json({status: 200, message: `Success Getting Data with Category: ${category}`, data: filtered}, { status: 200 });
}

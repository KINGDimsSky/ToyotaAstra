import { getBaseUrl } from "@/lib";

export const getDataCar = async (category ?: string) => {
    const data = await fetch(`${getBaseUrl()}/api/cars/?category=${category}`)

    if (!data.ok){
        throw new Error('Failed To Getting Vehicle Data!');
    }

    return await data.json();
} 

export const GetDetailedCar = async (slug?: string) => {
    try {
        const res = await fetch(`${getBaseUrl()}/api/detailedcar/?slug=${slug}`)
        const data = await res.json()

    if (!res.ok || data.status !== 200) {
        return null;
    }

      return data;
    }catch(err){
      console.error('Error fetching detailed car', err)
    };
}

export const GetByCategoryNews = async (category: string) => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/news/?category=${category}`);
    return await res.json();
  } catch (err) {
      console.error('Error fetching news by category:', err);
    return { status: 500, message: 'Fetch Error', data: [] };
  }
}

// src/services/index.service.ts

// services/index.service.ts
export async function GetNews(slug?: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const url = slug ? `${baseUrl}/api/news/?slug=${slug}` : `${baseUrl}/api/news/`;
    const res = await fetch(url, { next: { revalidate: 60 } }); // Tambahkan cache
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    return data || { data: [] }; // Pastikan selalu return objek dengan properti data
  } catch (error) {
    console.error('Error getting news:', error);
    return { data: [] }; // Struktur konsisten
  }
}


export const getDataCar = async (category ?: string) => {
    const data = await fetch(`/api/cars/?category=${category}`)

    if (!data.ok){
        throw new Error('Failed To Getting Vehicle Data!');
    }

    return await data.json();
} 

export const GetDetailedCar = async (slug?: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/detailedcar/?slug=${slug}`, {
        cache: 'no-store'
    })
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
    const res = await fetch(`http://localhost:3000/api/news/?category=${category}`, {
      cache: 'no-store'
    });
    return await res.json();
  } catch (err) {
      console.error('Error fetching news by category:', err);
    return { status: 500, message: 'Fetch Error', data: [] };
  }
}

// src/services/index.service.ts

export async function GetNews(slug?: string) {
  try {
    const url = slug ? `http://localhost:3000/api/news/?slug=${slug}` : 'http://localhost:3000/api/news/';
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch news');
    return await res.json();
  } catch (error) {
    console.error('Error Getting News Data!', error);
    return null;
  }
}


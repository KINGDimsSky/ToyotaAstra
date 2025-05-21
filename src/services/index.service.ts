export const getDataCar = async (category ?: string) => {
    const data = await fetch(`/api/cars/?category=${category}`)

    if (!data.ok){
        throw new Error('Failed To Getting Vehicle Data!');
    }

    return await data.json();
} 

export const GetDetailedCar = async (slug?: string) => {
    const data = await fetch(`http://localhost:3000/api/detailedcar/?slug=${slug}`)

    if (!data.ok){
        throw new Error('Failed To Getting Vehicle Data!');
    }

    return await data.json();
}
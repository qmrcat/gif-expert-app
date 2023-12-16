
export const getGifs = async (categoria) => {

    const url = new URL(`https://api.giphy.com/v1/gifs/search?api_key=UEAagjLyNBs0hjHDO5Nh0wgWUSEMMurg&q=${ categoria }&limit=5`);
    
    const resp = await fetch( url );
    const { data } = await resp.json()
    
    const gift = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    
    return gift;
}
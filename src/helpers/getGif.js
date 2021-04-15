export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/trending?q=${encodeURI(category)}&limit=10&api_key=sYJH6kUjja5QGjUJP3THvEWg1UxhoipJ`;
    
    const resp = await fetch(url);
    
    const {data} = await resp.json();

    const gif = data.map (img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    
    return gif;
  }
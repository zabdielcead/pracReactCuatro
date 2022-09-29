export const getGifs = async (categorys) => {
    const url  = `https://api.giphy.com/v1/gifs/search?api_key=zESB2NGXHXVfkpN2cYzCKJl3ADc80NO2&q=${categorys}&limit=10`;
    const resp = await fetch(url);

    const { data = [] } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium
        }
    });

    console.log('respuestagif', gifs);
    return gifs;
  }
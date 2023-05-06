
export const getGifs = async(category) => {

    // Ver en postman esta misma peticion para ver los parametros del url mejor
    // Ver tambien en la pagina oficial, la documentacion https://developers.giphy.com/docs/api/endpoint#search
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=lzkj9sxJUc5oxbFw4vlB31jMUsd1Z0AV`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( (img, i) => {
        return {
            id: img.id,
            title: img.title,
            // ? es para preguntar si viene el campo images
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;

}
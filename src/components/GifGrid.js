
import React, { Fragment, useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

// api_key = lzkj9sxJUc5oxbFw4vlB31jMUsd1Z0AV

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    // use Effect recibe dos parametros:
    // -El primero es una funcion a ejecutarde estas dependecias depende que se vuelva a ejecutar la primera funcion
    // -El segundo una lista de dependencias, 
    // En este caso cunado el segundo argumento es [], se ejecuta la funcion una sola vez al inicio
    useEffect( () => {

        getGifs();

    }, []);

    const getGifs = async() => {

        // Ver en postman esta misma peticion para ver los parametros del url mejor
        // Ver tambien en la pagina oficial, la documentacion https://developers.giphy.com/docs/api/endpoint#search
        const url = "https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=lzkj9sxJUc5oxbFw4vlB31jMUsd1Z0AV"
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( (img, i) => {
            return {
                id: img.id,
                title: img.title,
                // ? es para preguntar si viene el campo images
                url: img.images?.original.url
            }
        });
        
        console.log(gifs);
        setImages(gifs);

    }

    //getGifs();

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'> 
                <ol>
                    {
                        images.map( (img, i) => {
                            return (
                                <GifGridItem
                                    key={img.id}
                                    {...img}
                                />
                            )
                        }) 
                    }
                </ol>
            </div>
        </>
    )
}


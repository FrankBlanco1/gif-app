
import React, { Fragment, useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

// api_key = lzkj9sxJUc5oxbFw4vlB31jMUsd1Z0AV

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    // use Effect recibe dos parametros:
    // -El primero es una funcion a ejecutarde estas dependecias depende que se vuelva a ejecutar la primera funcion
    // -El segundo una lista de dependencias, 
    // En este caso cunado el segundo argumento es [], se ejecuta la funcion una sola vez al inicio
    useEffect( () => {

        getGifs(category).then( (images) => {
            setImages(images);
        });

    }, [category]);

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


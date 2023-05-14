
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

// api_key = lzkj9sxJUc5oxbFw4vlB31jMUsd1Z0AV

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <div data-testid = 'GifGrid'>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

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
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

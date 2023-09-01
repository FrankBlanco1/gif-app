import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({title, url}) => {

    return (
        // Aqui le puse data-testid para poder preguntar por este elemento desde las pruebas
        <div className='card ' data-testid='GifGridItem'>
            <img 
                src={url} 
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

import React, { Fragment } from 'react'

export const GifGridItem = ({id, title, url}) => {

    console.log(id, title, url)

    return (
        <Fragment>
            <img 
                src={url} 
                alt={title}
            />
            <p>{title}</p>
        </Fragment>
    )
}

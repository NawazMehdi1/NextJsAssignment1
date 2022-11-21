import React from 'react'

const Image = (props) => {
    const {src, alt, width, height} = props          
    return (
        <>
            <img src={src} width={width} height={height} alt={alt} />
        </>
    )
}

export default Image
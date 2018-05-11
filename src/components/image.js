import React from 'react'

const Image = ({ styles, source, alt }) => (
    <div className={ styles }>
        <img src={ source } alt={ alt }/>
    </div>
)

export default Image
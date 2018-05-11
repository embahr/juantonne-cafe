import React from 'react'

const Quote = ({ styles, quote, cite }) => (
    <div className={ styles }>
        <blockquote>
            { quote }
            <cite>
                { cite }
            </cite>
        </blockquote>
    </div>
)

export default Quote
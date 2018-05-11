import React from 'react'

const SectionHeader = ({ styles, heading, subHeading, paragraph }) => (
    <div className={ styles }>
        <h2> { heading } </h2>
        <h4> { subHeading } </h4>
        <p> { paragraph } </p>
      </div>
)

export default SectionHeader
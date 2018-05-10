import React from 'react'

const Test = ({ heading, subHeading, paragraph }) => (

    <div className="info info__text">
        <h2> { heading } </h2>
        <h4> { subHeading } </h4>
        <p> { paragraph } </p>
      </div>

)

export default Test
import React from 'react'

function CardContent({title,percent,num,per}) {
    return (
        <div>
            <h1>{title}</h1>
            <h6>{percent} % <sup>{num}</sup></h6>
            <div>
                <h6>{per}%</h6>
                <p>cash back</p>
            </div>
        </div>
    )
}

export default CardContent

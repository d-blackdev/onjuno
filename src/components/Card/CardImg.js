import React from 'react'
import Img from '../../Image/images.jpg'
import styled from 'styled-components'

function CardImg() {
    return (
        <Imgs className="position-absolute">
            <img src={Img} alt="img"/>
        </Imgs>
    )
}

export default CardImg

const Imgs = styled.div`
margin-top: -70px;
margin-left: 50px
`
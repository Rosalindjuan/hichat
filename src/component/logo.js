import React from 'react'
import styled from 'styled-components'

function Logo () {
    return (
        <div>
            <Img src={require("../images/logo.jpg")} alt=""/>
        </div>
    )
}



const Img = styled.img`
    width: 200px;
    margin: 0 auto;
`





export default Logo
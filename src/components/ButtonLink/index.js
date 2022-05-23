import React from 'react'
import { ButtonLinkWrapp, Button } from './ButtonLink.styled'

const ButtonLink = (props) => {
    return (
        <ButtonLinkWrapp>
            <Button to={props.link}>{props.children}</Button>
        </ButtonLinkWrapp>
    )
}

export default ButtonLink
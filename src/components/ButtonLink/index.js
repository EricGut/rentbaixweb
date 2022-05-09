import React from 'react'
import { ButtonLinkWrapp, Button } from './ButtonLink.styled'

const ButtonLink = (props, link) => {
    return (
        <ButtonLinkWrapp>
            <Button to={link}>{props.children}</Button>
        </ButtonLinkWrapp>
    )
}

export default ButtonLink
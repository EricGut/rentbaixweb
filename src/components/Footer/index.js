import React from 'react'
import { FooterBlock, FooterContent, FooterCopy, FooterCopyText, FooterPolitics, FooterPoliticsLinks } from './Footer.styled'
const Footer = () => {
    return (
        <FooterBlock>
            <FooterContent>
                <FooterPolitics>
                    <FooterPoliticsLinks to="#">Aviso legal | </FooterPoliticsLinks>
                    <FooterPoliticsLinks to="#">Política de privacidad | </FooterPoliticsLinks>
                    <FooterPoliticsLinks to="#">Política de cookies | </FooterPoliticsLinks>
                    <FooterPoliticsLinks to="#">Política de redes sociales</FooterPoliticsLinks>
                </FooterPolitics>
                <FooterCopy>
                    <FooterCopyText>
                        Rentbaix©2022
                    </FooterCopyText>
                </FooterCopy>
            </FooterContent>
        </FooterBlock>
    )
}

export default Footer
import React from 'react'
import Container from '../../Container'
import { HeroHomeContent, HeroHomeMainBlock, HeroHomeMainText, HeroHomeMainTextBold, HeroHomeMainTextRed, HeroHomeSection } from './HeroHome.styled'
import BannerHome from '../BannerHome'
// banner offers
import offerRv from '../../../images/ofertas/bannerrv.jpg'

const HeroHome = () => {

    return (
        <HeroHomeSection>
            <Container>
                <HeroHomeContent>
                    <BannerHome image={offerRv} />
                    <HeroHomeMainBlock>
                        <HeroHomeMainText>¿estas buscando un <HeroHomeMainTextBold>vehículo de <HeroHomeMainTextRed>alquiler</HeroHomeMainTextRed>?</HeroHomeMainTextBold></HeroHomeMainText>
                    </HeroHomeMainBlock>
                </HeroHomeContent>
            </Container>
        </HeroHomeSection>
    )
}

export default HeroHome
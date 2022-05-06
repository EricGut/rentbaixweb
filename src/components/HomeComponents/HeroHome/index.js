import React from 'react'
import Container from '../../Container'
import { HeroHomeCar, HeroHomeContent, HeroHomeMainBlock, HeroHomeMainText, HeroHomeMainTextBold, HeroHomeMainTextRed, HeroHomeSection } from './HeroHome.styled'

const HeroHome = () => {

    return (
        <HeroHomeSection>
            <Container>
                <HeroHomeContent>
                    <HeroHomeMainBlock>
                        <HeroHomeMainText>¿estas buscando un <HeroHomeMainTextBold>vehículo de <HeroHomeMainTextRed>alquiler</HeroHomeMainTextRed>?</HeroHomeMainTextBold></HeroHomeMainText>
                    </HeroHomeMainBlock>
                    <HeroHomeCar />
                </HeroHomeContent>
            </Container>
        </HeroHomeSection>
    )
}

export default HeroHome
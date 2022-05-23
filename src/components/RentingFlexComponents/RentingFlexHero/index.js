import React from 'react'
import { RentingFlexBanner, RentingFlexBannerContent, RentingFlexBannerInfo, RentingFlexBannerInfoContent, RentingFlexBannerInfoSubTitle, RentingFlexBannerInfoText, RentingFlexBannerInfoTitle, RentingFlexBannerTitle } from './RentingFlexHero.styled'
import Container from '../../Container'


const RentingFlexHero = () => {
    return (
        <>
            <RentingFlexBanner>
                <Container>
                    <RentingFlexBannerContent>
                        <RentingFlexBannerTitle>
                            Descubre el renting flexible
                        </RentingFlexBannerTitle>
                    </RentingFlexBannerContent>
                </Container>
            </RentingFlexBanner>
            <RentingFlexBannerInfo>
                <Container>
                    <RentingFlexBannerInfoContent>
                        <RentingFlexBannerInfoTitle>
                            ¿No tienes claro el tiempo que vas a necesitar un vehículo?
                        </RentingFlexBannerInfoTitle>
                        <RentingFlexBannerInfoSubTitle>
                            El Renting Flexible es tu solución
                        </RentingFlexBannerInfoSubTitle>
                        <RentingFlexBannerInfoText>
                            El Renting Flexible está pensado para aquellos autonomos, empresas que no pueden comprometerse a un Renting de largo plazo o que quieren tener una flota siempre adaptada a sus necesidades. Además, el renting flexible funciona con una cuota fija mensual que incluye todos los servicios, por lo que podrás decir adiós a los imprevistos.
                        </RentingFlexBannerInfoText>
                    </RentingFlexBannerInfoContent>
                </Container>
            </RentingFlexBannerInfo>
        </>
    )
}

export default RentingFlexHero
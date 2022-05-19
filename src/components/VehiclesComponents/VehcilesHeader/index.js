import React from 'react'
import Container from '../../Container'
import { VehiclesHeaderBanner, VehiclesHeaderBannerContent, VehiclesHeaderSubTitle, VehiclesHeaderTitle } from './VehiclesHeader.styled'

const VehiclesHeader = ({ title, bannerImg }) => {
    return (
        <VehiclesHeaderBanner img={bannerImg}>
            <Container>
                <VehiclesHeaderBannerContent>
                    <VehiclesHeaderSubTitle>
                        Nuestra Flota
                    </VehiclesHeaderSubTitle>
                    <VehiclesHeaderTitle>
                        {title}
                    </VehiclesHeaderTitle>

                </VehiclesHeaderBannerContent>
            </Container>
        </VehiclesHeaderBanner>
    )
}

export default VehiclesHeader
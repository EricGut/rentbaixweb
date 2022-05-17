import React from 'react'
import Container from '../../Container'
import { VehiclesHeaderBanner, VehiclesHeaderBannerContent, VehiclesHeaderSubTitle, VehiclesHeaderTitle } from './VehiclesHeader.styled'
const VehiclesHeader = ({ info }) => {
    // Set Title Header
    let vehiclesInfoTitle = null;
    let vehiclesInfoImg = null;
    info.map(data => {
        return (
            vehiclesInfoTitle = data.name,
            vehiclesInfoImg = data.img
        )
    })
    return (
        <VehiclesHeaderBanner img={vehiclesInfoImg}>
            <Container>
                <VehiclesHeaderBannerContent>
                    <VehiclesHeaderSubTitle>
                        Nuestra Flota
                    </VehiclesHeaderSubTitle>
                    <VehiclesHeaderTitle>
                        {vehiclesInfoTitle}
                    </VehiclesHeaderTitle>

                </VehiclesHeaderBannerContent>
            </Container>
        </VehiclesHeaderBanner>
    )
}

export default VehiclesHeader
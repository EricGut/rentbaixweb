import React from 'react'
import Container from '../../Container'
import { VehiclesHeaderSection, VehiclesHeaderSectionContent, VehiclesHeaderSubTitle, VehiclesHeaderTitle } from './VehiclesHeader.styled'
const VehiclesHeader = ({ info }) => {
    // Set Title Header
    let vehiclesInfoTitle = null;
    // let vehiclesInfoImg = null;
    info.map(data => {
        return (
            vehiclesInfoTitle = data.name
            // vehiclesInfoImg = data.img
        )
    })
    return (
        <VehiclesHeaderSection>
            <Container>
                <VehiclesHeaderSectionContent>
                    <VehiclesHeaderSubTitle>
                        Nuestra Flota
                    </VehiclesHeaderSubTitle>
                    <VehiclesHeaderTitle>
                        {vehiclesInfoTitle}
                    </VehiclesHeaderTitle>

                </VehiclesHeaderSectionContent>
            </Container>
        </VehiclesHeaderSection>
    )
}

export default VehiclesHeader
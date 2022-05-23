import React from 'react'
import Container from '../../Container'
import { VehicleCarIconsSection, VehicleCarIconsSectionContent, VehicleIconsGrid, VehicleIconsGridItem, VehicleIconsGridItemImg, VehicleIconsGridItemText } from './VehicleCarIcons.styled'
// Icons
import mini from '../../../images/icons/carIcons/mini.png'
import mediano from '../../../images/icons/carIcons/mediano.png'
import berlina from '../../../images/icons/carIcons/berlina.png'
import plazas6 from '../../../images/icons/carIcons/6 Plazas.png'
import terreno from '../../../images/icons/carIcons/4x4.png'
import familiar from '../../../images/icons/carIcons/Familiar.png'
import suv from '../../../images/icons/carIcons/SUV.png'


const VehicleCarIcons = () => {
    const carIcons = [
        {
            id: 1,
            img: mini,
            name: 'Mini'
        },
        {
            id: 2,
            img: mediano,
            name: 'Mediano'
        },
        {
            id: 3,
            img: berlina,
            name: 'Berlina'
        },
        {
            id: 4,
            img: suv,
            name: 'SUV'
        },
        {
            id: 5,
            img: plazas6,
            name: '6 Plazas'
        },
        {
            id: 6,
            img: terreno,
            name: '4x4'
        },
        {
            id: 7,
            img: familiar,
            name: 'Familiar'
        },
    ]
    return (
        <VehicleCarIconsSection>
            <Container>
                <VehicleCarIconsSectionContent>
                    <VehicleIconsGrid>
                        {carIcons.map(item => {
                            return (
                                <VehicleIconsGridItem key={item.id}>
                                    <VehicleIconsGridItemImg src={item.img} loading="lazy" />
                                    <VehicleIconsGridItemText>
                                        {item.name}
                                    </VehicleIconsGridItemText>
                                </VehicleIconsGridItem>
                            )
                        })}
                    </VehicleIconsGrid>
                </VehicleCarIconsSectionContent>
            </Container>
        </VehicleCarIconsSection>
    )
}

export default VehicleCarIcons
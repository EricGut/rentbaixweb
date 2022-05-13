import React from 'react'
import ButtonLink from '../../ButtonLink'
import Container from '../../Container'
import { MainTitle } from '../../SectionsTitle'
import { VehiclesCardImg, VehiclesCardLinkWrapp, VehiclesCardLink, VehiclesCardTitle, VehiclesGridCard, VehiclesHomeContent, VehiclesHomeGrid, VehiclesHomeSection, VehiclesHomeTitleLink } from './VehiclesHome.styled'
// vehicles images
import carCard from '../../../images/vehicles/car.png'
import rvCard from '../../../images/vehicles/rv.png'
import furgoCard from '../../../images/vehicles/furgo.png'
import vespaCard from '../../../images/vehicles/vespa.png'
const VehiclesHome = () => {
    const vehicles = [
        {
            id: 1,
            title: 'coches',
            img: carCard
        },
        {
            id: 2,
            title: 'autocaravanas',
            img: rvCard
        },
        {
            id: 3,
            title: 'motos',
            img: vespaCard
        },
        {
            id: 4,
            title: 'furgonetas',
            img: furgoCard
        },
    ]
    return (
        <VehiclesHomeSection>
            <Container>
                <VehiclesHomeContent>
                    <VehiclesHomeTitleLink>
                        <MainTitle>nuestra flota</MainTitle>
                        <ButtonLink link='/'>Reserva ahora</ButtonLink>
                    </VehiclesHomeTitleLink>
                    <VehiclesHomeGrid>
                        {
                            vehicles.map(item => {
                                return (
                                    <VehiclesGridCard key={item.id}>
                                        <VehiclesCardTitle>{item.title}</VehiclesCardTitle>
                                        <VehiclesCardImg src={item.img} />
                                        <VehiclesCardLinkWrapp>
                                            <VehiclesCardLink to="#">descubre más</VehiclesCardLink>
                                        </VehiclesCardLinkWrapp>
                                    </VehiclesGridCard>
                                )
                            })
                        }
                    </VehiclesHomeGrid>
                </VehiclesHomeContent>
            </Container>
        </VehiclesHomeSection>
    )
}

export default VehiclesHome
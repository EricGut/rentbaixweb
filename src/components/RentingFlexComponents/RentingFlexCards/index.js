import React from 'react'
import Container from '../../Container'
import { RentingFlexCardsGrid, RentingFlexCardsGridCard, RentingFlexCardsGridCardBody, RentingFlexCardsGridCardBodyInfo, RentingFlexCardsGridCardBodyInfoItems, RentingFlexCardsGridCardHeader, RentingFlexCardsGridCardHeaderSubTitle, RentingFlexCardsGridCardHeaderTitle, RentingFlexCardsSection, RentingFlexCardsSectionContent } from './RentingFlexCards.styled'

const RentingFlexCards = () => {

    const cardsInfo = [
        {
            id: 1,
            title: 'Renting',
            subtitle: 'Flexiblidad total',
            infoList: [
                'Desde 1 mes hasta cualquier plazo',
                'Sin permanencia ni compromisos',
                'Vehículos de Flota RentBaix'
            ]
        },
        {
            id: 2,
            title: 'Pack',
            subtitle: '+12',
            infoList: [
                'A partir de 12 meses',
                'Con plazo compromiso minimo',
                'Vehículos de Flota RentBaix o vehículo nuevo'
            ]
        },
        {
            id: 3,
            title: 'Pack',
            subtitle: '+18',
            infoList: [
                'A partir de 18 mes',
                'Con plazo compromiso minimo',
                'Vehículo nuevo',
                'Prorrogable hasta 24 meses',
            ]
        },
    ]
    return (
        <RentingFlexCardsSection>
            <Container>
                <RentingFlexCardsSectionContent>
                    <RentingFlexCardsGrid>
                        {cardsInfo.map(info => {
                            return (
                                <RentingFlexCardsGridCard key={info.id}>
                                    <RentingFlexCardsGridCardHeader>
                                        <RentingFlexCardsGridCardHeaderTitle>{info.title}</RentingFlexCardsGridCardHeaderTitle>
                                        <RentingFlexCardsGridCardHeaderSubTitle>{info.subtitle}</RentingFlexCardsGridCardHeaderSubTitle>
                                    </RentingFlexCardsGridCardHeader>
                                    <RentingFlexCardsGridCardBody>
                                        <RentingFlexCardsGridCardBodyInfo>
                                            {info.infoList.map((item, index) => {
                                                return (
                                                    <RentingFlexCardsGridCardBodyInfoItems key={index}>{item}</RentingFlexCardsGridCardBodyInfoItems>
                                                )
                                            })}

                                        </RentingFlexCardsGridCardBodyInfo>
                                    </RentingFlexCardsGridCardBody>
                                </RentingFlexCardsGridCard>
                            )
                        })}
                    </RentingFlexCardsGrid>
                </RentingFlexCardsSectionContent>
            </Container>
        </RentingFlexCardsSection>
    )
}

export default RentingFlexCards
import React from 'react'
import { MainTitle } from '../../SectionsTitle'
import { CardDescription, CardIcon, CardText, CardTitle, ServicesDisplayGrid, ServicesDisplayGridCard, ServicesHomeSection, ServicesHomeSectionContent } from './ServicesHome.styled'
import Container from '../../Container'
// cards icons
import renting from '../../../images/icons/servicesCards/renting.png'
import dias from '../../../images/icons/servicesCards/dias.png'
import meses from '../../../images/icons/servicesCards/meses.png'
// Button
import ButtonLink from '../../ButtonLink'

const ServicesHome = () => {
    const cardsInfo = [

        {
            id: 1,
            icon: renting,
            title: 'renting flexible',
            description: 'Lorem ipsum dolorsitamet, consecteturad ipiscingelit.Praesenteu lobortislectus. Inhachabitasseplateadictumst. Morbiaterosindolor',
            btn: true
        },

        {
            id: 2,
            icon: meses,
            title: 'alquiler por meses',
            description: 'Lorem ipsum dolorsitamet, consecteturad ipiscingelit.Praesenteu lobortislectus. Inhachabitasseplateadictumst. Morbiaterosindolor',
            btn: false
        },

        {
            id: 3,
            icon: dias,
            title: 'alquiler por dias',
            description: 'Lorem ipsum dolorsitamet, consecteturad ipiscingelit.Praesenteu lobortislectus. Inhachabitasseplateadictumst. Morbiaterosindolor',
            btn: false
        },

    ]

    return (
        <ServicesHomeSection>
            <Container>
                <ServicesHomeSectionContent>
                    <MainTitle>nuestros servicios</MainTitle>
                    <ServicesDisplayGrid>
                        {
                            cardsInfo.map(item => {
                                return (
                                    <ServicesDisplayGridCard key={item.id}>
                                        <CardIcon src={item.icon} />
                                        <CardText>
                                            <CardTitle>{item.title}</CardTitle>
                                            <CardDescription>
                                                {item.description}
                                            </CardDescription>
                                            {item.btn && <ButtonLink link='#'>descubre más</ButtonLink>}
                                        </CardText>
                                    </ServicesDisplayGridCard>
                                )
                            })
                        }
                    </ServicesDisplayGrid>
                </ServicesHomeSectionContent>
            </Container>
        </ServicesHomeSection>
    )
}

export default ServicesHome
import React from 'react'
import { ContactFlexInfoSchedule, ContactFlexInfoScheduleText, ContactFlexInfoTextIcon, ContactFlexInfoTextLink, ContactFlexInfoTextWrapp, ContactHomeContactFlex, ContactHomeContactFlexInfo, ContactHomeContactFlexMap, ContactHomeSection, ContactHomeSectionContent } from './ContactHome.styled'
import Container from '../../Container'
import { MainTitleWhite } from '../../SectionsTitle'
// contact icons
import locationIcon from '../../../images/icons/contact/location-outline.png'
import callIcon from '../../../images/icons/contact/call-outline.png'
import mailIcon from '../../../images/icons/contact/mail-outline.png'

const ContactHome = () => {
    return (
        <ContactHomeSection>
            <Container>
                <ContactHomeSectionContent>
                    <ContactHomeContactFlex>
                        <ContactHomeContactFlexInfo>
                            <MainTitleWhite>contactanos</MainTitleWhite>
                            <ContactFlexInfoTextWrapp>
                                <ContactFlexInfoTextIcon src={locationIcon} />
                                <ContactFlexInfoTextLink target="_blank" href="https://www.google.com/maps/place/Rentbaix/@41.3255712,2.0342188,15z/data=!4m2!3m1!1s0x0:0x347eac69ba5e86f0?sa=X&ved=2ahUKEwj-1_3w09T3AhXIy4UKHTQYB9MQ_BJ6BAhHEAU">
                                    Carretera de la Santa Creu de Calafell,95,
                                    08830 Sant Boi de Llobregat,
                                    Barcelona
                                </ContactFlexInfoTextLink>
                            </ContactFlexInfoTextWrapp>
                            <ContactFlexInfoTextWrapp>
                                <ContactFlexInfoTextIcon src={callIcon} />
                                <ContactFlexInfoTextLink href="tel:+34937617402">
                                    937 61 74 02
                                </ContactFlexInfoTextLink>
                            </ContactFlexInfoTextWrapp>
                            <ContactFlexInfoTextWrapp>
                                <ContactFlexInfoTextIcon src={mailIcon} />
                                <ContactFlexInfoTextLink href="mailto:hola@rentbaix.com">
                                    hola@rentbaix.com
                                </ContactFlexInfoTextLink>
                            </ContactFlexInfoTextWrapp>
                            <ContactFlexInfoSchedule>
                                Horarios
                            </ContactFlexInfoSchedule>
                            <ContactFlexInfoScheduleText>
                                Lunes-Viernes: 9:00 a 13:00 y 16:00 a 18:30<br />
                                Sábado: Cerrado
                            </ContactFlexInfoScheduleText>
                        </ContactHomeContactFlexInfo>
                        <ContactHomeContactFlexMap>
                            <iframe title='map' width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=rentbaix+(rentbaix)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">gps watches</a></iframe>
                        </ContactHomeContactFlexMap>
                    </ContactHomeContactFlex>
                </ContactHomeSectionContent>
            </Container>
        </ContactHomeSection>
    )
}

export default ContactHome
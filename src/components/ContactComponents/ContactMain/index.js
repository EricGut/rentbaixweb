import React from 'react'
import Container from '../../Container'
import { MainTitle } from '../../SectionsTitle'
import { ContactFlexInfoSchedule, ContactFlexInfoTextIcon, ContactFlexInfoTextLink, ContactFlexInfoTextWrapp, ContactMainSection, ContactMainSectionContent, ContactMainSectionContentForm, ContactMainSectionContentFormTitle, ContactMainSectionContentFormWrapper, ContactMainSectionContentInfo, ContactMainSectionContentInfoWrapper, ContactMainSectionContentMap } from './ContactMain.styled'
// contact icons
import locationIcon from '../../../images/icons/contact/location-outline.png'
import callIcon from '../../../images/icons/contact/call-outline.png'
import mailIcon from '../../../images/icons/contact/mail-outline.png'
import FormComponent from '../../FormComponent'

const ContactMain = () => {
    return (
        <ContactMainSection>
            <Container>
                <ContactMainSectionContent>
                    <MainTitle>¿Donde estamos?</MainTitle>
                    <ContactMainSectionContentInfoWrapper>
                        <ContactMainSectionContentInfo>
                            <ContactFlexInfoTextWrapp>
                                <ContactFlexInfoTextIcon src={locationIcon} />
                                <ContactFlexInfoTextLink target="_blank" href="https://www.google.com/maps/place/Rentbaix/@41.3255712,2.0342188,15z/data=!4m2!3m1!1s0x0:0x347eac69ba5e86f0?sa=X&ved=2ahUKEwj-1_3w09T3AhXIy4UKHTQYB9MQ_BJ6BAhHEAU">
                                    Carretera de la Santa Creu de Calafell, 95,<br />
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
                                Lunes-Viernes: 9:00 a 13:00 y 16:00 a 18:30<br />
                                Sábado: Cerrado
                            </ContactFlexInfoSchedule>
                        </ContactMainSectionContentInfo>
                        <ContactMainSectionContentMap>
                            <iframe title='map' width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=rentbaix+(rentbaix)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">gps watches</a></iframe>
                        </ContactMainSectionContentMap>
                    </ContactMainSectionContentInfoWrapper>
                    <ContactMainSectionContentForm>
                        <ContactMainSectionContentFormTitle>Pregúntanos cualquier duda</ContactMainSectionContentFormTitle>
                        <ContactMainSectionContentFormWrapper>
                            <FormComponent />
                        </ContactMainSectionContentFormWrapper>
                    </ContactMainSectionContentForm>
                </ContactMainSectionContent>
            </Container>
        </ContactMainSection>
    )
}

export default ContactMain
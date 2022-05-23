import React from 'react'
import Container from '../../Container'
import { RentingFlexContactFormWrapper, RentingFlexContactSection, RentingFlexContactSectionContent } from './RentingFlexContact.styled'
import FormComponent from '../../FormComponent'
import { MainTitle } from '../../SectionsTitle'
const RentingFlexContact = () => {
    return (
        <RentingFlexContactSection>
            <Container>
                <RentingFlexContactSectionContent>
                    <MainTitle>Contactanos</MainTitle>
                    <RentingFlexContactFormWrapper>
                        <FormComponent />
                    </RentingFlexContactFormWrapper>
                </RentingFlexContactSectionContent>
            </Container>
        </RentingFlexContactSection>
    )
}

export default RentingFlexContact
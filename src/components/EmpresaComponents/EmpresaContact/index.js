import React from 'react'
import Container from '../../Container'
import FormComponent from '../../FormComponent'
import { MainTitle } from '../../SectionsTitle'
import { EmpresaContactFormWrapper, EmpresaContactSection, EmpresaContactSectionContent } from './EmpresaContact.styled'
const EmpresaContact = () => {
    return (
        <EmpresaContactSection>
            <Container>
                <EmpresaContactSectionContent>
                    <MainTitle>Contactanos</MainTitle>
                    <EmpresaContactFormWrapper>
                        <FormComponent />
                    </EmpresaContactFormWrapper>
                </EmpresaContactSectionContent>
            </Container>
        </EmpresaContactSection>
    )
}

export default EmpresaContact
import React from 'react'
import Container from '../../Container'
import { EmpresaBanner, EmpresaBannerContent, EmpresaBannerInfo, EmpresaBannerInfoContent, EmpresaBannerInfoSubTitle, EmpresaBannerInfoText, EmpresaBannerInfoTitle, EmpresaBannerTitle } from './EmpresaHero.styled'


const EmpresaHero = () => {
    return (
        <>
            <EmpresaBanner>
                <Container>
                    <EmpresaBannerContent>
                        <EmpresaBannerTitle>
                            rentbaix para empresas
                        </EmpresaBannerTitle>
                    </EmpresaBannerContent>
                </Container>
            </EmpresaBanner>
            <EmpresaBannerInfo>
                <Container>
                    <EmpresaBannerInfoContent>
                        <EmpresaBannerInfoTitle>
                            Rentbaix empresas
                        </EmpresaBannerInfoTitle>
                        <EmpresaBannerInfoSubTitle>
                            Especializados en empresas
                        </EmpresaBannerInfoSubTitle>
                        <EmpresaBannerInfoText>
                            Estamos especializados en dar servicio y soluciones a empresas, ofrecemos flexibilidad en el período contratado según la necesidad del momento, permitiendo ampliar su flota o minimizarla fácilmente y sin penalizaciones.
                        </EmpresaBannerInfoText>
                    </EmpresaBannerInfoContent>
                </Container>
            </EmpresaBannerInfo>
        </>
    )
}

export default EmpresaHero
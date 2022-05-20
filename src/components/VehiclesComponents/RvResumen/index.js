import React from 'react'
import Container from '../../Container'
import { MainTitle } from '../../SectionsTitle'
import { InfoText, RvResumenContent, Tablebody, RvResumenSection, RvResumenTableWrapp, RvResumenTableWrappTable, RvTableHead, Tabletd, Tableth, Tabletr } from './RvResumen.styled'

const RvResumen = () => {
    return (
        <RvResumenSection>
            <Container>
                <RvResumenContent>
                    <MainTitle>Resumen</MainTitle>
                    <RvResumenTableWrapp>
                        <RvResumenTableWrappTable>
                            <RvTableHead>
                                <Tabletr>
                                    <Tableth></Tableth>
                                    <Tableth>VANTANA K60 FT PREMIUM</Tableth>
                                    <Tableth>RIMOR KAYAK 7</Tableth>
                                    <Tableth>ACROSS 695 LD</Tableth>
                                    <Tableth>OPTIMA T70 HGQ DE LUXE</Tableth>
                                    <Tableth>RIMOR SEAL 5</Tableth>
                                    <Tableth>RIMOR SEAL 9</Tableth>
                                </Tabletr>
                            </RvTableHead>
                            <Tablebody>
                                <Tabletr>
                                    <Tabletd>Plazas viajar</Tabletd><Tabletd>4</Tabletd><Tabletd>6</Tabletd><Tabletd>7</Tabletd><Tabletd>4</Tabletd><Tabletd>6</Tabletd><Tabletd>7</Tabletd></Tabletr>
                                <Tabletr>
                                    <Tabletd>Plazas dormir</Tabletd><Tabletd>2</Tabletd><Tabletd>6</Tabletd><Tabletd>6+1</Tabletd><Tabletd>4</Tabletd><Tabletd>6</Tabletd><Tabletd>6+1</Tabletd></Tabletr>
                                <Tabletr>
                                    <Tabletd>Motorización</Tabletd><Tabletd>Fiat 130 CV</Tabletd><Tabletd>Renault 145 CV</Tabletd><Tabletd>Renault 145 CV</Tabletd><Tabletd>Fiat multijet 15</Tabletd><Tabletd>Fiat 120 CV</Tabletd><Tabletd>Fiat 120 CV</Tabletd></Tabletr>
                                <Tabletr>
                                    <Tabletd>Frigorifico</Tabletd><Tabletd>Pequeño</Tabletd><Tabletd>Grande</Tabletd><Tabletd>Grande</Tabletd><Tabletd>Grande</Tabletd><Tabletd>Pequeño</Tabletd><Tabletd>Pequeño</Tabletd></Tabletr>
                                <Tabletr>
                                    <Tabletd>Cocina	</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd></Tabletr>
                                <Tabletr>
                                    <Tabletd>Calefacción</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd><Tabletd>Si</Tabletd></Tabletr>
                            </Tablebody>
                        </RvResumenTableWrappTable>
                    </RvResumenTableWrapp>
                    <InfoText>
                        Nuestros vehículos están asegurados para circular por los paises de la CEE. * Si desea viajar a algún otro país no Comunitario deberá consultar si es posible y sus condiciones. CONDICIONES: Todos los precios mostrados están sujetos a un mínimo de días que varia en función de la temporada, consúltanos. IVA 21% INCLUIDO - GASTOS FIJOS DE SALIDA 88€ - MINIMO 3 DÍAS, 800 KM INCLUIDOS RESTO 0,28€/ km - mÁS DE 4 DÍAS KM ILIMITADO - SEGURO A TODO RIESGO FRANQUICIA DE 800€ - FIANZA 800€ CON TARJETA DE CRÉDITO (NO SE ACEPTAN TARJETAS DE DEBITO, AMEX) - ASISTENCIA 24 HORAS - EDAD MINIMA 23 AÑOS Y 2 DE CARNET DE CONDUCIR.
                    </InfoText>
                </RvResumenContent>
            </Container>
        </RvResumenSection>
    )
}

export default RvResumen
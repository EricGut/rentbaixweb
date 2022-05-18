import React, { useState } from 'react'
import Container from '../../Container'
import { VehicleCardsGrid, VehicleCardsItem, VehicleCardsItemBack, VehicleCardsItemBackInfo, VehicleCardsItemBackInfoItem, VehicleCardsItemBackInfoItemRed, VehicleCardsItemFront, VehicleCardsItemFrontImage, VehicleCardsItemFrontSubTitle, VehicleCardsItemFrontTitle, VehicleCardsItemInfoBtn, VehicleCardsSection, VehicleCardsSectionContent } from './VehicleCard.styled'

const VehicleCards = ({ info }) => {
  const [isActive, setActive] = useState(false);
  const toggleCard = () => {
    setActive(!isActive)
  }
  return (
    <VehicleCardsSection>
      <Container>
        <VehicleCardsSectionContent>
          <VehicleCardsGrid>
            {info.map(frontData => {
              const { info } = frontData
              return (
                <VehicleCardsItem key={frontData.id}>
                  <VehicleCardsItemFront>
                    <VehicleCardsItemFrontTitle>
                      {info.vehicleName}
                    </VehicleCardsItemFrontTitle>
                    <VehicleCardsItemFrontSubTitle>
                      {info.subtitle}
                    </VehicleCardsItemFrontSubTitle>
                    <VehicleCardsItemFrontImage src={info.vehicleImg} />
                    <VehicleCardsItemInfoBtn onClick={toggleCard} />
                  </VehicleCardsItemFront>
                  <VehicleCardsItemBack onClick={toggleCard} isActive={isActive}>
                    <VehicleCardsItemBackInfo>

                      {Object.values(info.specs).map((specsData, index) => {
                        return (
                          <VehicleCardsItemBackInfoItem key={index}>
                            {specsData.split(':')[0]}:
                            <VehicleCardsItemBackInfoItemRed>
                              {specsData.split(':')[1]}
                            </VehicleCardsItemBackInfoItemRed>
                          </VehicleCardsItemBackInfoItem>
                        )
                      })}

                    </VehicleCardsItemBackInfo>
                  </VehicleCardsItemBack>
                </VehicleCardsItem>
              )
            })}
          </VehicleCardsGrid>
        </VehicleCardsSectionContent>
      </Container>
    </VehicleCardsSection>
  )
}

export default VehicleCards
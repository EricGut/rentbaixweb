import React, { useState } from 'react'
import Container from '../../Container'
import { VehicleCardsGrid, VehicleCardsItem, VehicleCardsItemBack, VehicleCardsItemBackInfo, VehicleCardsItemBackInfoItem, VehicleCardsItemBackInfoItemRed, VehicleCardsItemFront, VehicleCardsItemFrontImage, VehicleCardsItemFrontSubTitle, VehicleCardsItemFrontTitle, VehicleCardsItemGallery, VehicleCardsItemInfoBtn, VehicleCardsSection, VehicleCardsSectionContent } from './VehicleCard.styled'
import ImageGallery from 'react-image-gallery';

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
              const { specs } = frontData
              return (
                <VehicleCardsItem key={frontData.id}>
                  {frontData.gallery &&
                    <VehicleCardsItemGallery>
                      <ImageGallery items={frontData.gallery} showThumbnails={false} showPlayButton={false} />
                    </VehicleCardsItemGallery>
                  }
                  <VehicleCardsItemFront border={frontData.border}>
                    <VehicleCardsItemFrontTitle>
                      {frontData.name}
                    </VehicleCardsItemFrontTitle>
                    <VehicleCardsItemFrontSubTitle>
                      {frontData.subtitle}
                    </VehicleCardsItemFrontSubTitle>
                    <VehicleCardsItemFrontImage src={frontData.vehicleImg} />
                    <VehicleCardsItemInfoBtn onClick={toggleCard} />
                  </VehicleCardsItemFront>
                  <VehicleCardsItemBack onClick={toggleCard} isActive={isActive}>
                    <VehicleCardsItemBackInfo>
                      {Object.values(specs).map((specsData, index) => {
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
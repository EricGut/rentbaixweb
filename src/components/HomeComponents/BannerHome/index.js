import React from 'react'
import { BannerImage, BannerImageWarpper } from './BannerHome.styled'

const BannerHome = ({ image }) => {
    return (
        <BannerImageWarpper>
            <BannerImage src={image} />
        </BannerImageWarpper>
    )
}

export default BannerHome
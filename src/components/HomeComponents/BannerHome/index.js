import React from 'react'
import { BannerImage, BannerImageWarpper } from './BannerHome.styled'

const BannerHome = ({ image }) => {
    return (
        <BannerImageWarpper>
            <BannerImage src={image} loading="lazy" />
        </BannerImageWarpper>
    )
}

export default BannerHome
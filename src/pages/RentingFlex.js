import React from 'react'
import Main from '../components/Main'
import RentingFlexCards from '../components/RentingFlexComponents/RentingFlexCards'
import RentingFlexContact from '../components/RentingFlexComponents/RentingFlexContact'
import RentingFlexHero from '../components/RentingFlexComponents/RentingFlexHero'

const RentingFlex = () => {

    return (
        <Main>
            <RentingFlexHero />
            <RentingFlexCards />
            <RentingFlexContact />
        </Main>
    )
}

export default RentingFlex
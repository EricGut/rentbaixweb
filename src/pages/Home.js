import React from 'react'
import BannerImage from '../components/BannerOffers'
import ContactHome from '../components/HomeComponents/ContactHome'
import HeroHome from '../components/HomeComponents/HeroHome'
import ServicesHome from '../components/HomeComponents/ServicesHome'
import VehiclesHome from '../components/HomeComponents/VehiclesHome'
import Main from '../components/Main'
// banner offers
import offerRv from '../images/ofertas/bannerrv.jpg'

const Home = () => {

    return (
        <Main>
            <BannerImage src={offerRv} />
            <HeroHome />
            <ServicesHome />
            <VehiclesHome />
            <ContactHome />
        </Main>
    )
}

export default Home
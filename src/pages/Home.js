import React from 'react'
import ContactHome from '../components/HomeComponents/ContactHome'
import HeroHome from '../components/HomeComponents/HeroHome'
import ServicesHome from '../components/HomeComponents/ServicesHome'
import VehiclesHome from '../components/HomeComponents/VehiclesHome'
import Main from '../components/Main'


const Home = () => {

    return (
        <Main>
            <HeroHome />
            <ServicesHome />
            <VehiclesHome />
            <ContactHome />
        </Main>
    )
}

export default Home
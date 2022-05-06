import React from 'react'
import HeroHome from '../components/HomeComponents/HeroHome'
import ServicesHome from '../components/HomeComponents/ServicesHome'
import Main from '../components/Main'

const Home = () => {

    return (
        <Main>
            <HeroHome />
            <ServicesHome />
        </Main>
    )
}

export default Home
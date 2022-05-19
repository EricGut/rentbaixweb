import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/Main'
// components
import VehiclesHeader from '../components/VehiclesComponents/VehcilesHeader'
// db
import cochesDb from '../VehiclesDb/CochesDb'
import autorv from '../VehiclesDb/autocaravanasDb'
import VehicleCards from '../components/VehiclesComponents/VehicleCards'
import VehicleCarIcons from '../components/VehiclesComponents/VehicleCarIcons'
//  Banner images
import bannerCochesImg from '../images/vehiclesBanner/carbanner.jpg'
import rvImg from '../images/vehiclesBanner/rvbanner.jpg'

const Vehicles = () => {
    let info = [];
    let title = null;
    let bannerImg = null;
    let { name } = useParams();
    switch (name) {
        case 'cochesmotos':
            info = cochesDb;
            title = 'Coches y Motos';
            bannerImg = bannerCochesImg
            break;
        case 'autocaravanas':
            info = autorv;
            title = 'Autocaravanas';
            bannerImg = rvImg
            break;

        default:
            info = [];
            break;
    }
    return (
        <Main>
            <VehiclesHeader title={title} bannerImg={bannerImg} />
            {name === 'cochesmotos' ? <VehicleCarIcons /> : null}
            <VehicleCards info={info} />
        </Main>
    )
}

export default Vehicles
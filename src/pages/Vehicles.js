import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/Main'
// components
import VehiclesHeader from '../components/VehiclesComponents/VehcilesHeader'
import RvResumen from '../components/VehiclesComponents/RvResumen'
import VehicleCarIcons from '../components/VehiclesComponents/VehicleCarIcons'
import VehicleCards from '../components/VehiclesComponents/VehicleCards'
// db
import cochesDb from '../VehiclesDb/CochesDb'
import autorv from '../VehiclesDb/autocaravanasDb'
import furgoDb from '../VehiclesDb/furgosDb'
//  Banner images
import bannerCochesImg from '../images/vehiclesBanner/carbanner.jpg'
import rvImg from '../images/vehiclesBanner/rvbanner.jpg'
import furgoBanner from '../images/vehiclesBanner/furgobanner.jpg'

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
        case 'furgonetas':
            info = furgoDb;
            title = 'Furgonetas';
            bannerImg = furgoBanner
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
            {name === 'autocaravanas' ? <RvResumen /> : null}
        </Main>
    )
}

export default Vehicles
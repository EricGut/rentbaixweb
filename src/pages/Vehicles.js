import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/Main'
// components
import VehiclesHeader from '../components/VehiclesComponents/VehcilesHeader'
// db
import cochesDb from '../VehiclesDb/CochesDb'
import autorv from '../VehiclesDb/autocaravanasDb'

const Vehicles = () => {
    let info = [];
    let { name } = useParams();
    switch (name) {
        case 'cochesmotos':
            info = cochesDb;
            break;
        case 'autocaravanas':
            info = autorv;
            break;

        default:
            info = [];
            break;
    }
    return (
        <Main>
            <VehiclesHeader info={info} />
        </Main>
    )
}

export default Vehicles
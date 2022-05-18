import bannerCochesImg from '../images/vehiclesBanner/carbanner.jpg'
import cocheImg from '../images/vehicles/cars/carCard.png'

const cochesInfo = [
    {
        id: 1,
        name: 'Coches y Motos',
        bannerImg: bannerCochesImg,
        info: {
            vehicleName: 'Coche',
            subtitle: 'standard',
            vehicleImg: cocheImg,
            specs: {
                minAge: 'Edad minima: 19',
                exp: 'Experiencia: 1 año',
                gear: 'Cambio: Manual',
                gas: 'Combustible: diesel',
                doors: 'Puertas: 5',
                seats: 'Plazas: 7'
            }
        }
    }
]

export default cochesInfo;
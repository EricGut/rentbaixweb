// main images rv
import small from '../images/vehicles/furgos/pequeña.png'
import medium from '../images/vehicles/furgos/mediana.png'
import mediumPlus from '../images/vehicles/furgos/medianaPlus.png'
import big from '../images/vehicles/furgos/grande.png'
import bigPlus from '../images/vehicles/furgos/grandePlus.png'
import chasisCaja from '../images/vehicles/furgos/chasisCaja.png'
import chasisPlataforma from '../images/vehicles/furgos/chasisPlataforma.png'

const furgodb = [
    {
        id: 1,
        name: 'Furgoneta',
        subtitle: 'Pequeña',
        vehicleImg: small,
        border: true,
        specs: {
            travelers: 'Pasajeros: 2',
            volumen: 'Volumen carga: 3-4 m3',
            interiorSize: 'Medidas interior(m): 4,40 x 1,85 x 1,85',
            exteriorSize: 'Medidas exterior(m): 1,55 x 1,50 x 1,30',

        }
    },
    {
        id: 2,
        name: 'Furgoneta',
        subtitle: 'Mediana',
        vehicleImg: medium,
        border: true,
        specs: {
            travelers: 'Pasajeros: 3',
            volumen: 'Volumen carga: 5-7 m3',
            interiorSize: 'Medidas interior(m): 4,90 x 1,90 x 2,00',
            exteriorSize: 'Medidas exterior(m): 2,00 x 1,60 x 1,45',

        },
    },
    {
        id: 3,
        name: 'Furgoneta',
        subtitle: 'Mediana Plus',
        vehicleImg: mediumPlus,
        border: true,
        specs: {
            travelers: 'Pasajeros: 3',
            volumen: 'Volumen carga: 7-8 m3',
            interiorSize: 'Medidas interior(m): 5,00 x 2,10 x 2,30',
            exteriorSize: 'Medidas exterior(m): 2,50 x 1,80 x 1,55',

        },
    },
    {
        id: 4,
        name: 'Furgoneta',
        subtitle: 'Grande',
        vehicleImg: big,
        border: true,
        specs: {
            travelers: 'Pasajeros: 3',
            volumen: 'Volumen carga: 10-11,5 m3',
            interiorSize: 'Medidas interior(m): 5,50 x 2,10 x 2,60',
            exteriorSize: 'Medidas exterior(m): 3,00 x 1,80 x 1,90',

        },
    },
    {
        id: 5,
        name: 'Furgoneta',
        subtitle: 'Grande Plus',
        vehicleImg: bigPlus,
        border: true,
        specs: {
            travelers: 'Pasajeros: 3',
            volumen: 'Volumen carga: 13-15 m3',
            interiorSize: 'Medidas interior(m): 6,00-6,40 x 2,10 x 2,60',
            exteriorSize: 'Medidas exterior(m): 3,50-4,00 x 1,80 x 1,90',

        },
    },
    {
        id: 6,
        name: 'Camión',
        subtitle: 'Chasis con caja',
        vehicleImg: chasisCaja,
        border: true,
        specs: {
            travelers: 'Pasajeros: 3',
            volumen: '20 m3',
            interiorSize: 'Medidas interior(m): Volumen carga: 6,50 x 2,20 x 3,50',
            exteriorSize: 'Medidas exterior(m): 4,10 x 2,05 x 2,10',

        },
    },
    {
        id: 7,
        name: 'Camión',
        subtitle: 'Chasis con plataforma',
        vehicleImg: chasisPlataforma,
        border: true,
        specs: {
            travelers: 'Pasajeros: 3',
            volumen: 'Volumen carga: 18 m3',
            interiorSize: 'Medidas interior(m): 6,50 x 2,20 x 3,50',
            exteriorSize: 'Medidas exterior(m): 4,10 x 2,05 x 2,10',

        },
    }
]

export default furgodb;
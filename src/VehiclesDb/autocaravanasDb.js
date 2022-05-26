// main images rv
import optimat70 from '../images/vehicles/rv/optimat70.png'
import across695ld from '../images/vehicles/rv/across695ld.png'
import rimorkayak7 from '../images/vehicles/rv/rimorkayak7.png'
import rimorseal9 from '../images/vehicles/rv/rimorseal9.png'
import rimorseal5 from '../images/vehicles/rv/rimorseal5.png'
import vantanak60ft from '../images/vehicles/rv/vantanak60ft.png'
// Gallery
import { galleryAcross695ld, galleryOptimat70, galleryRimorkayak7, galleryRimorseal5, galleryRimorseal9, galleryVantanak60ft } from './rvGalleryDb'

const autorv = [
    {
        id: 1,
        name: 'Optima T70',
        subtitle: 'Desde 100€/día*',
        vehicleImg: optimat70,
        specs: {
            travelSleep: 'Viajar/Dormir: 4/4',
            motor: 'Motorización: Fiat multijet 150 CV',
            heat: 'Calefacción: Si',
            freezer: 'Frigorifico: 140 litros',
            kitchen: 'Cocina: Completa',
            garage: 'Garaje: Amplio',
            beds: 'Camas: Cama doble'

        },
        gallery: galleryOptimat70
    },
    {
        id: 2,
        name: 'Vantana K60 FT',
        subtitle: 'Desde 80€/día*',
        vehicleImg: vantanak60ft,
        specs: {
            travelSleep: 'Viajar/Dormir: 4/2',
            motor: 'Motorización: Fiat 130 CV',
            heat: 'Calefacción: Si',
            freezer: 'Frigorifico: 80 litros',
            kitchen: 'Cocina: Completa',
            garage: 'Garaje: Amplio',
            beds: 'Camas: Transversal trasera'

        },
        gallery: galleryVantanak60ft
    },
    {
        id: 3,
        name: 'Rimor Kayak 7',
        subtitle: 'Desde 105€/día*',
        vehicleImg: rimorkayak7,
        specs: {
            travelSleep: 'Viajar/Dormir: 6/6',
            motor: 'Motorización: Renault 130 CV',
            heat: 'Calefacción: Si',
            freezer: 'Frigorifico: 145 litros',
            kitchen: 'Cocina: Completa',
            garage: 'Garaje: Amplio',
            beds: 'Camas: 2 camas en literas + 2 camas dobles'

        },
        gallery: galleryRimorkayak7
    },
    {
        id: 4,
        name: 'Across 695 LD',
        subtitle: 'Desde 120€/día*',
        vehicleImg: across695ld,
        specs: {
            travelSleep: 'Viajar/Dormir: 7/6+1',
            motor: 'Motorización: Renault 145 CV',
            heat: 'Calefacción: Si',
            freezer: 'Frigorifico: 190 litros',
            kitchen: 'Cocina: Completa',
            garage: 'Garaje: Amplio',
            beds: 'Camas: literas traseras + cama eléctrica supletoria'

        },
        gallery: galleryAcross695ld
    },
    {
        id: 5,
        name: 'Rimor Seal 5',
        subtitle: 'Desde 120€/día*',
        vehicleImg: rimorseal5,
        specs: {
            travelSleep: 'Viajar/Dormir: 6/6',
            motor: 'Motorización: Fiat 120 CV',
            heat: 'Calefacción: Si',
            freezer: 'Frigorifico: 80 litros',
            kitchen: 'Cocina: Completa',
            garage: 'Garaje: Amplio',
            beds: 'Camas: distribución transversal + cama eléctrica supletoria'

        },
        gallery: galleryRimorseal5
    },
    {
        id: 6,
        name: 'Rimor Seal 9',
        subtitle: 'Desde 120€/día*',
        vehicleImg: rimorseal9,
        specs: {
            travelSleep: 'Viajar/Dormir: 7/6+1',
            motor: 'Motorización: Fiat 120 CV',
            heat: 'Calefacción: Si',
            freezer: 'Frigorifico: 80 litros',
            kitchen: 'Cocina: Completa',
            garage: 'Garaje: Amplio',
            beds: 'Camas: 2 camas dobles + 2 camas literas'

        },
        gallery: galleryRimorseal9
    }
]

export default autorv;
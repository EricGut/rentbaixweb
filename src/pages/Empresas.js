import React from 'react'
import EmpresaContact from '../components/EmpresaComponents/EmpresaContact'
import EmpresaHero from '../components/EmpresaComponents/EmpresaHero'

import Main from '../components/Main'


const Empresas = () => {

    return (
        <Main>
            <EmpresaHero />
            <EmpresaContact />
        </Main>
    )
}

export default Empresas